import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { MockupCard } from "@/components/site/MockupCard";
import { Sticker } from "@/components/site/Sticker";
import { Ticker } from "@/components/site/Ticker";
import { heroMockup, mockups } from "@/data/mockups";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADNC Group — Complex mobile applications, engineered" },
      {
        name: "description",
        content:
          "ADNC Group is a development studio building complex, high-performance mobile applications for ambitious companies.",
      },
      { property: "og:title", content: "ADNC Group — Complex mobile apps" },
      { property: "og:description", content: "Studio engineering complex mobile applications." },
    ],
  }),
  component: Home,
});

const logos = [
  "AURUM", "NORTH/CO", "TABLÉE", "MAISON NOIR", "PULSE", "HELIX",
  "ATLAS", "MERIDIAN", "FORM&CO", "BLACKBIRD",
];

const stats = [
  { k: "60+", v: "Apps shipped" },
  { k: "12y", v: "In mobile engineering" },
  { k: "4.9/5", v: "Average client rating" },
  { k: "24", v: "Senior engineers & designers" },
];

const services = [
  {
    n: "01",
    t: "Mobile product engineering",
    d: "Native iOS, Android and cross-platform apps built for scale, speed and longevity.",
  },
  {
    n: "02",
    t: "Product design & UX",
    d: "Interaction-led design systems and prototypes that ship the same week they're sketched.",
  },
  {
    n: "03",
    t: "AI on device",
    d: "On-device inference, RAG pipelines and AI features that respect privacy and battery.",
  },
  {
    n: "04",
    t: "Backend & realtime",
    d: "Realtime, offline-first backends. Edge functions, sync engines, observability included.",
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
                Mobile · AI · Product engineering
              </p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-semibold text-balance">
                Turning complex ideas into{" "}
                <span className="italic font-light text-kinetic">flawless</span> mobile
                applications.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-xl">
                ADNC Group is a senior product studio engineering ambitious mobile
                products for startups and enterprises around the world.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="mag inline-flex items-center rounded-full bg-ink text-paper px-6 py-3.5 font-medium hover:bg-ink-soft transition"
                >
                  Talk to our team →
                </Link>
                <Link
                  to="/portfolio"
                  className="mag inline-flex items-center rounded-full border border-ink/20 px-6 py-3.5 font-medium hover:border-ink transition"
                >
                  See our work
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
                Why ADNC
              </p>
              <h2 className="font-display text-4xl md:text-5xl mt-4 text-balance">
                Trusted by founders and Fortune-class teams alike.
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
                What we do
              </p>
              <h2 className="font-display text-4xl md:text-5xl mt-3 max-w-2xl text-balance">
                A full-stack mobile studio — from first sketch to App Store.
              </h2>
            </div>
            <Link to="/services" className="text-sm underline underline-offset-4">
              All services →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {services.map((s) => (
              <div
                key={s.n}
                className="bg-paper p-8 md:p-10 transition hover:bg-paper-soft group"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm text-muted-foreground">{s.n}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition">→</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl mt-8">{s.t}</h3>
                <p className="mt-4 text-ink-soft max-w-md">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Selected work
            </p>
            <h2 className="font-display text-4xl md:text-5xl mt-3 text-balance">
              Mobile products that millions actually use.
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
            Have a mobile product worth getting right?
          </h2>
          <p className="mt-6 text-paper/70 text-lg max-w-xl mx-auto">
            Tell us about it. We reply within one business day with a senior team and a
            point of view.
          </p>
          <Link
            to="/contact"
            className="inline-flex mt-10 items-center rounded-full bg-paper text-ink px-7 py-4 font-medium hover:bg-paper/90 transition"
          >
            Start a project →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
