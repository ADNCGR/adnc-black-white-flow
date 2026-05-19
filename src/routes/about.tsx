import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ADNC Group" },
      { name: "description", content: "ADNC Group is a senior mobile product studio. Meet the team and our principles." },
      { property: "og:title", content: "About — ADNC Group" },
      { property: "og:description", content: "Senior mobile product studio." },
    ],
  }),
  component: AboutPage,
});

const principles = [
  { t: "Senior by default", d: "Every project staffed with senior engineers and designers. No bait-and-switch." },
  { t: "Craft is the strategy", d: "We obsess over the small details users feel but cannot articulate." },
  { t: "Ship to learn", d: "Weekly releases, real users, real signal — from the first sprint." },
  { t: "Own the outcome", d: "We measure ourselves on what the app does in users' hands, not what shipped." },
];

function AboutPage() {
  return (
    <Layout>
      <section className="fade-section">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About</p>
            <h1 className="font-display text-5xl md:text-7xl mt-4 text-balance">
              A studio of senior makers, obsessed with mobile.
            </h1>
          </div>
          <div className="md:col-span-5 md:pt-16">
            <p className="text-lg text-ink-soft">
              ADNC Group was founded to build the kind of mobile applications we always
              wanted to use — fast, considered, beautifully restrained. We work as one
              embedded team with our clients, from first prototype to App Store.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="font-display text-3xl md:text-4xl mb-12">Principles</h2>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {principles.map((p, i) => (
              <div key={p.t} className="bg-paper p-10">
                <div className="text-muted-foreground text-sm">0{i + 1}</div>
                <h3 className="font-display text-2xl mt-6">{p.t}</h3>
                <p className="mt-3 text-ink-soft max-w-md">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fade-section-dark">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Want to know if we're the right partner?
          </h2>
          <Link to="/contact" className="inline-flex mt-10 items-center rounded-full bg-paper text-ink px-6 py-3 font-medium">
            Get in touch →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
