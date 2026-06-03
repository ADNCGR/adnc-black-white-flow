import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Ticker } from "@/components/site/Ticker";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADNC Group — We build and operate complex web & mobile applications" },
      {
        name: "description",
        content:
          "ADNC Group designs, engineers, scales and operates complex web and mobile applications — from product engineering and DevOps to internalized customer support and B2B growth.",
      },
      { property: "og:title", content: "ADNC Group — Build & Operate" },
      { property: "og:description", content: "Two sides, one partner: product engineering and full operations for web & mobile apps." },
    ],
  }),
  component: Home,
});

const stats = [
  { k: "60+", v: "Web & mobile applications delivered to production" },
  { k: "24/7", v: "Internalized customer support & call center coverage" },
  { k: "4.9", v: "Average client satisfaction across engagements" },
  { k: "02", v: "Sides — we build, and we operate" },
];

const services = [
  {
    n: "01",
    t: "Web & mobile product engineering",
    d: "Talk",
  },
  {
    n: "02",
    t: "DevOps, scaling & cloud operations",
    d: "Production infrastructure, CI/CD, observability and on-call engineering. We keep your platform fast, resilient and ready for the next order of magnitude.",
  },
  {
    n: "03",
    t: "Customer support & internalized call center",
    d: "An in-house support organization and call center handling your end-users across every channel. Fully integrated with the product team that built the app, so feedback loops close in hours, not weeks.",

  },
  {
    n: "04",
    t: "B2B growth & client acquisition",
    d: "We go to market for the platforms we operate. Sourcing enterprise clients, structuring partnerships and driving the B2B pipeline that turns products into businesses.",

  },
];

const manifesto = [
  "We design",
  "We engineer",
  "We deploy",
  "We scale",
  "We support",
  "We sell",
  "We operate",
  "We answer the phone",
  "We own the outcome",
];

function Home() {
  return (
    <Layout>
      {/* ============ HERO MONOLITH ============ */}
      <section className="relative overflow-hidden -mt-24 pt-24">
        <div className="absolute inset-0 -z-10 fade-section grain" />
        <div className="orb orb-paper w-[60vw] h-[60vw] -top-[20vw] -left-[20vw] drift-x" aria-hidden />
        <div className="orb orb-ink w-[40vw] h-[40vw] top-[30vw] -right-[15vw] drift-x" aria-hidden />

        <div className="mx-auto max-w-[110rem] px-6 md:px-10 pt-10 md:pt-16 pb-12">
          {/* Top eyebrow rail */}
          <div className="flex items-center justify-between uppercase tracking-[0.25em] text-muted-foreground font-serif font-bold text-sm mb-10">
            <span className="text-slate-950">​</span>
            <span className="hidden md:inline">​</span>
            <span className="text-zinc-950">​</span>
          </div>

          {/* Massive type slab */}
          <div className="relative reveal">
            <h1
              className="font-display font-medium tracking-[-0.045em] leading-[0.82] text-balance"
              style={{ fontSize: "clamp(3.5rem, 13.5vw, 18rem)" }}
            >
              <span className="block">We build.</span>
              <span className="block text-outline">We operate.</span>
              <span className="block">
                We{" "}
                <span className="word-rotator italic font-light text-ink">
                  <span>scale.</span>
                  <span>support.</span>
                  <span>grow.</span>
                </span>
              </span>
            </h1>
          </div>

          {/* Lower band — text only, no image */}
          <div className="mt-16 md:mt-24 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-lg md:text-xl text-ink-soft leading-relaxed">
                ADNC Group is an end-to-end operating partner for complex software. We
                architect, engineer, harden, and deploy production-grade web and
                mobile platforms across the full stack: distributed backends, native
                iOS and Android, real-time infrastructure, applied AI, cloud DevOps,
                and security at every layer. Then we run them in production. SRE,
                internalized customer support, and a B2B sales team that brings you
                the partners and enterprise clients to scale.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-4">
              <Link
                to="/contact"
                className="mag inline-flex items-center rounded-full bg-ink text-paper px-7 py-4 font-medium hover:bg-ink-soft transition"
              >
                Request a consultation →
              </Link>
              <Link
                to="/services"
                className="mag inline-flex items-center rounded-full border border-ink/20 px-7 py-4 font-medium hover:border-ink transition"
              >
                See what we do
              </Link>
            </div>
          </div>
        </div>

        {/* Manifesto tilt strips */}
        <div className="relative bg-ink text-paper py-10 overflow-hidden">
          <div className="strip-tilt-1">
            <div className="marquee flex gap-12 whitespace-nowrap w-max py-3">
              {[...manifesto, ...manifesto].map((w, i) => (
                <span key={i} className="font-display text-4xl md:text-6xl tracking-[-0.02em]">
                  {w} <span className="text-paper/30">/</span>
                </span>
              ))}
            </div>
          </div>
          <div className="strip-tilt-2 mt-2">
            <div className="marquee flex gap-12 whitespace-nowrap w-max py-3" style={{ animationDirection: "reverse" }}>
              {[...manifesto, ...manifesto].map((w, i) => (
                <span key={i} className="font-display text-4xl md:text-6xl tracking-[-0.02em] text-outline-paper">
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ TWO SIDES SPLIT ============ */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-24 md:py-36">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="uppercase tracking-[0.25em] text-muted-foreground font-serif font-bold text-sm">Chapter 01 — The model</p>
              <h2 className="font-display text-5xl md:text-7xl mt-4 max-w-3xl text-balance">
                One partner. <span className="italic font-light">Two sides.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-px md:bg-border">
            {/* BUILD */}
            <div data-reveal className="bg-paper p-10 md:p-14 relative overflow-hidden group">
              <div className="num-monolith text-ink/[0.04] absolute -top-8 -left-4 select-none pointer-events-none">
                01
              </div>
              <div className="relative">
                <p className="uppercase tracking-[0.25em] text-muted-foreground font-serif font-bold text-sm">OPERATE</p>
                <h3 className="font-display text-5xl md:text-6xl mt-4">Build.</h3>
                <p className="mt-6 text-ink-soft text-lg max-w-md">
                  {"\n"}
                </p>
                <ul className="mt-10 space-y-3 text-ink">
                  {["Product strategy & discovery", "Web platforms (React, Next, TanStack)", "Native iOS & Android", "Realtime backends & APIs", "Applied AI & data"].map((i) => (
                    <li key={i} className="flex items-center gap-3 border-t border-border pt-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-ink" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* OPERATE */}
            <div data-reveal className="bg-ink text-paper p-10 md:p-14 relative overflow-hidden group">
              <div className="num-monolith text-paper/[0.06] absolute -top-8 -right-4 select-none pointer-events-none">
                02
              </div>
              <div className="relative">
                <p className="uppercase tracking-[0.25em] text-muted-foreground font-serif font-bold text-sm">Side B</p>
                <h3 className="font-display text-5xl md:text-6xl mt-4">Operate.</h3>
                <p className="mt-6 text-paper/70 text-lg max-w-md">
                  Then we run them. DevOps and scaling, an internalized customer support
                  organization and call center, and a B2B growth team that brings clients
                  to the platforms we operate.
                </p>
                <ul className="mt-10 space-y-3">
                  {["DevOps, SRE & cloud operations", "multi-channel support", "Internalized call center", "B2B sales & account management", "Continuous product evolution"].map((i) => (
                    <li key={i} className="flex items-center gap-3 border-t border-paper/15 pt-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-paper" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ============ DARK CAPABILITIES THEATER ============ */}
      <section className="bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-28 md:py-40 relative">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
            <div>
              <p className="uppercase tracking-[0.25em] text-muted-foreground font-serif font-bold text-sm">Capabilities</p>
              <h2 className="font-display text-5xl md:text-7xl mt-4 max-w-3xl text-balance">
                Engineering, operations and growth — <span className="italic font-light text-outline-paper">under one roof.</span>
              </h2>
            </div>
            <Link to="/services" className="text-sm underline underline-offset-8 decoration-paper/30 hover:decoration-paper">
              View all services →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-paper/10">
            {services.map((s, i) => (
              <div
                key={s.n}
                data-reveal
                style={{ ["--reveal-delay" as never]: `${i * 90}ms` }}
                className="bg-ink p-10 md:p-14 group relative overflow-hidden transition hover:bg-[oklch(0.12_0_0)]"
              >
                <div className="absolute inset-x-0 -bottom-1 h-px bg-paper scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700" />
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm text-paper/40">{s.n} / 04</span>
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition text-2xl">→</span>
                </div>
                <h3 className="font-display text-3xl md:text-5xl mt-12 leading-[0.95]">{s.t}</h3>
                <p className="mt-6 text-paper/60 max-w-md text-lg">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <Ticker items={["Web apps", "iOS", "Android", "DevOps & scaling", "24/7 support", "Internal call center", "B2B acquisition", "Operate & grow"]} />

      {/* ============ PROCESS / METHOD ============ */}
      <section className="bg-paper-soft relative">
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-28 md:py-40">
          <div className="grid md:grid-cols-12 gap-10 mb-20">
            <div className="md:col-span-5">
              <p className="uppercase tracking-[0.25em] text-muted-foreground font-serif font-bold text-sm">METHOD</p>
              <h2 className="font-display text-5xl md:text-6xl mt-4 text-balance">
                From a first call to a platform in production — and beyond.
              </h2>
            </div>
          </div>

          <div className="space-y-0">
            {[
              { n: "01", t: "Discover", d: "We map your business, your users and the technical constraints. We come back with a sharp brief, a senior team and a clear path to production." },
              { n: "02", t: "Design & engineer", d: "Senior product, design and engineering teams ship in tight loops. Real software, in real environments, every week." },
              { n: "03", t: "Launch & scale", d: "We harden the platform, set up DevOps, monitoring and on-call. The product goes live ready for the next order of magnitude." },
              { n: "04", t: "Operate & grow", d: "Our in-house support, call center and B2B teams take over the long game. Customers served, accounts won, retention compounded." },
            ].map((step, i) => (
              <div
                key={step.n}
                data-reveal
                style={{ ["--reveal-delay" as never]: `${i * 80}ms` }}
                className="grid md:grid-cols-12 gap-6 py-10 border-t border-ink/15 last:border-b group hover:bg-paper transition-colors"
              >
                <div className="md:col-span-2 font-display text-2xl text-muted-foreground">{step.n}</div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-3xl md:text-5xl">{step.t}</h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-ink-soft text-lg max-w-xl">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA MONOLITH ============ */}
      <section className="bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
        <div className="orb orb-paper w-[50vw] h-[50vw] -bottom-[20vw] -right-[15vw] drift-x" aria-hidden />
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-32 md:py-48 relative">
          <p className="uppercase tracking-[0.25em] text-muted-foreground font-serif font-bold text-sm">Talk</p>
          <h2
            className="font-display font-medium mt-6 leading-[0.85] tracking-[-0.045em] text-balance"
            style={{ fontSize: "clamp(3rem, 11vw, 14rem)" }}
          >
            Got something <br />
            <span className="italic font-light text-outline-paper">complicated?</span>
          </h2>
          <div className="mt-16 grid md:grid-cols-12 gap-10 items-end">
            <p className="md:col-span-6 text-paper/70 text-lg max-w-xl">
              Share your objectives with our team. We respond with a senior point of view, a clear path forward and the team that
              would build and operate it.
            </p>
            <div className="md:col-span-6 flex md:justify-end">
              <Link
                to="/contact"
                className="mag inline-flex items-center rounded-full bg-paper text-ink px-8 py-5 text-lg font-medium hover:bg-paper/90 transition"
              >
                Start a conversation →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
