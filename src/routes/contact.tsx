import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { seoHead } from "@/lib/seo";
import { sendContactMessage } from "@/lib/contact";
import { useT, useLang, detectLang } from "@/lib/i18n";
import { content } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => {
    const c = content[detectLang()].contact;
    return seoHead("/contact", [
      { title: c.seoTitle },
      { name: "description", content: c.seoDescription },
      { property: "og:title", content: c.ogTitle },
      { property: "og:description", content: c.ogDescription },
    ]);
  },
  component: ContactPage,
});

function ContactPage() {
  const t = useT();
  const lang = useLang();
  const c = t.contact;
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
          phone: String(fields.get("phone") ?? ""),
          message: String(fields.get("message") ?? ""),
          website: String(fields.get("website") ?? ""),
          lang,
        },
      });
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error && err.message ? err.message : c.errorGeneric);
    }
  }
  return (
    <Layout>
      <section className="fade-section">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-28 grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-6">
            <h1 className="font-display text-4xl md:text-7xl text-balance break-words">
              {c.title}
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-lg text-ink-soft max-w-md">{c.intro}</p>
            <div className="mt-8 md:mt-12 space-y-2 text-ink-soft text-sm md:text-base">
              <p>{c.availability}</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:col-span-6 bg-paper border border-border rounded-3xl p-6 md:p-10 space-y-5"
          >
            {sent ? (
              <div className="py-10 text-center">
                <h2 className="font-display text-2xl">{c.sentTitle}</h2>
                <p className="text-ink-soft mt-2">{c.sentBody}</p>
              </div>
            ) : (
              <>
                {[
                  { id: "name", label: c.fieldName, required: true },
                  { id: "email", label: c.fieldEmail, type: "email", required: true },
                  { id: "phone", label: c.fieldPhone, type: "tel", required: false },
                  { id: "company", label: c.fieldCompany, required: false },
                ].map((f) => (
                  <div key={f.id}>
                    <label
                      className="text-xs uppercase tracking-widest text-muted-foreground"
                      htmlFor={f.id}
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      required={f.required}
                      type={f.type ?? "text"}
                      className="mt-2 block w-full bg-transparent border-b border-border focus:border-ink outline-none py-3"
                    />
                  </div>
                ))}
                <div>
                  <label
                    className="text-xs uppercase tracking-widest text-muted-foreground"
                    htmlFor="msg"
                  >
                    {c.fieldProject}
                  </label>
                  <textarea
                    id="msg"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 block w-full bg-transparent border-b border-border focus:border-ink outline-none py-3 resize-none"
                  />
                </div>
                {/* Honeypot — hidden from people, irresistible to bots. */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  className="hidden"
                />
                {error && (
                  <p role="alert" className="text-sm text-destructive">
                    {error}
                  </p>
                )}
                <button
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-ink text-paper py-3.5 font-medium hover:bg-ink-soft transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? c.sending : c.submit}
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
}
