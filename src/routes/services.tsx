import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ADNC Group" },
      { name: "description", content: "Web & mobile engineering, DevOps & scaling, internalized customer support and B2B growth — the full build & operate stack." },
      { property: "og:title", content: "Services — ADNC Group" },
      { property: "og:description", content: "Build & operate complex web and mobile applications." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    n: "01",
    title: "Web & Mobile Engineering",
    items: ["Complex web platforms (React, Next, TanStack)", "Native iOS (Swift, SwiftUI)", "Native Android (Kotlin, Compose)", "React Native & Flutter", "Performance, security & release engineering"],
  },
  {
    n: "02",
    title: "DevOps, Scaling & Cloud Ops",
    items: ["Production infrastructure & CI/CD", "Observability & SRE practices", "Auto-scaling & cost optimization", "Incident response & on-call", "Security & compliance"],
  },
  {
    n: "03",
    title: "Customer Support & Call Center",
    items: ["Internalized support team", "Multi-channel (voice, chat, email)", "24/7 coverage models", "Tier 1 → Tier 3 escalation", "Tight loop with product & engineering"],
  },
  {
    n: "04",
    title: "B2B Growth & Acquisition",
    items: ["Go-to-market for the apps we operate", "Enterprise client sourcing", "Partnership structuring", "Sales operations & pipeline", "Account management"],
  },
];

function ServicesPage() {
  return (
    <Layout>
      <section className="fade-section">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-28">
          <p className="uppercase tracking-[0.25em] text-muted-foreground font-serif font-bold text-sm">Services</p>
          <p className="mt-6 md:mt-8 text-base md:text-lg text-ink-soft max-w-2xl">
            ADNC Group is two sides of the same business: senior product engineering
            and a full operations arm — DevOps, an internalized customer support and
            call center, and a B2B team that goes to market for the apps we run.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {groups.map((g) => (
              <div key={g.n} className="bg-paper p-6 md:p-10">
                <div className="flex items-center justify-between text-muted-foreground text-sm">
                  <span>{g.n}</span><span>Service</span>
                </div>
                <h2 className="font-display text-2xl md:text-4xl mt-6 md:mt-8 break-words">{g.title}</h2>
                <ul className="mt-6 md:mt-8 space-y-3">
                  {g.items.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-ink-soft text-sm md:text-base">
                      <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-ink shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fade-section-dark">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24 text-center">
          <h2 className="font-display text-3xl md:text-5xl">Engagement models built for ambition.</h2>
          <div className="mt-10 md:mt-12 grid sm:grid-cols-3 gap-px bg-paper/15">
            {["Build with us", "Build & operate", "Operate & grow existing apps"].map((t) => (
              <div key={t} className="bg-ink p-6 md:p-8">
                <h3 className="font-display text-lg md:text-xl">{t}</h3>
              </div>
            ))}
          </div>
          <Link to="/contact" className="inline-flex mt-10 md:mt-12 items-center rounded-full bg-paper text-ink px-6 py-3 font-medium">
            Discuss your project →
          </Link>
        </div>
      </section>

    </Layout>
  );
}
