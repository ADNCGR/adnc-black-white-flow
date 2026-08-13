import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { TiltCard } from "@/components/site/TiltCard";
import { CorporateRow } from "@/components/site/CorporateRow";
import { seoHead } from "@/lib/seo";
import { useMode } from "@/lib/mode-context";
import { Users, CalendarClock, Compass, GitBranch, Handshake, Workflow } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () =>
    seoHead("/portfolio", [
      { title: "How we work | ADNC Group" },
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
    ]),
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
    t: "Dedicated resources",
    d: "A defined allocation of human and technical resources ringfenced for your project: engineers, designers, support staff, and infrastructure. The allocation is contractual, not best-effort.",
    Icon: Users,
  },
  {
    t: "Daily access to the team",
    d: "Two fixed meeting windows every working day, 08:00 to 09:00 and 17:00 to 18:00. You can request a session with any team member assigned to your project: lead engineer, designer, support manager, growth lead. Availability is guaranteed inside these windows.",
    Icon: CalendarClock,
  },
  {
    t: "Strategic authority",
    d: "You retain full authority to propose new directions and set the product vision. ADNC Group operates as the execution partner, not the decision-maker.",
    Icon: Compass,
  },
  {
    t: "Scope evolution",
    d: "The base engagement covers the scope defined at signature. Any new feature, redirection, or marketing-driven addition that materially extends the timeline or workload is costed and quoted separately, with a transparent change order before any work begins.",
    Icon: GitBranch,
  },
];

const trackBPoints = [
  {
    t: "Engagement model",
    d: "We integrate directly with your existing stakeholders. No private offices, no founder-style onboarding. The studio plugs into your organization and executes against a defined brief, with senior project leadership on our side and a clear single point of contact on yours.",
    Icon: Handshake,
  },
  {
    t: "Meeting cadence",
    d: "Working sessions are conducted in person, either at your offices or at ours, within two fixed daily windows: 08:00 to 09:00 and 17:00 to 18:00. This rhythm enforces fast decisions and eliminates the meeting drift that delays most enterprise projects.",
    Icon: CalendarClock,
  },
  {
    t: "Process",
    d: "Feasibility, roadmap, production, and operations follow the same standards as Track A, adapted to your governance, procurement, and compliance requirements. Pricing, timelines, and team composition are negotiated against your specific brief.",
    Icon: Workflow,
  },
];

function WorkPage() {
  const { mode } = useMode();
  const isDark = mode === "consulting";

  return (
    <Layout>
      {/* HERO */}
      <section className="fade-section">
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-16 md:py-36">
          <h1
            className="font-display font-medium tracking-[-0.045em] leading-[0.9] md:leading-[0.85] text-balance break-words"
            style={{ fontSize: "clamp(2.5rem, 10vw, 12rem)" }}
          >
            Two paths <br />
            <span className="italic font-light">into the studio.</span>
          </h1>
          <p className="mt-8 md:mt-12 text-base md:text-xl text-ink-soft max-w-3xl leading-relaxed">
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
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-16 md:py-36">
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-16">
            <div className="md:col-span-4">
              <h2 className="font-display text-4xl md:text-6xl text-balance break-words">
                Founders &amp; independent operators.
              </h2>
            </div>
            <div className="md:col-span-8 md:pt-10">
              <p className="text-base md:text-lg text-ink-soft max-w-2xl">
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
                className="grid md:grid-cols-12 gap-3 md:gap-6 py-8 md:py-10 border-t border-ink/15 last:border-b group hover:bg-paper transition-colors"
              >
                <div className="md:col-span-2 font-display text-xl md:text-2xl text-muted-foreground">
                  Phase {p.n}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl md:text-4xl break-words">{p.t}</h3>
                  {p.meta && (
                    <p className="mt-3 text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      {p.meta}
                    </p>
                  )}
                </div>
                <div className="md:col-span-6">
                  <p className="text-ink-soft text-base md:text-lg max-w-xl line-clamp-5 md:line-clamp-none">{p.d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What the founder gets */}
          <div className="mt-16 md:mt-32">
            <h3 className="font-display text-3xl md:text-5xl max-w-3xl text-balance">
              A real seat inside the studio.
            </h3>

            {!isDark ? (
              <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-6">
                {founderGets.map((f, i) => (
                  <TiltCard key={f.t} index={i} className="bg-paper-soft border border-border rounded-2xl p-6 md:p-10">
                    <f.Icon className="w-6 h-6 text-ink/30" strokeWidth={1.5} />
                    <h4 className="font-sans font-semibold text-lg md:text-xl mt-4">{f.t}</h4>
                    <p className="mt-3 md:mt-4 text-ink-soft text-base md:text-lg line-clamp-5 md:line-clamp-none">{f.d}</p>
                  </TiltCard>
                ))}
              </div>
            ) : (
              <div className="mt-10 md:mt-12">
                {founderGets.map((f, i) => (
                  <CorporateRow key={f.t} n={String(i + 1).padStart(2, "0")} title={f.t} isDark={false} index={i}>
                    {f.d}
                  </CorporateRow>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TRACK B */}
      <section className="bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-16 md:py-36 relative">
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-16">
            <div className="md:col-span-4">
              <h2 className="font-display text-4xl md:text-6xl text-balance break-words">
                Established <span className="italic font-light text-outline-paper">companies.</span>
              </h2>
            </div>
            <div className="md:col-span-8 md:pt-10">
              <p className="text-base md:text-lg text-paper/70 max-w-2xl">
                For organizations with an existing structure, internal teams,
                and a formal decision-making process.
              </p>
            </div>
          </div>

          {!isDark ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trackBPoints.map((p, i) => (
                <TiltCard key={p.t} index={i} className="bg-[oklch(0.1_0_0)] border border-paper/10 rounded-2xl p-6 md:p-12">
                  <p.Icon className="w-6 h-6 text-paper/30" strokeWidth={1.5} />
                  <h3 className="font-sans font-semibold text-lg md:text-xl mt-4 break-words">{p.t}</h3>
                  <p className="mt-4 md:mt-6 text-paper/70 text-base md:text-lg line-clamp-5 md:line-clamp-none">{p.d}</p>
                </TiltCard>
              ))}
            </div>
          ) : (
            <div>
              {trackBPoints.map((p, i) => (
                <CorporateRow key={p.t} n={String(i + 1).padStart(2, "0")} title={p.t} isDark index={i}>
                  {p.d}
                </CorporateRow>
              ))}
            </div>
          )}
        </div>
      </section>


      {/* CLOSING + CTA */}
      <section className="bg-paper relative">
        <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-20 md:py-40 text-center">
          <h2
            className="font-display font-medium leading-[0.9] md:leading-[0.85] tracking-[-0.045em] text-balance break-words"
            style={{ fontSize: "clamp(2rem, 9vw, 10rem)" }}
          >
            One studio, <br />
            <span className="italic font-light">one standard.</span>
          </h2>
          <p className="mt-8 md:mt-10 text-base md:text-xl text-ink-soft max-w-2xl mx-auto">
            Whichever track applies to you, the underlying engineering,
            operations, and quality standards do not change. The framework
            adapts. The work does not.
          </p>
          <div className="mt-10 md:mt-14 flex justify-center">
            <Link
              to="/contact"
              className="mag inline-flex items-center rounded-full bg-ink text-paper px-7 py-4 md:px-8 md:py-5 text-base md:text-lg font-medium hover:bg-ink-soft transition"
            >
              Start a project →
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
