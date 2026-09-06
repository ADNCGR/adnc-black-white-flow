import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Ticker } from "@/components/site/Ticker";
import { TiltCard } from "@/components/site/TiltCard";
import { CorporateRow } from "@/components/site/CorporateRow";
import { SegmentGrid } from "@/components/site/SegmentGrid";
import { seoHead } from "@/lib/seo";
import { content } from "@/lib/content";
import { useMode } from "@/lib/mode-context";
import { useT, detectLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => {
    const c = content[detectLang()].home;
    return seoHead("/", [
      { title: c.seoTitle },
      { name: "description", content: c.seoDescription },
      { property: "og:title", content: c.ogTitle },
      { property: "og:description", content: c.ogDescription },
    ]);
  },
  component: Home,
});

/* ─────────── COMPONENT ─────────── */

function Home() {
  const { mode } = useMode();
  const t = useT();

  const isDark = mode === "consulting";
  const c = isDark ? t.home.consulting : t.home.dev;

  const services = c.services;
  const manifesto = c.manifesto;
  const method = c.method;
  const tickerItems = c.ticker;

  return (
    <Layout>
      <div key={mode} className="mode-content">
        {/* ============ HERO MONOLITH ============ */}
        <section className="relative overflow-hidden -mt-8 pt-8">
          <div
            className={`absolute inset-0 -z-10 grain ${
              isDark ? "fade-section-dark" : "fade-section"
            }`}
          />
          <div
            className={`orb w-[60vw] h-[60vw] -top-[20vw] -left-[20vw] drift-x ${
              isDark ? "orb-ink opacity-30" : "orb-paper"
            }`}
            aria-hidden
          />
          <div
            className={`orb w-[40vw] h-[40vw] top-[30vw] -right-[15vw] drift-x ${
              isDark ? "orb-paper opacity-10" : "orb-ink"
            }`}
            aria-hidden
          />

          <div className="mx-auto max-w-[110rem] px-6 md:px-10 pt-10 md:pt-16 pb-12">
            {/* Massive type slab */}
            <div className="relative reveal">
              <h1
                className={`font-display font-bold tracking-[-0.035em] leading-[0.88] md:leading-[0.84] text-balance break-words ${
                  isDark ? "text-paper" : "text-ink"
                }`}
                style={{ fontSize: "clamp(2.75rem, 13.5vw, 18rem)" }}
              >
                <span className="block">{c.hero1}</span>
                <span className={`block ${isDark ? "text-outline-paper" : "text-outline"}`}>
                  {c.hero2}
                </span>
                <span className="block">
                  {c.heroPrefix}{" "}
                  <span
                    className={`word-rotator italic font-light ${
                      isDark ? "text-paper" : "text-ink"
                    }`}
                  >
                    {c.heroWords.map((w) => (
                      <span key={w}>{w}</span>
                    ))}
                  </span>
                </span>
              </h1>
            </div>

            {/* Lower band */}
            <div className="mt-10 md:mt-24 grid lg:grid-cols-12 gap-8 md:gap-10 items-end">
              <div className="lg:col-span-7">
                <p
                  className={`text-base md:text-xl leading-relaxed line-clamp-6 md:line-clamp-none ${
                    isDark ? "text-paper/80" : "text-ink-soft"
                  }`}
                >
                  {c.intro}
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-start lg:items-end gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className={`mag inline-flex justify-center items-center rounded-full px-6 py-3.5 md:px-7 md:py-4 font-medium transition text-sm md:text-base ${
                    isDark
                      ? "bg-paper text-ink hover:bg-paper/90"
                      : "bg-ink text-paper hover:bg-ink-soft"
                  }`}
                >
                  {c.ctaPrimary}
                </Link>
                <Link
                  to="/services"
                  className={`mag inline-flex justify-center items-center rounded-full px-6 py-3.5 md:px-7 md:py-4 font-medium transition text-sm md:text-base ${
                    isDark
                      ? "border border-paper/30 text-paper hover:border-paper"
                      : "border border-ink/20 text-ink hover:border-ink"
                  }`}
                >
                  {c.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>

          {/* Manifesto tilt strips */}
          <div
            className={`relative py-6 md:py-10 overflow-hidden ${
              isDark ? "bg-paper text-ink" : "bg-ink text-paper"
            }`}
          >
            <div className="strip-tilt-1">
              <div className="marquee flex gap-8 md:gap-12 whitespace-nowrap w-max py-2 md:py-3">
                {[...manifesto, ...manifesto].map((w, i) => (
                  <span key={i} className="font-display text-2xl md:text-6xl tracking-[-0.02em]">
                    {w} <span className={isDark ? "text-ink/30" : "text-paper/30"}>/</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="strip-tilt-2 mt-2">
              <div
                className="marquee flex gap-8 md:gap-12 whitespace-nowrap w-max py-2 md:py-3"
                style={{ animationDirection: "reverse" }}
              >
                {[...manifesto, ...manifesto].map((w, i) => (
                  <span
                    key={i}
                    className={`font-display text-2xl md:text-6xl tracking-[-0.02em] ${
                      isDark ? "text-outline" : "text-outline-paper"
                    }`}
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ THREE WAYS IN ============ */}
        <SegmentGrid isDark={isDark} />

        {/* ============ TWO SIDES SPLIT ============ */}
        <section className={isDark ? "bg-ink" : "bg-paper"}>
          <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-16 md:py-36">
            <div className="flex items-end justify-between mb-10 md:mb-16">
              <div>
                <h2 className="font-display text-4xl md:text-7xl max-w-3xl text-balance">
                  {c.splitTitle}{" "}
                  <span className={`italic font-light ${isDark ? "text-paper/70" : ""}`}>
                    {c.splitTitleAccent}
                  </span>
                </h2>
              </div>
            </div>

            {!isDark ? (
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* BUILD */}
                <TiltCard
                  index={0}
                  className="bg-paper border border-border rounded-2xl p-6 md:p-14 relative overflow-hidden group"
                >
                  <div className="num-monolith text-ink/[0.04] absolute -top-8 -left-4 select-none pointer-events-none">
                    01
                  </div>
                  <div className="relative">
                    <h3 className="font-display text-4xl md:text-6xl">{t.home.dev.buildTitle}</h3>
                    <p className="mt-6 text-ink-soft text-base md:text-lg max-w-md">
                      {t.home.dev.buildBody}
                    </p>
                    <ul className="mt-8 md:mt-10 space-y-3 text-ink">
                      {t.home.dev.buildItems.map((i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 border-t border-border pt-3 text-sm md:text-base"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-ink shrink-0" /> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>

                {/* OPERATE */}
                <TiltCard
                  index={1}
                  className="bg-ink text-paper rounded-2xl p-6 md:p-14 relative overflow-hidden group"
                >
                  <div className="num-monolith text-paper/[0.06] absolute -top-8 -right-4 select-none pointer-events-none">
                    02
                  </div>
                  <div className="relative">
                    <h3 className="font-display text-4xl md:text-6xl">{t.home.dev.opsTitle}</h3>
                    <p className="mt-6 text-paper/70 text-base md:text-lg max-w-md">
                      {t.home.dev.opsBody}
                    </p>
                    <ul className="mt-8 md:mt-10 space-y-3">
                      {t.home.dev.opsItems.map((i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 border-t border-paper/15 pt-3 text-sm md:text-base"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-paper shrink-0" /> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </div>
            ) : (
              <div>
                <CorporateRow n="01" title={t.home.consulting.strategyTitle} isDark index={0}>
                  {t.home.consulting.strategyBody}
                  <ul className="mt-4 space-y-2">
                    {t.home.consulting.strategyItems.map((i) => (
                      <li key={i} className="text-paper/50">
                        — {i}
                      </li>
                    ))}
                  </ul>
                </CorporateRow>
                <CorporateRow n="02" title={t.home.consulting.executionTitle} isDark index={1}>
                  {t.home.consulting.executionBody}
                  <ul className="mt-4 space-y-2">
                    {t.home.consulting.executionItems.map((i) => (
                      <li key={i} className="text-paper/50">
                        — {i}
                      </li>
                    ))}
                  </ul>
                </CorporateRow>
              </div>
            )}
          </div>
        </section>

        {/* ============ CAPABILITIES THEATER ============ */}
        <section
          className={
            isDark
              ? "bg-[oklch(0.06_0_0)] text-paper relative overflow-hidden"
              : "bg-ink text-paper relative overflow-hidden"
          }
        >
          <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
          <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-20 md:py-40 relative">
            <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-20">
              <div>
                <h2 className="font-display text-4xl md:text-7xl max-w-3xl text-balance">
                  {c.capabilitiesTitle}{" "}
                  <span className="italic font-light text-outline-paper">
                    {c.capabilitiesAccent}
                  </span>
                </h2>
              </div>
              <Link
                to="/services"
                className="text-sm underline underline-offset-8 decoration-paper/30 hover:decoration-paper"
              >
                {t.home.viewAllServices}
              </Link>
            </div>

            {!isDark ? (
              <div
                className={`grid ${services.length > 4 ? "sm:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2"} gap-6`}
              >
                {services.map((s, i) => (
                  <TiltCard
                    key={s.n}
                    index={i}
                    className="bg-ink border border-paper/10 rounded-2xl p-6 md:p-14 group relative overflow-hidden transition hover:bg-[oklch(0.14_0_0)]"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-display text-sm text-paper/40">
                        {s.n} / {String(services.length).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-sans font-semibold text-xl md:text-2xl mt-8 md:mt-12 leading-[1.2] break-words">
                      {s.t}
                    </h3>
                    <p className="mt-4 md:mt-6 text-paper/60 max-w-md text-base md:text-lg line-clamp-4 md:line-clamp-none">
                      {s.d}
                    </p>
                  </TiltCard>
                ))}
              </div>
            ) : (
              <div>
                {services.map((s, i) => (
                  <CorporateRow key={s.n} n={s.n} title={s.t} isDark index={i}>
                    {s.d}
                  </CorporateRow>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ============ TICKER ============ */}
        <Ticker items={tickerItems} />

        {/* ============ PROCESS / METHOD ============ */}
        <section className={isDark ? "bg-ink text-paper relative" : "bg-paper-soft relative"}>
          <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-20 md:py-40">
            <div className="grid md:grid-cols-12 gap-10 mb-12 md:mb-20">
              <div className="md:col-span-5">
                <h2 className="font-display text-4xl md:text-6xl text-balance break-words">
                  {c.methodTitle}
                </h2>
              </div>
            </div>

            <div className="space-y-0">
              {method.map((step, i) => (
                <div
                  key={step.n}
                  data-reveal
                  style={{ ["--reveal-delay" as never]: `${i * 80}ms` }}
                  className={`grid md:grid-cols-12 gap-3 md:gap-6 py-8 md:py-10 border-t last:border-b group transition-colors ${
                    isDark ? "border-paper/15 hover:bg-paper/5" : "border-ink/15 hover:bg-paper"
                  }`}
                >
                  <div
                    className={`md:col-span-2 font-display text-xl md:text-2xl ${
                      isDark ? "text-paper/40" : "text-muted-foreground"
                    }`}
                  >
                    {step.n}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-2xl md:text-5xl">{step.t}</h3>
                  </div>
                  <div className="md:col-span-6">
                    <p
                      className={`text-base md:text-lg max-w-xl ${
                        isDark ? "text-paper/70" : "text-ink-soft"
                      }`}
                    >
                      {step.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA MONOLITH ============ */}
        <section
          className={
            isDark
              ? "bg-[oklch(0.05_0_0)] text-paper relative overflow-hidden"
              : "bg-ink text-paper relative overflow-hidden"
          }
        >
          <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
          <div
            className="orb orb-paper w-[50vw] h-[50vw] -bottom-[20vw] -right-[15vw] drift-x"
            aria-hidden
          />
          <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-20 md:py-48 relative">
            <h2
              className="font-display font-bold leading-[0.9] md:leading-[0.85] tracking-[-0.035em] text-balance break-words"
              style={{ fontSize: "clamp(2.5rem, 11vw, 14rem)" }}
            >
              {c.ctaTitle} <br />
              <span className="italic font-light text-outline-paper">{c.ctaAccent}</span>
            </h2>
            <div className="mt-10 md:mt-16 grid md:grid-cols-12 gap-6 md:gap-10 items-end">
              <p className="md:col-span-6 text-paper/70 text-base md:text-lg max-w-xl">
                {c.ctaBody}
              </p>
              <div className="md:col-span-6 flex md:justify-end">
                <Link
                  to="/contact"
                  className="mag inline-flex justify-center items-center rounded-full bg-paper text-ink px-7 py-4 md:px-8 md:py-5 text-base md:text-lg font-medium hover:bg-paper/90 transition w-full sm:w-auto"
                >
                  {c.ctaButton}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
