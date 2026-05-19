import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { MockupCard } from "@/components/site/MockupCard";
import { mockups } from "@/data/mockups";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Work — ADNC Group" },
      { name: "description", content: "Selected mobile applications engineered by ADNC Group." },
      { property: "og:title", content: "Work — ADNC Group" },
      { property: "og:description", content: "Selected mobile work." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <Layout>
      <section className="fade-section">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Selected work</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4 max-w-4xl text-balance">
            Mobile products engineered with care, shipped with conviction.
          </h1>
        </div>
      </section>

      <section className="bg-paper-soft">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          {mockups.map((m, i) => (
            <MockupCard key={m.id} mockup={m} index={i} />
          ))}
        </div>
      </section>

      <section className="fade-section-dark">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-balance">Your project, next on this page.</h2>
          <Link to="/contact" className="inline-flex mt-10 items-center rounded-full bg-paper text-ink px-6 py-3 font-medium">
            Start a project →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
