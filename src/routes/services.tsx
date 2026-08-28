import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { TiltCard } from "@/components/site/TiltCard";
import { CorporateRow } from "@/components/site/CorporateRow";
import { seoHead } from "@/lib/seo";
import { useMode } from "@/lib/mode-context";
import { useT, detectLang } from "@/lib/i18n";
import { content } from "@/lib/content";

export const Route = createFileRoute("/services")({
  head: () => {
    const c = content[detectLang()].services;
    return seoHead("/services", [
      { title: c.seoTitle },
      { name: "description", content: c.seoDescription },
      { property: "og:title", content: c.ogTitle },
      { property: "og:description", content: c.ogDescription },
    ]);
  },
  component: ServicesPage,
});

function ServicesPage() {
  const { mode } = useMode();
  const t = useT();
  const c = t.services;
  const groups = c.groups;
  const isDark = mode === "consulting";

  return (
    <Layout>
      <section className="fade-section">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-28">
          <h1 className="font-display text-4xl md:text-7xl text-balance break-words">
            {c.title} <span className="italic font-light">{c.titleAccent}</span>
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-lg text-ink-soft max-w-2xl">{c.intro}</p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          {!isDark ? (
            <div className="grid md:grid-cols-2 gap-6">
              {groups.map((g, i) => (
                <TiltCard
                  key={g.n}
                  index={i}
                  className="bg-paper border border-border rounded-2xl p-6 md:p-10"
                >
                  <div className="flex items-center justify-between text-muted-foreground text-sm">
                    <span>{g.n}</span>
                    <span>{c.serviceLabel}</span>
                  </div>
                  <h2 className="font-sans font-semibold text-xl md:text-2xl mt-6 md:mt-8 break-words">
                    {g.title}
                  </h2>
                  <ul className="mt-6 md:mt-8 space-y-3">
                    {g.items.map((i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-ink-soft text-sm md:text-base"
                      >
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
          <h2 className="font-display text-3xl md:text-5xl">{c.engagementTitle}</h2>
          {!isDark ? (
            <div className="mt-10 md:mt-12 grid sm:grid-cols-3 gap-4">
              {c.engagementModels.map((m, i) => (
                <TiltCard
                  key={m}
                  index={i}
                  className="bg-ink border border-paper/10 rounded-2xl p-6 md:p-8"
                >
                  <h3 className="font-sans font-semibold text-base md:text-lg">{m}</h3>
                </TiltCard>
              ))}
            </div>
          ) : (
            <div className="mt-10 md:mt-12 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-paper/15 border-t border-b border-paper/15">
              {c.engagementModels.map((m) => (
                <div key={m} className="p-6 md:p-8">
                  <h3 className="font-sans font-semibold text-base md:text-lg">{m}</h3>
                </div>
              ))}
            </div>
          )}
          <Link
            to="/contact"
            className="inline-flex mt-10 md:mt-12 items-center rounded-full bg-paper text-ink px-6 py-3 font-medium"
          >
            {c.cta}
          </Link>
        </div>
      </section>
    </Layout>
  );
}
