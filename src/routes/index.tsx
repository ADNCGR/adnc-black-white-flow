import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { MockupCard } from "@/components/site/MockupCard";
import { Sticker } from "@/components/site/Sticker";
import { Ticker } from "@/components/site/Ticker";
import { heroMockup, mockups } from "@/data/mockups";

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

const logos = [
  "AURUM", "NORTH/CO", "TABLÉE", "MAISON NOIR", "PULSE", "HELIX",
  "ATLAS", "MERIDIAN", "FORM&CO", "BLACKBIRD",
];

const stats = [
  { k: "60+", v: "Web & mobile applications delivered to production" },
  { k: "24/7", v: "Internalized customer support & call center coverage" },
  { k: "4.9/5", v: "Average client satisfaction across engagements" },
  { k: "2", v: "Sides of the business — we build and we operate" },
];

const services = [
  {
    n: "01",
    t: "Web & mobile product engineering",
    d: "Complex web platforms, native iOS, Android and cross-platform applications — architected for performance, security and long-term maintainability at enterprise scale.",
  },
  {
    n: "02",
    t: "DevOps, scaling & cloud operations",
    d: "Production infrastructure, CI/CD, observability and on-call engineering. We keep your platform fast, resilient and ready for the next order of magnitude.",
  },
  {
    n: "03",
    t: "Customer support & internalized call center",
    d: "An in-house support organization and call center handling your end-users across channels — fully integrated with the product team that built the app.",
  },
  {
    n: "04",
    t: "B2B growth & client acquisition",
    d: "We go to market for the applications we operate — sourcing enterprise clients, structuring partnerships and driving B2B pipeline for our portfolio.",
  },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 fade-section grain" />
        <div className="mx-auto max-w-7xl px-6 pt-12 md:pt-24 pb-20 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 reveal">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                We build · We operate · We grow
              </p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-semibold text-balance">
                Turning complex ideas into{" "}
                <span className="italic font-light text-kinetic">flawless</span> web &
                mobile applications — then running them.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-xl">
                ADNC Group is a two-sided partner: a senior product engineering studio
                that designs and ships complex web & mobile applications, and a full
                operations arm that scales them — DevOps, an internalized customer
                support and call center, and B2B growth for the products we run.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="mag inline-flex items-center rounded-full bg-ink text-paper px-6 py-3.5 font-medium hover:bg-ink-soft transition"
                >
                  Request a consultation →
                </Link>
                <Link
                  to="/portfolio"
                  className="mag inline-flex items-center rounded-full border border-ink/20 px-6 py-3.5 font-medium hover:border-ink transition"
                >
                  Explore our portfolio
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 reveal">
              <div className="relative aspect-square max-w-lg mx-auto float-slow">
                <div className="halo" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-secondary to-paper" />
                <img
                  src={heroMockup.image}
                  alt={heroMockup.alt}
                  width={1280}
                  height={1280}
                  className="relative w-full h-full object-contain grayscale drop-shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6">
                  <Sticker />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo marquee */}
        <div className="border-y border-border bg-paper">
          <div className="overflow-hidden py-8">
            <div className="marquee flex gap-16 whitespace-nowrap w-max">
              {[...logos, ...logos].map((l, i) => (
                <span
                  key={i}
                  className="font-display text-xl md:text-2xl tracking-[0.2em] text-ink-soft/60"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS / TRUST */}
      <section className="fade-section-dark">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.25em] text-paper/50">
                Why ADNC Group
              </p>
              <h2 className="font-display text-4xl md:text-5xl mt-4 text-balance">
                A trusted partner for founders, scale-ups and global enterprises.
              </h2>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-8">
              {stats.map((s) => (
                <div key={s.v} className="border-t border-paper/15 pt-6">
                  <div className="font-display text-5xl md:text-6xl">{s.k}</div>
                  <div className="mt-2 text-paper/60">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Our capabilities
              </p>
              <h2 className="font-display text-4xl md:text-5xl mt-3 max-w-2xl text-balance">
                An integrated mobile practice covering strategy, design, engineering and operations.
              </h2>
            </div>
            <Link to="/services" className="text-sm underline underline-offset-4">
              View all services →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {services.map((s, i) => (
              <div
                key={s.n}
                data-reveal
                style={{ ["--reveal-delay" as any]: `${i * 90}ms` }}
                className="bg-paper p-8 md:p-10 transition hover:bg-paper-soft group relative overflow-hidden"
              >
                <div className="absolute inset-x-0 -bottom-1 h-px bg-ink scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700" />
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm text-muted-foreground">{s.n}</span>
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition">→</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl mt-8">{s.t}</h3>
                <p className="mt-4 text-ink-soft max-w-md">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <Ticker items={["iOS", "Android", "React Native", "Flutter", "AI on device", "Realtime", "Design systems", "0 → 1"]} />


      {/* WORK */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Selected engagements
            </p>
            <h2 className="font-display text-4xl md:text-5xl mt-3 text-balance">
              Mobile platforms operating at scale across industries.
            </h2>
          </div>
          {mockups.map((m, i) => (
            <MockupCard key={m.id} mockup={m} index={i} />
          ))}
          <div className="pt-10 text-center">
            <Link to="/portfolio" className="inline-flex items-center rounded-full border border-ink/20 px-6 py-3 hover:border-ink transition">
              View the full portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fade-section-dark">
        <div className="mx-auto max-w-5xl px-6 py-28 md:py-36 text-center">
          <h2 className="font-display text-4xl md:text-6xl text-balance">
            Planning a strategic mobile initiative?
          </h2>
          <p className="mt-6 text-paper/70 text-lg max-w-xl mx-auto">
            Share your objectives with our team. We respond within one business day
            with a senior point of view and a clear path forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex mt-10 items-center rounded-full bg-paper text-ink px-7 py-4 font-medium hover:bg-paper/90 transition"
          >
            Start a conversation →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
