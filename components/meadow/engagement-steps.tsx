const steps = [
  {
    title: "Tell us what's killing you (90 minutes)",
    description:
      "You walk us through a typical week—the late nights, the tasks you hate, the stuff you can't delegate. We identify the top 3 time-vampires bleeding your schedule dry.",
    deliverable: "Know exactly what to attack first",
  },
  {
    title: "Get your escape plan (48 hours later)",
    description:
      "We deliver a one-page plan showing exactly how many hours you'll reclaim, what it costs, and when you'll break even. No corporate jargon—just clear numbers you can act on today.",
    deliverable: "Your roadmap to freedom",
  },
  {
    title: "Watch it work (starts week 2)",
    description:
      "We build it with your team watching, train them in plain English, and don't leave until it's running. You'll see hours coming back to your schedule within 18 days.",
    deliverable: "Time back in your calendar, permanently",
  },
];

export default function MeadowEngagementSteps() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
              From first call to getting your life back: under 3 weeks
            </h2>
            <p className="text-base text-[rgb(var(--meadow-ink)/0.75)]">
              No six-month projects or endless consultants. We move fast because we know you're already stretched too thin. Here's exactly what happens.
            </p>
            <div className="rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[rgb(var(--meadow-ink))]">Why this actually works</h3>
              <ul className="mt-4 space-y-3 text-sm text-[rgb(var(--meadow-ink)/0.75)]">
                <li>• No tech background needed—if you can use email, you can do this</li>
                <li>• Your team won't revolt because we make them heroes, not victims</li>
                <li>• You own it—we train someone on your team so you're never stuck</li>
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
