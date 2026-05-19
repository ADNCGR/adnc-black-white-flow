import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ADNC Group" },
      { name: "description", content: "Mobile engineering, product design, AI and backend services for complex mobile applications." },
      { property: "og:title", content: "Services — ADNC Group" },
      { property: "og:description", content: "Mobile engineering, design, AI and backend." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    n: "01",
    title: "Mobile Engineering",
    items: ["Native iOS (Swift, SwiftUI)", "Native Android (Kotlin, Compose)", "React Native & Flutter", "Performance & profiling", "Release engineering & CI/CD"],
  },
  {
    n: "02",
    title: "Product & Design",
    items: ["Product strategy & discovery", "UX research", "Interaction design", "Design systems", "Prototyping & motion"],
  },
  {
    n: "03",
    title: "AI & Data",
    items: ["On-device ML (CoreML, LiteRT)", "RAG & assistant features", "LLM evaluations", "Personalization", "Vector & semantic search"],
  },
  {
    n: "04",
    title: "Backend & Cloud",
    items: ["Realtime APIs", "Sync engines & offline-first", "Edge functions", "Observability", "Security & compliance"],
  },
];

function ServicesPage() {
  return (
    <Layout>
      <section className="fade-section">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Services</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4 max-w-4xl text-balance">
            End-to-end mobile product engineering, under one roof.
          </h1>
          <p className="mt-8 text-lg text-ink-soft max-w-2xl">
            We embed senior teams across product, design and engineering — shipping in
            weeks, not quarters, with full ownership from research to release.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {groups.map((g) => (
              <div key={g.n} className="bg-paper p-10">
                <div className="flex items-center justify-between text-muted-foreground text-sm">
                  <span>{g.n}</span><span>Service</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl mt-8">{g.title}</h2>
                <ul className="mt-8 space-y-3">
                  {g.items.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-ink-soft">
                      <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-ink" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fade-section-dark">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl">Engagement models built for ambition.</h2>
          <div className="mt-12 grid sm:grid-cols-3 gap-px bg-paper/15">
            {["Embedded team", "End-to-end product", "Staff augmentation"].map((t) => (
              <div key={t} className="bg-ink p-8">
                <h3 className="font-display text-xl">{t}</h3>
              </div>
            ))}
          </div>
          <Link to="/contact" className="inline-flex mt-12 items-center rounded-full bg-paper text-ink px-6 py-3 font-medium">
            Discuss your project →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
