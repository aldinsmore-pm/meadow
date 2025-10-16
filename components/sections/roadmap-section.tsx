import { Chip } from "../ui/chip";

const roadmapMoments = [
  {
    title: "Before we meet",
    note: "Prep • 1 business day",
    description:
      "You send context on workflows, systems, and team structure. We review everything so the session stays focused on high-yield opportunities.",
  },
  {
    title: "Discovery working session",
    note: "Live • 90 minutes",
    description:
      "We map your current processes, quantify time costs, and stress-test technical readiness together with your operators.",
  },
  {
    title: "After the call",
    note: "Next steps • 2 business days",
    description:
      "If there’s alignment, we return a partnership proposal with scope, timeline, investment, and measurable outcomes.",
  },
];

const roadmapDeliverables = [
  {
    label: "Fit assessment",
    detail: "Clarity on whether our partnership model and automation approach align with your goals and team readiness.",
  },
  {
    label: "ROI snapshot",
    detail: "Baseline hours saved, breakeven projection, and staffing plan grounded in your actual numbers.",
  },
  {
    label: "Engagement outline",
    detail: "A phase-by-phase roadmap covering implementation, training, and stabilization if we proceed together.",
  },
];

export function RoadmapSection() {
  return (
    <section className="space-y-8" data-reveal data-reveal-delay="80">
      <div>
        <h3 className="font-serif text-2xl text-ink md:text-3xl">What our 90-minute discovery covers</h3>
        <p className="mt-2 max-w-2xl text-sm text-slate-700">
          Not a sales pitch—a working session to confirm ROI, surface risks, and understand how we’ll work with your operators.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <ol className="space-y-4">
          {roadmapMoments.map((moment, index) => (
            <li
              key={moment.title}
              className="rounded-2xl border border-slate-300 bg-white/90 p-6 shadow-card backdrop-blur"
              data-reveal
              data-reveal-delay={140 + index * 80}
            >
              <Chip label={moment.note} stamped />
              <h4 className="mt-3 font-serif text-lg text-ink">{moment.title}</h4>
              <p className="mt-2 text-sm text-slate-700/90">{moment.description}</p>
            </li>
          ))}
        </ol>

        <div className="space-y-4" data-reveal data-reveal-delay="220" data-reveal-from="right">
          <div className="rounded-2xl border border-slate-300 bg-fog/80 p-6 shadow-card">
            <h4 className="font-serif text-lg text-ink">You’ll walk away with</h4>
              <ul className="mt-4 space-y-4 text-sm text-slate-700/90">
                {roadmapDeliverables.map((item, index) => (
                  <li
                    key={item.label}
                    className="rounded-xl border border-slate-300/70 bg-white/80 p-4 shadow-card backdrop-blur"
                    data-reveal
                    data-reveal-delay={260 + index * 80}
                  >
                  <p className="font-semibold text-ink">{item.label}</p>
                  <p className="mt-1 text-xs text-slate-700/80">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-300/80 bg-white/90 p-6 shadow-card" data-reveal data-reveal-delay="320">
            <h4 className="font-serif text-lg text-ink">Want us ready beforehand?</h4>
            <p className="mt-2 text-sm text-slate-700/90">
              Send us SOPs, Looms, or spreadsheets before we meet. We’ll digest them so we can dive straight into modeling automations.
            </p>
            <a
              href="mailto:hello@meadow.ai"
              className="mt-4 inline-flex w-fit items-center rounded-full bg-meadow-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-card transition hover:-translate-y-0.5 hover:bg-meadow-700"
            >
              Share context
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
