import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { TiltCard } from "@/components/site/TiltCard";
import { CorporateRow } from "@/components/site/CorporateRow";
import { seoHead } from "@/lib/seo";
import { useMode } from "@/lib/mode-context";
import { Layers, BadgeCheck, Building2, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () =>
    seoHead("/about", [
      { title: "About | ADNC Group" },
      { name: "description", content: "ADNC Group is a senior mobile product studio. Meet the team and our principles." },
      { property: "og:title", content: "About — ADNC Group" },
      { property: "og:description", content: "Senior mobile product studio." },
    ]),
  component: AboutPage,
});

const principles = [
  { t: "Build & operate", d: "We don't just ship code — we run the platforms we build, with our own DevOps, support and growth teams.", Icon: Layers },
  { t: "Senior by default", d: "Every engagement staffed with senior engineers, operators and account leads. No bait-and-switch.", Icon: BadgeCheck },
  { t: "Internalized, not outsourced", d: "Our customer support and call center are in-house — directly wired into the product team.", Icon: Building2 },
  { t: "Own the outcome", d: "We measure ourselves on uptime, NPS, retention and B2B pipeline — not just shipped features.", Icon: Target },
];

function AboutPage() {
  const { mode } = useMode();
  const isDark = mode === "consulting";

  return (
    <Layout>
      <section className="fade-section">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-28 grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-7">
            <h1 className="font-display text-4xl md:text-7xl text-balance break-words">
              Two sides of the same business: we build apps, and we run them.
            </h1>
          </div>
          <div className="md:col-span-5 md:pt-16">
            <p className="text-base md:text-lg text-ink-soft">
              ADNC Group was founded to be the partner we always wanted: one team that
              designs and engineers complex web & mobile applications, and that
              operates them in production — DevOps, scaling, an internalized customer
              support and call center, and a B2B growth arm to bring in clients.
            </p>
          </div>
        </div>
      </section>


      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl mb-10 md:mb-12">Principles</h2>
          {!isDark ? (
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((p, i) => (
                <TiltCard key={p.t} index={i} className="bg-paper border border-border rounded-2xl p-6 md:p-10">
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
          <h2 className="font-display text-3xl md:text-5xl text-balance">
            Want to know if we're the right partner?
          </h2>
          <Link to="/contact" className="inline-flex mt-8 md:mt-10 items-center rounded-full bg-paper text-ink px-6 py-3 font-medium">
            Get in touch →
          </Link>
        </div>
      </section>

    </Layout>
  );
}
