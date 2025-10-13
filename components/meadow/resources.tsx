import Link from "next/link";

const resources = [
  {
    title: "Automation ROI Calculator",
    description: "Model cost savings, implementation effort, and payback for your top workflows in minutes.",
    badge: "Spreadsheet + prompts",
  },
  {
    title: "Ops Leader Newsletter",
    description: "Monthly breakdown of AI deployments across finance, logistics, and healthcare ops teams.",
    badge: "Join 2,100 operators",
  },
  {
    title: "AI Change Management Checklist",
    description: "Make adoption stick with training cadences, QA rituals, and feedback loops.",
    badge: "PDF playbook",
  },
];

export default function MeadowResources() {
  return (
    <section id="resources" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
              Keep your team ahead with Meadow resources
            </h2>
            <p className="text-base text-[rgb(var(--meadow-ink)/0.75)]">
              Access calculators, templates, and operator-only briefings to evaluate new automations with confidence.
            </p>
            <Link
              href="mailto:hello@meadow.ai"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--meadow-primary)/0.3)] px-6 py-3 text-sm font-semibold text-[rgb(var(--meadow-primary))] transition hover:bg-[rgba(var(--meadow-muted)/0.8)]"
            >
              Request the full resource bundle
            </Link>
          </div>
          <div className="grid gap-4">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="flex flex-col gap-3 rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-6 shadow-sm backdrop-blur"
              >
                <span className="inline-flex w-fit items-center rounded-full border border-[rgba(var(--meadow-accent)/0.3)] bg-[rgba(var(--meadow-accent)/0.2)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-primary))]">
                  {resource.badge}
                </span>
                <h3 className="text-lg font-semibold text-[rgb(var(--meadow-ink))]">{resource.title}</h3>
                <p className="text-sm text-[rgb(var(--meadow-ink)/0.75)]">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
