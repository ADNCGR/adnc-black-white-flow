import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | ADNC Group" },
      { name: "description", content: "Tell us about your mobile project. We reply within one business day." },
      { property: "og:title", content: "Contact — ADNC Group" },
      { property: "og:description", content: "Talk to our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="fade-section">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-28 grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-6">
            <p className="uppercase tracking-[0.25em] text-muted-foreground font-bold text-sm font-sans">Contact</p>
            <h1 className="font-display text-4xl md:text-7xl mt-4 text-balance break-words">Let's build something worth opening every day.</h1>
            <p className="mt-6 md:mt-8 text-base md:text-lg text-ink-soft max-w-md">
              Share a few details and the right person on our team will reply within one
              business day.
            </p>
            <div className="mt-8 md:mt-12 space-y-2 text-ink-soft text-sm md:text-base">
              <p>Available worldwide · HQ Casablanca, Morocco</p>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
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
                  { id: "name", label: "Your name" },
                  { id: "email", label: "Email", type: "email" },
                  { id: "company", label: "Company (optional)" },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground" htmlFor={f.id}>
                      {f.label}
                    </label>
                    <input
                      id={f.id} required type={f.type ?? "text"}
                      className="mt-2 block w-full bg-transparent border-b border-border focus:border-ink outline-none py-3"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground" htmlFor="budget">Expected budget</label>
                  <select id="budget" className="mt-2 block w-full bg-transparent border-b border-border focus:border-ink outline-none py-3">
                    <option>Up to $50k</option>
                    <option>$50k – $150k</option>
                    <option>$150k – $500k</option>
                    <option>$500k+</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground" htmlFor="msg">Project</label>
                  <textarea id="msg" rows={4} className="mt-2 block w-full bg-transparent border-b border-border focus:border-ink outline-none py-3 resize-none" />
                </div>
                <button className="w-full rounded-full bg-ink text-paper py-3.5 font-medium hover:bg-ink-soft transition">
                  Send message →
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
}
