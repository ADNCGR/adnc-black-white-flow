import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { TiltCard } from "@/components/site/TiltCard";
import { CorporateRow } from "@/components/site/CorporateRow";
import { seoHead } from "@/lib/seo";
import { useMode } from "@/lib/mode-context";
import { useT, detectLang } from "@/lib/i18n";
import { content } from "@/lib/content";
import { Users, CalendarClock, Compass, GitBranch, Handshake, Workflow } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => {
    const c = content[detectLang()].portfolio;
    return seoHead("/portfolio", [
      { title: c.seoTitle },
      { name: "description", content: c.seoDescription },
      { property: "og:title", content: c.ogTitle },
      { property: "og:description", content: c.ogDescription },
    ]);
  },
  component: WorkPage,
});

/** Icons stay here — structure, not copy. Same order as the content arrays. */
const founderIcons = [Users, CalendarClock, Compass, GitBranch];
const trackBIcons = [Handshake, CalendarClock, Workflow];

function WorkPage() {
  const { mode } = useMode();
  const t = useT();
  const c = t.portfolio;
  const trackAPhases = c.phases;
  const founderGets = c.founderGets.map((f, i) => ({ ...f, Icon: founderIcons[i] }));
  const trackBPoints = c.trackBPoints.map((p, i) => ({ ...p, Icon: trackBIcons[i] }));
  const isDark = mode === "consulting";

  return (
    <Layout>
      {/* HERO */}
      <section className="fade-section">
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-16 md:py-36">
          <h1
            className="font-display font-medium tracking-[-0.045em] leading-[0.9] md:leading-[0.85] text-balance break-words"
            style={{ fontSize: "clamp(2.5rem, 10vw, 12rem)" }}
          >
            {c.title} <br />
            <span className="italic font-light">{c.titleAccent}</span>
          </h1>
          <p className="mt-8 md:mt-12 text-base md:text-xl text-ink-soft max-w-3xl leading-relaxed">
            {c.intro}
          </p>
        </div>
      </section>

      {/* TRACK A */}
      <section className="bg-paper-soft border-t border-border">
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-16 md:py-36">
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-16">
            <div className="md:col-span-4">
              <h2 className="font-display text-4xl md:text-6xl text-balance break-words">
                {c.trackATitle}
              </h2>
            </div>
            <div className="md:col-span-8 md:pt-10">
              <p className="text-base md:text-lg text-ink-soft max-w-2xl">{c.trackASubtitle}</p>
            </div>
          </div>

          <div className="space-y-0">
            {trackAPhases.map((p, i) => (
              <div
                key={p.n}
                data-reveal
                style={{ ["--reveal-delay" as never]: `${i * 70}ms` }}
                className="grid md:grid-cols-12 gap-3 md:gap-6 py-8 md:py-10 border-t border-ink/15 last:border-b group hover:bg-paper transition-colors"
              >
                <div className="md:col-span-2 font-display text-xl md:text-2xl text-muted-foreground">
                  {c.phaseLabel} {p.n}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl md:text-4xl break-words">{p.t}</h3>
                  {p.meta && (
                    <p className="mt-3 text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      {p.meta}
                    </p>
                  )}
                </div>
                <div className="md:col-span-6">
                  <p className="text-ink-soft text-base md:text-lg max-w-xl line-clamp-5 md:line-clamp-none">
                    {p.d}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* What the founder gets */}
          <div className="mt-16 md:mt-32">
            <h3 className="font-display text-3xl md:text-5xl max-w-3xl text-balance">
              {c.founderTitle}
            </h3>

            {!isDark ? (
              <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-6">
                {founderGets.map((f, i) => (
                  <TiltCard
                    key={f.t}
                    index={i}
                    className="bg-paper-soft border border-border rounded-2xl p-6 md:p-10"
                  >
                    <f.Icon className="w-6 h-6 text-ink/30" strokeWidth={1.5} />
                    <h4 className="font-sans font-semibold text-lg md:text-xl mt-4">{f.t}</h4>
                    <p className="mt-3 md:mt-4 text-ink-soft text-base md:text-lg line-clamp-5 md:line-clamp-none">
                      {f.d}
                    </p>
                  </TiltCard>
                ))}
              </div>
            ) : (
              <div className="mt-10 md:mt-12">
                {founderGets.map((f, i) => (
                  <CorporateRow
                    key={f.t}
                    n={String(i + 1).padStart(2, "0")}
                    title={f.t}
                    isDark={false}
                    index={i}
                  >
                    {f.d}
                  </CorporateRow>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TRACK B */}
      <section className="bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-16 md:py-36 relative">
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-16">
            <div className="md:col-span-4">
              <h2 className="font-display text-4xl md:text-6xl text-balance break-words">
                {c.trackBTitle}{" "}
                <span className="italic font-light text-outline-paper">{c.trackBTitleAccent}</span>
              </h2>
            </div>
            <div className="md:col-span-8 md:pt-10">
              <p className="text-base md:text-lg text-paper/70 max-w-2xl">{c.trackBSubtitle}</p>
            </div>
          </div>

          {!isDark ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trackBPoints.map((p, i) => (
                <TiltCard
                  key={p.t}
                  index={i}
                  className="bg-[oklch(0.1_0_0)] border border-paper/10 rounded-2xl p-6 md:p-12"
                >
                  <p.Icon className="w-6 h-6 text-paper/30" strokeWidth={1.5} />
                  <h3 className="font-sans font-semibold text-lg md:text-xl mt-4 break-words">
                    {p.t}
                  </h3>
                  <p className="mt-4 md:mt-6 text-paper/70 text-base md:text-lg line-clamp-5 md:line-clamp-none">
                    {p.d}
                  </p>
                </TiltCard>
              ))}
            </div>
          ) : (
            <div>
              {trackBPoints.map((p, i) => (
                <CorporateRow
                  key={p.t}
                  n={String(i + 1).padStart(2, "0")}
                  title={p.t}
                  isDark
                  index={i}
                >
                  {p.d}
                </CorporateRow>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CLOSING + CTA */}
      <section className="bg-paper relative">
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-20 md:py-40 text-center">
          <h2
            className="font-display font-medium leading-[0.9] md:leading-[0.85] tracking-[-0.045em] text-balance break-words"
            style={{ fontSize: "clamp(2rem, 9vw, 10rem)" }}
          >
            {c.closingTitle} <br />
            <span className="italic font-light">{c.closingAccent}</span>
          </h2>
          <p className="mt-8 md:mt-10 text-base md:text-xl text-ink-soft max-w-2xl mx-auto">
            {c.closingBody}
          </p>
          <div className="mt-10 md:mt-14 flex justify-center">
            <Link
              to="/contact"
              className="mag inline-flex items-center rounded-full bg-ink text-paper px-7 py-4 md:px-8 md:py-5 text-base md:text-lg font-medium hover:bg-ink-soft transition"
            >
              {c.cta}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
