import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Ticker } from "@/components/site/Ticker";
import { TiltCard } from "@/components/site/TiltCard";
import { CorporateRow } from "@/components/site/CorporateRow";
import { seoHead } from "@/lib/seo";
import { useMode } from "@/lib/mode-context";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead("/", [
      { title: "ADNC Group | Engineering & Consulting for complex digital systems" },
      {
        name: "description",
        content:
          "ADNC Group designs, engineers, and scales complex web and mobile applications — and provides strategic consulting in digital transformation, infrastructure, BI and finance.",
      },
      { property: "og:title", content: "ADNC Group — Engineering & Consulting" },
      { property: "og:description", content: "Two pillars, one partner: product engineering and strategic consulting." },
    ]),
  component: Home,
});

/* ─────────── DEV CONTENT ─────────── */

const devServices = [
  {
    n: "01",
    t: "Web & mobile product engineering",
    d: "From architecture to App Store. We build production-grade web platforms and native iOS & Android apps — full stack, with distributed backends, real-time infrastructure and applied AI.",
  },
  {
    n: "02",
    t: "DevOps, scaling & cloud operations",
    d: "Production infrastructure, CI/CD, observability and on-call engineering. We keep your platform fast, resilient and ready for the next order of magnitude.",
  },
];

const devManifesto = [
  "We design",
  "We engineer",
  "We deploy",
  "We scale",
  "We optimize",
  "We secure",
  "We own the outcome",
];

const devMethod = [
  { n: "01", t: "Discover", d: "We map your business, your users and the technical constraints. We come back with a sharp brief, a senior team and a clear path to production." },
  { n: "02", t: "Design & engineer", d: "Senior product, design and engineering teams ship in tight loops. Real software, in real environments, every week." },
  { n: "03", t: "Launch & scale", d: "We harden the platform, set up DevOps, monitoring and on-call. The product goes live ready for the next order of magnitude." },
  { n: "04", t: "Iterate & evolve", d: "Continuous product evolution — performance optimization, feature expansion, and platform modernization driven by real usage data." },
];

const devBuildItems = ["Product strategy & discovery", "Web platforms (React, Next, TanStack)", "Native iOS & Android", "Realtime backends & APIs", "Applied AI & data"];
const devOpsItems = ["DevOps, SRE & cloud operations", "CI/CD pipelines", "Observability & monitoring", "Auto-scaling & cost optimization", "Security & compliance"];

const devTickerItems = ["Web apps", "iOS", "Android", "DevOps & scaling", "Cloud ops", "Applied AI", "Full stack", "Real-time"];

/* ─────────── CONSULTING CONTENT ─────────── */

const consultingServices = [
  {
    n: "01",
    t: "Digital transformation",
    d: "End-to-end digital strategy: we audit your current systems, design the target architecture, and lead the organizational change management that makes transformation stick.",
  },
  {
    n: "02",
    t: "Technology advisory",
    d: "Independent technology audits, architecture reviews, and strategic roadmapping. We help you make the right technology bets — from stack selection to build-vs-buy decisions.",
  },
  {
    n: "03",
    t: "Infrastructure & cloud",
    d: "Cloud migration strategy, hybrid architecture design, and infrastructure modernization. We plan and oversee the transition to scalable, secure, cost-efficient environments.",
  },
  {
    n: "04",
    t: "Business intelligence & data",
    d: "Data strategy, BI architecture, dashboards and analytics. We help you build the decision-making infrastructure that turns raw data into competitive advantage.",
  },
  {
    n: "05",
    t: "Financial advisory",
    d: "Financial modeling, business plans, fundraising strategy, and operational audits. Strategic financial counsel for tech-driven businesses at every stage.",
  },
];

const consultingManifesto = [
  "We advise",
  "We strategize",
  "We transform",
  "We optimize",
  "We audit",
  "We plan",
  "We deliver clarity",
];

const consultingMethod = [
  { n: "01", t: "Assess", d: "Deep dive into your organization, systems, and objectives. We deliver a comprehensive diagnostic with clear findings and prioritized opportunities." },
  { n: "02", t: "Strategize", d: "We design a tailored roadmap — technology choices, organizational changes, timelines, and investment priorities aligned with your business goals." },
  { n: "03", t: "Execute", d: "Hands-on advisory through implementation. We embed with your teams to ensure the strategy translates into measurable outcomes." },
  { n: "04", t: "Measure & refine", d: "Continuous performance tracking, KPI monitoring, and strategic refinement. We ensure every initiative delivers tangible ROI." },
];

const consultingTickerItems = ["Digital transformation", "Tech advisory", "Cloud strategy", "BI & Data", "Financial counsel", "Change management", "Architecture", "Roadmapping"];

/* ─────────── COMPONENT ─────────── */

function Home() {
  const { mode } = useMode();

  const services = mode === "dev" ? devServices : consultingServices;
  const manifesto = mode === "dev" ? devManifesto : consultingManifesto;
  const method = mode === "dev" ? devMethod : consultingMethod;
  const tickerItems = mode === "dev" ? devTickerItems : consultingTickerItems;

  const isDark = mode === "consulting";

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
              {!isDark ? (
                <h1
                  className="font-display font-bold tracking-[-0.035em] leading-[0.88] md:leading-[0.84] text-balance break-words text-ink"
                  style={{ fontSize: "clamp(2.75rem, 13.5vw, 18rem)" }}
                >
                  <span className="block">We build.</span>
                  <span className="block text-outline">We operate.</span>
                  <span className="block">
                    We{" "}
                    <span className="word-rotator italic font-light text-ink">
                      <span>scale.</span>
                      <span>deploy.</span>
                      <span>engineer.</span>
                    </span>
                  </span>
                </h1>
              ) : (
                <h1
                  className="font-display font-bold tracking-[-0.035em] leading-[0.88] md:leading-[0.84] text-balance break-words text-paper"
                  style={{ fontSize: "clamp(2.75rem, 13.5vw, 18rem)" }}
                >
                  <span className="block">We advise.</span>
                  <span className="block text-outline-paper">We transform.</span>
                  <span className="block">
                    We{" "}
                    <span className="word-rotator italic font-light text-paper">
                      <span>strategize.</span>
                      <span>optimize.</span>
                      <span>deliver.</span>
                    </span>
                  </span>
                </h1>
              )}
            </div>

            {/* Lower band */}
            <div className="mt-10 md:mt-24 grid lg:grid-cols-12 gap-8 md:gap-10 items-end">
              <div className="lg:col-span-7">
                {!isDark ? (
                  <p className="text-base md:text-xl text-ink-soft leading-relaxed line-clamp-6 md:line-clamp-none">
                    ADNC Group is an engineering partner for complex software. We
                    architect, engineer, harden, and deploy production-grade web and
                    mobile platforms across the full stack: distributed backends, native
                    iOS and Android, real-time infrastructure, applied AI, cloud DevOps,
                    and security at every layer.
                  </p>
                ) : (
                  <p className="text-base md:text-xl text-paper/80 leading-relaxed line-clamp-6 md:line-clamp-none">
                    ADNC Group is a strategic consulting partner for ambitious organizations.
                    We guide digital transformation, architect cloud infrastructure,
                    build data-driven decision systems, and provide financial and technology
                    advisory that turns complexity into competitive advantage.
                  </p>
                )}
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
                  {!isDark ? "Start a project →" : "Request a consultation →"}
                </Link>
                <Link
                  to="/services"
                  className={`mag inline-flex justify-center items-center rounded-full px-6 py-3.5 md:px-7 md:py-4 font-medium transition text-sm md:text-base ${
                    isDark
                      ? "border border-paper/30 text-paper hover:border-paper"
                      : "border border-ink/20 text-ink hover:border-ink"
                  }`}
                >
                  {!isDark ? "See what we build" : "See our expertise"}
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

        {/* ============ TWO SIDES SPLIT ============ */}
        <section className={isDark ? "bg-ink" : "bg-paper"}>
          <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-16 md:py-36">
            <div className="flex items-end justify-between mb-10 md:mb-16">
              <div>
                <h2 className="font-display text-4xl md:text-7xl max-w-3xl text-balance">
                  {!isDark ? (
                    <>One partner. <span className="italic font-light">Full stack.</span></>
                  ) : (
                    <>One partner. <span className="italic font-light text-paper/70">Complete clarity.</span></>
                  )}
                </h2>
              </div>
            </div>

            {!isDark ? (
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* BUILD */}
                <TiltCard index={0} className="bg-paper border border-border rounded-2xl p-6 md:p-14 relative overflow-hidden group">
                  <div className="num-monolith text-ink/[0.04] absolute -top-8 -left-4 select-none pointer-events-none">01</div>
                  <div className="relative">
                    <h3 className="font-display text-4xl md:text-6xl">Engineer.</h3>
                    <p className="mt-6 text-ink-soft text-base md:text-lg max-w-md">
                      We design, architect and ship complex web and mobile applications — across the full stack. Native iOS & Android, distributed backends, real-time systems and applied AI, all the way to production.
                    </p>
                    <ul className="mt-8 md:mt-10 space-y-3 text-ink">
                      {devBuildItems.map((i) => (
                        <li key={i} className="flex items-center gap-3 border-t border-border pt-3 text-sm md:text-base">
                          <span className="w-1.5 h-1.5 rounded-full bg-ink shrink-0" /> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>

                {/* OPERATE */}
                <TiltCard index={1} className="bg-ink text-paper rounded-2xl p-6 md:p-14 relative overflow-hidden group">
                  <div className="num-monolith text-paper/[0.06] absolute -top-8 -right-4 select-none pointer-events-none">02</div>
                  <div className="relative">
                    <h3 className="font-display text-4xl md:text-6xl">Operate.</h3>
                    <p className="mt-6 text-paper/70 text-base md:text-lg max-w-md">
                      Then we run them. DevOps and scaling, cloud infrastructure, SRE and on-call engineering. We keep your platform fast, resilient and secure at every scale.
                    </p>
                    <ul className="mt-8 md:mt-10 space-y-3">
                      {devOpsItems.map((i) => (
                        <li key={i} className="flex items-center gap-3 border-t border-paper/15 pt-3 text-sm md:text-base">
                          <span className="w-1.5 h-1.5 rounded-full bg-paper shrink-0" /> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </div>
            ) : (
              <div>
                <CorporateRow n="01" title="Strategy." isDark index={0}>
                  We assess, strategize, and design transformation roadmaps — digital strategy, technology advisory, and organizational change management.
                  <ul className="mt-4 space-y-2">
                    {["Digital transformation strategy", "Technology audit & advisory", "Change management", "Cloud migration planning", "Data strategy"].map((i) => (
                      <li key={i} className="text-paper/50">— {i}</li>
                    ))}
                  </ul>
                </CorporateRow>
                <CorporateRow n="02" title="Execution." isDark index={1}>
                  Then we deliver. BI dashboards, financial models, infrastructure roadmaps, and measurable outcomes. Advisory that translates into real results.
                  <ul className="mt-4 space-y-2">
                    {["Business intelligence & dashboards", "Financial modeling & audits", "Infrastructure architecture", "Performance tracking & KPIs", "ROI-driven recommendations"].map((i) => (
                      <li key={i} className="text-paper/50">— {i}</li>
                    ))}
                  </ul>
                </CorporateRow>
              </div>
            )}
          </div>
        </section>

        {/* ============ CAPABILITIES THEATER ============ */}
        <section className={isDark ? "bg-[oklch(0.06_0_0)] text-paper relative overflow-hidden" : "bg-ink text-paper relative overflow-hidden"}>
          <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
          <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-20 md:py-40 relative">
            <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-20">
              <div>
                <h2 className="font-display text-4xl md:text-7xl max-w-3xl text-balance">
                  {!isDark ? (
                    <>Engineering & cloud operations — <span className="italic font-light text-outline-paper">under one roof.</span></>
                  ) : (
                    <>Strategy, data & transformation — <span className="italic font-light text-outline-paper">end to end.</span></>
                  )}
                </h2>
              </div>
              <Link to="/services" className="text-sm underline underline-offset-8 decoration-paper/30 hover:decoration-paper">
                View all services →
              </Link>
            </div>

            {!isDark ? (
              <div className={`grid ${services.length > 4 ? "sm:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2"} gap-6`}>
                {services.map((s, i) => (
                  <TiltCard
                    key={s.n}
                    index={i}
                    className="bg-ink border border-paper/10 rounded-2xl p-6 md:p-14 group relative overflow-hidden transition hover:bg-[oklch(0.14_0_0)]"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-display text-sm text-paper/40">{s.n} / {String(services.length).padStart(2, "0")}</span>
                    </div>
                    <h3 className="font-sans font-semibold text-xl md:text-2xl mt-8 md:mt-12 leading-[1.2] break-words">{s.t}</h3>
                    <p className="mt-4 md:mt-6 text-paper/60 max-w-md text-base md:text-lg line-clamp-4 md:line-clamp-none">{s.d}</p>
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
                  {!isDark
                    ? "From a first call to a platform in production — and beyond."
                    : "From diagnostic to measurable transformation — and beyond."}
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
                    isDark
                      ? "border-paper/15 hover:bg-paper/5"
                      : "border-ink/15 hover:bg-paper"
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
        <section className={isDark ? "bg-[oklch(0.05_0_0)] text-paper relative overflow-hidden" : "bg-ink text-paper relative overflow-hidden"}>
          <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
          <div className="orb orb-paper w-[50vw] h-[50vw] -bottom-[20vw] -right-[15vw] drift-x" aria-hidden />
          <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-20 md:py-48 relative">
            <h2
              className="font-display font-bold leading-[0.9] md:leading-[0.85] tracking-[-0.035em] text-balance break-words"
              style={{ fontSize: "clamp(2.5rem, 11vw, 14rem)" }}
            >
              {!isDark ? (
                <>Got something <br /><span className="italic font-light text-outline-paper">complex?</span></>
              ) : (
                <>Need strategic <br /><span className="italic font-light text-outline-paper">clarity?</span></>
              )}
            </h2>
            <div className="mt-10 md:mt-16 grid md:grid-cols-12 gap-6 md:gap-10 items-end">
              <p className="md:col-span-6 text-paper/70 text-base md:text-lg max-w-xl">
                {!isDark
                  ? "Share your objectives with our team. We respond with a senior point of view, a clear path forward and the team that would build it."
                  : "Share your challenges with our team. We respond with a senior diagnostic, a strategic roadmap, and the expertise to make it happen."}
              </p>
              <div className="md:col-span-6 flex md:justify-end">
                <Link
                  to="/contact"
                  className="mag inline-flex justify-center items-center rounded-full bg-paper text-ink px-7 py-4 md:px-8 md:py-5 text-base md:text-lg font-medium hover:bg-paper/90 transition w-full sm:w-auto"
                >
                  {!isDark ? "Start a project →" : "Book a consultation →"}
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
