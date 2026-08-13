import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { TiltCard } from "@/components/site/TiltCard";
import { CorporateRow } from "@/components/site/CorporateRow";
import { seoHead } from "@/lib/seo";
import { useMode } from "@/lib/mode-context";

export const Route = createFileRoute("/services")({
  head: () =>
    seoHead("/services", [
      { title: "Services | ADNC Group" },
      { name: "description", content: "Web & mobile engineering, DevOps & scaling — production-grade software engineering and cloud operations." },
      { property: "og:title", content: "Services — ADNC Group" },
      { property: "og:description", content: "Engineering and cloud operations for complex web and mobile applications." },
    ]),
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
];

function ServicesPage() {
  const { mode } = useMode();
  const isDark = mode === "consulting";

  return (
    <Layout>
      <section className="fade-section">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-28">
          <h1 className="font-display text-4xl md:text-7xl text-balance break-words">
            Engineering & cloud operations, <span className="italic font-light">under one roof.</span>
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-lg text-ink-soft max-w-2xl">
            ADNC Group delivers senior product engineering and cloud operations — from
            complex web and mobile platforms to production-grade DevOps, scaling, and
            infrastructure management.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          {!isDark ? (
            <div className="grid md:grid-cols-2 gap-6">
              {groups.map((g, i) => (
                <TiltCard key={g.n} index={i} className="bg-paper border border-border rounded-2xl p-6 md:p-10">
                  <div className="flex items-center justify-between text-muted-foreground text-sm">
                    <span>{g.n}</span><span>Service</span>
                  </div>
                  <h2 className="font-sans font-semibold text-xl md:text-2xl mt-6 md:mt-8 break-words">{g.title}</h2>
                  <ul className="mt-6 md:mt-8 space-y-3">
                    {g.items.map((i) => (
                      <li key={i} className="flex items-start gap-3 text-ink-soft text-sm md:text-base">
                        <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-ink shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              ))}
            </div>
          ) : (
            <div>
              {groups.map((g, i) => (
                <CorporateRow key={g.n} n={g.n} title={g.title} isDark={false} index={i}>
                  <ul className="space-y-1.5">
                    {g.items.map((item) => (
                      <li key={item}>— {item}</li>
                    ))}
                  </ul>
                </CorporateRow>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="fade-section-dark">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24 text-center">
          <h2 className="font-display text-3xl md:text-5xl">Engagement models built for ambition.</h2>
          {!isDark ? (
            <div className="mt-10 md:mt-12 grid sm:grid-cols-3 gap-4">
              {["Build with us", "Build & operate", "Operate & grow existing apps"].map((t, i) => (
                <TiltCard key={t} index={i} className="bg-ink border border-paper/10 rounded-2xl p-6 md:p-8">
                  <h3 className="font-sans font-semibold text-base md:text-lg">{t}</h3>
                </TiltCard>
              ))}
            </div>
          ) : (
            <div className="mt-10 md:mt-12 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-paper/15 border-t border-b border-paper/15">
              {["Build with us", "Build & operate", "Operate & grow existing apps"].map((t) => (
                <div key={t} className="p-6 md:p-8">
                  <h3 className="font-sans font-semibold text-base md:text-lg">{t}</h3>
                </div>
              ))}
            </div>
          )}
          <Link to="/contact" className="inline-flex mt-10 md:mt-12 items-center rounded-full bg-paper text-ink px-6 py-3 font-medium">
            Discuss your project →
          </Link>
        </div>
      </section>

    </Layout>
  );
}
