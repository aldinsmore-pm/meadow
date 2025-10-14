const roadmapMoments = [
  {
    title: "Before we meet",
    description:
      "Send a quick list of the jobs slowing you down. We look at volumes, software, and who’s involved so our call stays focused.",
    note: "Prep time: 1 business day",
  },
  {
    title: "During the AI Game Plan",
    description:
      "We walk through each idea, rate how much time or cash it saves, check what tools are needed, and note any guardrails.",
    note: "90-minute working session",
  },
  {
    title: "48 hours after",
    description:
      "Get a simple packet with savings numbers, risk notes, and a step-by-step pilot checklist tailored to your tools.",
    note: "Delivered as PDF + slides",
  },
];

const roadmapDeliverables = [
  {
    label: "Prioritized automations",
    detail: "3–5 plays with projected savings, what they cost to build, and what needs to be in place first.",
  },
  {
    label: "Stakeholder alignment kit",
    detail: "Talking points, risk list, and approval steps so finance, compliance, and ops can sign off fast.",
  },
  {
    label: "Pilot launch sequence",
    detail: "30-60-90 plan with owners, training cadence, and guardrails to keep adoption on track.",
  },
];

export default function MeadowRoadmapOverview() {
  return (
    <section id="roadmap" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--meadow-primary)/0.2)] bg-[rgba(var(--meadow-muted)/0.8)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-primary))]">
            What the free Game Plan includes
          </span>
          <h2 className="mt-6 text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
            Every session ends with a plan you can put to work this month
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.75)]">
            Use the free session to pressure-test automation ideas, make sure leadership is on board, and understand the cost before you greenlight a build.
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
              <h3 className="text-lg font-semibold text-[rgb(var(--meadow-ink))]">Leave with tangible assets</h3>
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
              <p className="text-base font-semibold text-[rgb(var(--meadow-ink))]">Want to tailor the session?</p>
              <p className="mt-2">
                Share your process docs or volume spreadsheets ahead of time and we&rsquo;ll preload them into the chat workspace so insights are ready during the call.
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
