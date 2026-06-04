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
          {/* Top eyebrow rail — hidden on mobile (empty) */}
          <div className="hidden md:flex items-center justify-between uppercase tracking-[0.25em] text-muted-foreground font-bold text-sm font-sans mb-10">
            <span className="text-slate-950">​</span>
            <span className="hidden md:inline">​</span>
            <span className="text-zinc-950">​</span>
          </div>
...
          <div className="flex items-end justify-between mb-10 md:mb-16">
            <div>
              <p className="uppercase tracking-[0.25em] text-muted-foreground font-bold text-sm font-sans">Chapter 01 — The model</p>
              <h2 className="font-display text-4xl md:text-7xl mt-4 max-w-3xl text-balance">
                One partner. <span className="italic font-light">Two sides.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {/* BUILD */}
            <div data-reveal className="bg-paper p-6 md:p-14 relative overflow-hidden group">
              <div className="num-monolith text-ink/[0.04] absolute -top-8 -left-4 select-none pointer-events-none">
                01
              </div>
              <div className="relative">
                <p className="uppercase tracking-[0.25em] text-muted-foreground font-bold text-sm font-sans">OPERATE</p>
...
                <p className="uppercase tracking-[0.25em] text-muted-foreground font-bold text-sm font-sans">Side B</p>
...
              <p className="uppercase tracking-[0.25em] text-muted-foreground font-bold text-sm font-sans">Capabilities</p>
              <h2 className="font-display text-4xl md:text-7xl mt-4 max-w-3xl text-balance">
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
                className="bg-ink p-6 md:p-14 group relative overflow-hidden transition hover:bg-[oklch(0.12_0_0)]"
              >
                <div className="absolute inset-x-0 -bottom-1 h-px bg-paper scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700" />
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm text-paper/40">{s.n} / 04</span>
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition text-2xl">→</span>
                </div>
                <h3 className="font-display text-2xl md:text-5xl mt-8 md:mt-12 leading-[1.05] md:leading-[0.95] break-words">{s.t}</h3>
                <p className="mt-4 md:mt-6 text-paper/60 max-w-md text-base md:text-lg line-clamp-4 md:line-clamp-none">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ============ TICKER ============ */}
      <Ticker items={["Web apps", "iOS", "Android", "DevOps & scaling", "24/7 support", "Internal call center", "B2B acquisition", "Operate & grow"]} />

      {/* ============ PROCESS / METHOD ============ */}
      <section className="bg-paper-soft relative">
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-20 md:py-40">
          <div className="grid md:grid-cols-12 gap-10 mb-12 md:mb-20">
            <div className="md:col-span-5">
              <p className="uppercase tracking-[0.25em] text-muted-foreground font-bold text-sm font-sans">METHOD</p>
...
          <p className="uppercase tracking-[0.25em] text-muted-foreground font-bold text-sm font-sans">Talk</p>
          <h2
            className="font-display font-medium mt-6 leading-[0.9] md:leading-[0.85] tracking-[-0.045em] text-balance break-words"
            style={{ fontSize: "clamp(2.5rem, 11vw, 14rem)" }}
          >
            Got something <br />
            <span className="italic font-light text-outline-paper">complicated?</span>
          </h2>
          <div className="mt-10 md:mt-16 grid md:grid-cols-12 gap-6 md:gap-10 items-end">
            <p className="md:col-span-6 text-paper/70 text-base md:text-lg max-w-xl">
              Share your objectives with our team. We respond with a senior point of view, a clear path forward and the team that
              would build and operate it.
            </p>
            <div className="md:col-span-6 flex md:justify-end">
              <Link
                to="/contact"
                className="mag inline-flex justify-center items-center rounded-full bg-paper text-ink px-7 py-4 md:px-8 md:py-5 text-base md:text-lg font-medium hover:bg-paper/90 transition w-full sm:w-auto"
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
