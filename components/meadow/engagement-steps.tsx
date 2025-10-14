const steps = [
  {
    title: "We talk through your day",
    description:
      "We sit down with you and ask about the tasks eating up your time. Together we find the quick wins that will make the biggest difference.",
    deliverable: "Clear picture of where your time is going",
  },
  {
    title: "You get your Time-Back Plan",
    description:
      "We show you exactly what you'll save, what it will cost, and which task to fix first. No confusing tech talk—just a simple plan you can understand.",
    deliverable: "One-page roadmap with real numbers",
  },
  {
    title: "We help you set it up",
    description:
      "We work alongside your team to get things running, train your people, and make sure it actually works. Most businesses are saving time within a month.",
    deliverable: "Working solution with your team trained up",
  },
];

export default function MeadowEngagementSteps() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
              A straightforward process that respects your time
            </h2>
            <p className="text-base text-[rgb(var(--meadow-ink)/0.75)]">
              No endless meetings or complicated tech talk. We help you identify what's stealing your time and get it fixed—fast.
            </p>
            <div className="rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[rgb(var(--meadow-ink))]">What you can expect</h3>
              <ul className="mt-4 space-y-3 text-sm text-[rgb(var(--meadow-ink)/0.75)]">
                <li>• A real person who understands small business, not just tech</li>
                <li>• Simple checklists and step-by-step guides you can actually follow</li>
                <li>• Help training someone on your team so you're not dependent on us</li>
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
