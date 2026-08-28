import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { TiltCard } from "@/components/site/TiltCard";
import { CorporateRow } from "@/components/site/CorporateRow";
import { seoHead } from "@/lib/seo";
import { useMode } from "@/lib/mode-context";
import { useT, detectLang } from "@/lib/i18n";
import { content } from "@/lib/content";
import { Layers, BadgeCheck, Building2, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => {
    const c = content[detectLang()].about;
    return seoHead("/about", [
      { title: c.seoTitle },
      { name: "description", content: c.seoDescription },
      { property: "og:title", content: c.ogTitle },
      { property: "og:description", content: c.ogDescription },
    ]);
  },
  component: AboutPage,
});

/** Icons stay here — they are structure, not copy. Same order as content.about.principles. */
const principleIcons = [Layers, BadgeCheck, Building2, Target];

function AboutPage() {
  const { mode } = useMode();
  const t = useT();
  const c = t.about;
  const principles = c.principles.map((p, i) => ({ ...p, Icon: principleIcons[i] }));
  const isDark = mode === "consulting";

  return (
    <Layout>
      <section className="fade-section">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-28 grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-7">
            <h1 className="font-display text-4xl md:text-7xl text-balance break-words">
              {c.title}
            </h1>
          </div>
          <div className="md:col-span-5 md:pt-16">
            <p className="text-base md:text-lg text-ink-soft">{c.intro}</p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl mb-10 md:mb-12">{c.principlesTitle}</h2>
          {!isDark ? (
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((p, i) => (
                <TiltCard
                  key={p.t}
                  index={i}
                  className="bg-paper border border-border rounded-2xl p-6 md:p-10"
                >
                  <p.Icon className="w-6 h-6 text-ink/30" strokeWidth={1.5} />
                  <h3 className="font-sans font-semibold text-lg md:text-xl mt-4 md:mt-6">{p.t}</h3>
                  <p className="mt-3 text-ink-soft max-w-md text-sm md:text-base">{p.d}</p>
                </TiltCard>
              ))}
            </div>
          ) : (
            <div>
              {principles.map((p, i) => (
                <CorporateRow key={p.t} n={`0${i + 1}`} title={p.t} isDark={false} index={i}>
                  {p.d}
                </CorporateRow>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="fade-section-dark">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-balance">{c.ctaTitle}</h2>
          <Link
            to="/contact"
            className="inline-flex mt-8 md:mt-10 items-center rounded-full bg-paper text-ink px-6 py-3 font-medium"
          >
            {c.cta}
          </Link>
        </div>
      </section>
    </Layout>
  );
}
