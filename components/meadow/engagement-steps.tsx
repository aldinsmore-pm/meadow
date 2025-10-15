const steps = [
  {
    title: "Discovery & scoping (Month 1)",
    description:
      "We map your critical workflows, assess technical fit, and scope the automations that will deliver meaningful ROI. You meet the team you'll be working with and we define success together.",
    deliverable: "Partnership plan and prioritized backlog",
  },
  {
    title: "Build, integrate, and train (Months 2-4)",
    description:
      "We design and implement automations alongside your team, run controlled pilots, and train the people who will own the workflows. Expect iterative launches, not a big bang.",
    deliverable: "Live automations your team actually uses",
  },
  {
    title: "Optimize and expand (Months 5-6+)",
    description:
      "We monitor adoption, handle exceptions, and capture additional opportunities uncovered along the way. Partners often greenlight the next wave once the first proves out.",
    deliverable: "Measured ROI and roadmap for phase two",
  },
];

export default function MeadowEngagementSteps() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
              From discovery to measurable ROI: a 6–9 month journey
            </h2>
            <p className="text-base text-[rgb(var(--meadow-ink)/0.75)]">
              We work as an embedded partner for months, not weeks. Here's how we move from initial discovery to live automations with your team fully bought in.
            </p>
            <div className="rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[rgb(var(--meadow-ink))]">Why this actually works</h3>
              <ul className="mt-4 space-y-3 text-sm text-[rgb(var(--meadow-ink)/0.75)]">
                <li>• Embedded partnership—we work alongside your operators, not over them</li>
                <li>• Adoption-first—we design workflows your team actually wants to use</li>
                <li>• Sustainable handoff—we train your people so nothing depends on us long-term</li>
              </ul>
            </div>
          </div>
          <ol className="grid gap-6">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="group relative overflow-hidden rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/80 p-7 shadow-sm backdrop-blur"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-[rgba(var(--meadow-primary)/0.15)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-[rgba(var(--meadow-primary)/0.15)] text-base font-semibold text-[rgb(var(--meadow-primary))]">
                    {index + 1}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[rgb(var(--meadow-ink))]">{step.title}</h3>
                    <p className="text-sm text-[rgb(var(--meadow-ink)/0.75)]">{step.description}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-ink)/0.6)]">
                      Key deliverable: {step.deliverable}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
