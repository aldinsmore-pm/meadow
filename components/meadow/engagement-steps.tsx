const steps = [
  {
    title: "Workflow walk-through",
    description:
      "We sit down with you and your leads, map the tasks eating hours, and flag quick wins you can actually hand to software.",
    deliverable: "Plain-language summary of where time is leaking",
  },
  {
    title: "AI Game Plan",
    description:
      "We rank every idea by money saved, effort to build, and any red tape. You leave knowing what to tackle first and what it will cost.",
    deliverable: "One-page build order with savings and price tags",
  },
  {
    title: "Pilot launch",
    description:
      "We build the top pick beside your team, handle the tech hookups, and train staff. Most clients go live in about a month.",
    deliverable: "Live automation with training and guardrails",
  },
];

export default function MeadowEngagementSteps() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
              A simple process that keeps you in control
            </h2>
            <p className="text-base text-[rgb(var(--meadow-ink)/0.75)]">
              Skip the endless workshops. Meadow moves from scoping to a working automation in one tight engagement so owners see proof fast.
            </p>
            <div className="rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[rgb(var(--meadow-ink))]">What you can expect</h3>
              <ul className="mt-4 space-y-3 text-sm text-[rgb(var(--meadow-ink)/0.75)]">
                <li>• Dedicated Meadow partner who knows ops, not just AI jargon</li>
                <li>• Secure shared workspace with checklists, scripts, and recordings</li>
                <li>• Optional co-pilot support to train an internal champion</li>
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
