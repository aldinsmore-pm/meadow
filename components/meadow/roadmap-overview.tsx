const roadmapMoments = [
  {
    title: "Before the call",
    description:
      "You share the workflows, systems, and team context you want us to evaluate. We review everything so the conversation stays focused on high-impact opportunities.",
    note: "Preparation • 1 business day",
  },
  {
    title: "During the discovery session",
    description:
      "We map your current processes, quantify time costs, and assess technical readiness. Together we determine if systematic automation can deliver the ROI you're targeting.",
    note: "Working session • 90 minutes",
  },
  {
    title: "After the session",
    description:
      "If there's clear alignment, we deliver a partnership proposal outlining scope, timeline, investment, and expected outcomes. If not, we'll tell you why and point you elsewhere.",
    note: "Next steps • Within 2 business days",
  },
];

const roadmapDeliverables = [
  {
    label: "Fit assessment",
    detail: "Clarity on whether our partnership model and automation approach align with your goals, workflows, and technical environment.",
  },
  {
    label: "ROI snapshot",
    detail: "Preliminary projections for time saved, cost to implement, and breakeven timelines—grounded in your actual numbers.",
  },
  {
    label: "Engagement outline",
    detail: "If we're aligned, you'll receive a 3-12 month roadmap detailing phases, responsibilities, and investment structure.",
  },
];

export default function MeadowRoadmapOverview() {
  return (
    <section id="roadmap" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center rounded-md border border-[rgba(var(--meadow-trust-blue)/0.3)] bg-[rgba(var(--meadow-warm)/0.8)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-trust-blue))]">
            Discovery Process
          </span>
          <h2 className="heading-serif mt-6 text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
            How we evaluate partnership fit in 90 minutes
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.7)]">
            This isn't a sales call or a free audit. It's a working session to determine if systematic automation will deliver meaningful ROI for your business—and whether our approach aligns with how you operate.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ol className="space-y-5">
            {roadmapMoments.map((moment) => (
              <li
                key={moment.title}
                className="group relative overflow-hidden rounded-3xl border-2 border-[rgba(var(--meadow-primary)/0.12)] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[rgba(var(--meadow-primary)/0.28)]"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-[rgba(var(--meadow-accent)/0.2)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex flex-col gap-2 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-primary))]">{moment.note}</p>
                  <h3 className="heading-serif text-lg font-semibold text-[rgb(var(--meadow-ink))]">{moment.title}</h3>
                  <p className="text-sm text-[rgb(var(--meadow-ink)/0.75)]">{moment.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border-2 border-[rgba(var(--meadow-primary)/0.15)] bg-[rgba(var(--meadow-warm)/0.8)] p-7 shadow-sm">
              <h3 className="heading-serif text-lg font-semibold text-[rgb(var(--meadow-ink))]">What you'll take home</h3>
              <ul className="mt-4 space-y-4 text-sm text-[rgb(var(--meadow-ink)/0.75)]">
                {roadmapDeliverables.map((item) => (
                  <li key={item.label} className="rounded-2xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-4 shadow-sm">
                    <p className="font-semibold text-[rgb(var(--meadow-ink))]">{item.label}</p>
                    <p className="mt-1 text-xs text-[rgb(var(--meadow-ink)/0.65)]">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/75 p-7 text-sm text-[rgb(var(--meadow-ink)/0.8)] shadow-sm">
              <p className="text-base font-semibold text-[rgb(var(--meadow-ink))]">Want to get more from your session?</p>
              <p className="mt-2">
                Send us any notes or spreadsheets about your processes ahead of time. We'll review them before the call so we can dive right into solutions.
              </p>
              <a
                href="mailto:hello@meadow.ai"
                className="mt-4 inline-flex w-fit items-center justify-center rounded-full bg-[rgb(var(--meadow-primary))] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[rgb(var(--meadow-primary))]/90"
              >
                Send materials
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
