const roadmapMoments = [
  {
    title: "Before we meet",
    description:
      "Just send us a quick list of the tasks eating your time. We'll review it so our conversation stays focused on what matters most to you.",
    note: "Takes 1 business day",
  },
  {
    title: "During your Time-Back Plan session",
    description:
      "We walk through your day together, talk about what's taking too long, and figure out what will save you the most time for the least hassle.",
    note: "90-minute conversation",
  },
  {
    title: "Within 2 days after",
    description:
      "Get a simple plan that shows exactly what you'll save, what it will cost, and the steps to get started—no tech jargon, just a clear roadmap.",
    note: "PDF + slides you can share",
  },
];

const roadmapDeliverables = [
  {
    label: "Your top time-savers ranked",
    detail: "3–5 specific tasks you can fix, how many hours each will save, and what each costs to set up.",
  },
  {
    label: "A plan your team will understand",
    detail: "Simple talking points so you can explain the changes to your team and get everyone on board.",
  },
  {
    label: "Your 30-60-90 day roadmap",
    detail: "Clear next steps showing who does what and when, so you're not left wondering what comes next.",
  },
];

export default function MeadowRoadmapOverview() {
  return (
    <section id="roadmap" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--meadow-primary)/0.2)] bg-[rgba(var(--meadow-muted)/0.8)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-primary))]">
            What the free plan includes
          </span>
          <h2 className="mt-6 text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
            Walk away with a clear plan you can actually use
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.75)]">
            The free session helps you see exactly which tasks are worth fixing, what it will cost, and how to get started—so you can decide if it makes sense for your business.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ol className="space-y-5">
            {roadmapMoments.map((moment) => (
              <li
                key={moment.title}
                className="group relative overflow-hidden rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-7 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-[rgba(var(--meadow-primary)/0.28)]"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-[rgba(var(--meadow-accent)/0.2)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex flex-col gap-2 text-left">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-ink)/0.6)]">{moment.note}</p>
                  <h3 className="text-lg font-semibold text-[rgb(var(--meadow-ink))]">{moment.title}</h3>
                  <p className="text-sm text-[rgb(var(--meadow-ink)/0.75)]">{moment.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-[rgba(var(--meadow-primary)/0.15)] bg-[rgba(var(--meadow-muted)/0.8)] p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-[rgb(var(--meadow-ink))]">What you'll take home</h3>
              <ul className="mt-4 space-y-4 text-sm text-[rgb(var(--meadow-ink)/0.75)]">
                {roadmapDeliverables.map((item) => (
                  <li key={item.label} className="rounded-2xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-4 shadow-sm">
                    <p className="text-sm font-semibold text-[rgb(var(--meadow-ink))]">{item.label}</p>
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
