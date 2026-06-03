import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "How we work — ADNC Group" },
      {
        name: "description",
        content:
          "Two paths into the studio: founders building from an idea, and established companies shipping something serious. Clarity from day one, signed scope, real work on schedule.",
      },
      { property: "og:title", content: "How we work — ADNC Group" },
      {
        property: "og:description",
        content: "Two engagement tracks. One studio. One standard.",
      },
    ],
  }),
  component: WorkPage,
});

const trackAPhases = [
  {
    n: "01",
    t: "Idea submission",
    d: "You bring the idea. No NDA theatre, no pitch deck requirement. A working session, a whiteboard, and an honest conversation about what you want to build and why it matters.",
  },
  {
    n: "02",
    t: "Feasibility study",
    meta: "One month · MAD 21,500 (excl. VAT)",
    d: "We commit one full month to a structured feasibility study. Market sizing, technical scoping, regulatory and compliance review, cost modeling, competitive landscape, and risk assessment. At the end of the month, you receive a written report and a clear recommendation: green light, amber with conditions, or red. The entry fee covers the senior engineering and strategy time required, and is non-refundable.",
  },
  {
    n: "03",
    t: "Terms and scope",
    d: "If the project is greenlit on both sides, we negotiate the engagement: scope, fee or equity structure, milestones, IP terms, and exit clauses. Nothing moves into build until the contract is signed.",
  },
  {
    n: "04",
    t: "Roadmap and prototyping",
    meta: "One month",
    d: "We take one additional month to deliver the technical roadmap, a working prototype, and the dedicated team. Targeted hiring, if the role profile requires it, happens here against specifications defined jointly.",
  },
  {
    n: "05",
    t: "Production",
    d: "The product enters active development. From this point forward, you work alongside the team allocated to your project, with full operational support from the studio.",
  },
];

const founderGets = [
  {
    t: "Workspace",
    d: "A private office inside ADNC Group, plus full 24/7 access to our three locations in Casablanca.",
  },
  {
    t: "Dedicated resources",
    d: "A defined allocation of human and technical resources ringfenced for your project: engineers, designers, support staff, and infrastructure. The allocation is contractual, not best-effort.",
  },
  {
    t: "Daily access to the team",
    d: "Two fixed meeting windows every working day, 08:00 to 09:00 and 17:00 to 18:00. You can request a session with any team member assigned to your project: lead engineer, designer, support manager, growth lead. Availability is guaranteed inside these windows.",
  },
  {
    t: "Strategic authority",
    d: "You retain full authority to propose new directions and set the product vision. ADNC Group operates as the execution partner, not the decision-maker.",
  },
  {
    t: "Scope evolution",
    d: "The base engagement covers the scope defined at signature. Any new feature, redirection, or marketing-driven addition that materially extends the timeline or workload is costed and quoted separately, with a transparent change order before any work begins.",
  },
];

const trackBPoints = [
  {
    t: "Engagement model",
    d: "We integrate directly with your existing stakeholders. No private offices, no founder-style onboarding. The studio plugs into your organization and executes against a defined brief, with senior project leadership on our side and a clear single point of contact on yours.",
  },
  {
    t: "Meeting cadence",
    d: "Working sessions are conducted in person, either at your offices or at ours, within two fixed daily windows: 08:00 to 09:00 and 17:00 to 18:00. This rhythm enforces fast decisions and eliminates the meeting drift that delays most enterprise projects.",
  },
  {
    t: "Process",
    d: "Feasibility, roadmap, production, and operations follow the same standards as Track A, adapted to your governance, procurement, and compliance requirements. Pricing, timelines, and team composition are negotiated against your specific brief.",
  },
];

function WorkPage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="fade-section">
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-24 md:py-36">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">How we work</p>
          <h1
            className="font-display font-medium tracking-[-0.045em] leading-[0.85] mt-6 text-balance"
            style={{ fontSize: "clamp(3rem, 10vw, 12rem)" }}
          >
            Two paths <br />
            <span className="italic font-light">into the studio.</span>
          </h1>
          <p className="mt-12 text-lg md:text-xl text-ink-soft max-w-3xl leading-relaxed">
            ADNC Group works with two distinct kinds of partners: independent
            founders building from an idea, and established companies looking to
            ship or operate something serious. The engagement model is different
            for each, by design. Both are built around the same principle:
            clarity from day one, signed scope, and real work delivered on
            schedule.
          </p>
        </div>
      </section>

      {/* TRACK A */}
      <section className="bg-paper-soft border-t border-border">
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-24 md:py-36">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Track A</p>
              <h2 className="font-display text-5xl md:text-6xl mt-4 text-balance">
                Founders &amp; independent operators.
              </h2>
            </div>
            <div className="md:col-span-8 md:pt-10">
              <p className="text-lg text-ink-soft max-w-2xl">
                For individuals bringing an idea to the studio.
              </p>
            </div>
          </div>

          <div className="space-y-0">
            {trackAPhases.map((p, i) => (
              <div
                key={p.n}
                data-reveal
                style={{ ["--reveal-delay" as never]: `${i * 70}ms` }}
                className="grid md:grid-cols-12 gap-6 py-10 border-t border-ink/15 last:border-b group hover:bg-paper transition-colors"
              >
                <div className="md:col-span-2 font-display text-2xl text-muted-foreground">
                  Phase {p.n}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-3xl md:text-4xl">{p.t}</h3>
                  {p.meta && (
                    <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      {p.meta}
                    </p>
                  )}
                </div>
                <div className="md:col-span-6">
                  <p className="text-ink-soft text-lg max-w-xl">{p.d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What the founder gets */}
          <div className="mt-24 md:mt-32">
            <p className="uppercase tracking-[0.25em] text-muted-foreground font-serif font-bold text-sm">
              What the founder gets
            </p>
            <h3 className="font-display text-4xl md:text-5xl mt-4 max-w-3xl text-balance">
              A real seat inside the studio.
            </h3>

            <div className="mt-12 grid md:grid-cols-2 gap-px bg-border">
              {founderGets.map((f, i) => (
                <div
                  key={f.t}
                  data-reveal
                  style={{ ["--reveal-delay" as never]: `${i * 60}ms` }}
                  className="bg-paper-soft p-8 md:p-10"
                >
                  <h4 className="font-display text-2xl md:text-3xl">{f.t}</h4>
                  <p className="mt-4 text-ink-soft text-lg">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRACK B */}
      <section className="bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-24 md:py-36 relative">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.3em] text-paper/50">Track B</p>
              <h2 className="font-display text-5xl md:text-6xl mt-4 text-balance">
                Established <span className="italic font-light text-outline-paper">companies.</span>
              </h2>
            </div>
            <div className="md:col-span-8 md:pt-10">
              <p className="text-lg text-paper/70 max-w-2xl">
                For organizations with an existing structure, internal teams,
                and a formal decision-making process.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-paper/10">
            {trackBPoints.map((p, i) => (
              <div
                key={p.t}
                data-reveal
                style={{ ["--reveal-delay" as never]: `${i * 80}ms` }}
                className="bg-ink p-10 md:p-12"
              >
                <h3 className="font-display text-3xl md:text-4xl">{p.t}</h3>
                <p className="mt-6 text-paper/70 text-lg">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING + CTA */}
      <section className="bg-paper relative">
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-28 md:py-40 text-center">
          <p className="uppercase tracking-[0.25em] text-muted-foreground font-serif font-bold text-sm">
            One studio
          </p>
          <h2
            className="font-display font-medium mt-6 leading-[0.85] tracking-[-0.045em] text-balance"
            style={{ fontSize: "clamp(2.5rem, 9vw, 10rem)" }}
          >
            One studio, <br />
            <span className="italic font-light">one standard.</span>
          </h2>
          <p className="mt-10 text-lg md:text-xl text-ink-soft max-w-2xl mx-auto">
            Whichever track applies to you, the underlying engineering,
            operations, and quality standards do not change. The framework
            adapts. The work does not.
          </p>
          <div className="mt-14 flex justify-center">
            <Link
              to="/contact"
              className="mag inline-flex items-center rounded-full bg-ink text-paper px-8 py-5 text-lg font-medium hover:bg-ink-soft transition"
            >
              Start a project →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
