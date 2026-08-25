import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { seoHead } from "@/lib/seo";
import { sendContactMessage } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () =>
    seoHead("/contact", [
      { title: "Contact | ADNC Group" },
      { name: "description", content: "Tell us about your mobile project. We reply within one business day." },
      { property: "og:title", content: "Contact — ADNC Group" },
      { property: "og:description", content: "Talk to our team." },
    ]),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const sent = status === "sent";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = new FormData(form);
    setStatus("sending");
    setError("");
    try {
      await sendContactMessage({
        data: {
          name: String(fields.get("name") ?? ""),
          email: String(fields.get("email") ?? ""),
          company: String(fields.get("company") ?? ""),
          message: String(fields.get("message") ?? ""),
          website: String(fields.get("website") ?? ""),
        },
      });
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message
          ? err.message
          : "We couldn't send your message. Please try again in a moment.",
      );
    }
  }
  return (
    <Layout>
      <section className="fade-section">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-28 grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-6">
            <h1 className="font-display text-4xl md:text-7xl text-balance break-words">Let's build something worth opening every day.</h1>
            <p className="mt-6 md:mt-8 text-base md:text-lg text-ink-soft max-w-md">
              Share a few details and the right person on our team will reply within one
              business day.
            </p>
            <div className="mt-8 md:mt-12 space-y-2 text-ink-soft text-sm md:text-base">
              <p>Available worldwide · HQ Casablanca, Morocco</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:col-span-6 bg-paper border border-border rounded-3xl p-6 md:p-10 space-y-5"
          >

            {sent ? (
              <div className="py-10 text-center">
                <h2 className="font-display text-2xl">Message received.</h2>
                <p className="text-ink-soft mt-2">We'll be in touch shortly.</p>
              </div>
            ) : (
              <>
                {[
                  { id: "name", label: "Your name", required: true },
                  { id: "email", label: "Email", type: "email", required: true },
                  { id: "company", label: "Company (optional)", required: false },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground" htmlFor={f.id}>
                      {f.label}
                    </label>
                    <input
                      id={f.id} name={f.id} required={f.required} type={f.type ?? "text"}
                      className="mt-2 block w-full bg-transparent border-b border-border focus:border-ink outline-none py-3"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground" htmlFor="msg">Project</label>
                  <textarea id="msg" name="message" rows={4} required className="mt-2 block w-full bg-transparent border-b border-border focus:border-ink outline-none py-3 resize-none" />
                </div>
                {/* Honeypot — hidden from people, irresistible to bots. */}
                <input
                  type="text" name="website" tabIndex={-1} autoComplete="off"
                  aria-hidden className="hidden"
                />
                {error && (
                  <p role="alert" className="text-sm text-destructive">{error}</p>
                )}
                <button
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-ink text-paper py-3.5 font-medium hover:bg-ink-soft transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending…" : "Send message →"}
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
}
