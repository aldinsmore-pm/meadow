const caseStudies = [
  {
    company: "BrightLedger Accounting",
    sector: "Accounting Firm",
    headline: "\"I was working until 9pm every night. Now I'm home for dinner.\"",
    summary:
      "Sasha was drowning in a 3-week invoice backlog, missing her kids' bedtimes. We automated vendor intake and invoice coding in 18 days. Now she leaves at 5pm and the work still gets done.",
    metrics: [
      { label: "Time reclaimed", value: "80 hrs/mo" },
      { label: "Left office by 5pm", value: "Every day" },
      { label: "Payback period", value: "2.5 months" },
    ],
  },
  {
    company: "Atlas Clinics",
    sector: "Healthcare Practice",
    headline: "\"Staff stopped complaining about the paperwork nightmare\"",
    summary:
      "Prior authorizations were taking 2 days—delaying patient care and burning out staff. Now it's 6 hours, nurses only review exceptions, and patient satisfaction scores jumped.",
    metrics: [
      { label: "Turnaround time", value: "48h → 6h" },
      { label: "Staff relief", value: "Immediate" },
      { label: "Launched in", value: "28 days" },
    ],
  },
  {
    company: "Fieldstone Logistics",
    sector: "Freight Company",
    headline: "\"Finally stopped living in my email at midnight\"",
    summary:
      "Laura was manually tracking 80+ shipments per week, constantly checking status updates at all hours. Now the system monitors everything and only alerts her when there's an actual problem.",
    metrics: [
      { label: "Manual updates", value: "Eliminated 68%" },
      { label: "Delivery performance", value: "+12%" },
      { label: "Sleep quality", value: "Restored" },
    ],
  },
];

export default function MeadowCaseStudies() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--meadow-primary)/0.2)] bg-[rgba(var(--meadow-muted)/0.8)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-primary))]">
            Real results
          </span>
          <h2 className="mt-6 text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
            From overwhelmed and exhausted to in control
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.75)]">
            These owners were working nights and weekends, missing family time, and constantly stressed. Now they're not. Here's what changed in less than 30 days.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.company}
              className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/75 p-7 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-[rgba(var(--meadow-primary)/0.28)]"
            >
              <header className="space-y-3">
                <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-ink)/0.6)]">
                  <span>{study.sector}</span>
                  <span className="rounded-full bg-[rgba(var(--meadow-primary)/0.15)] px-2 py-1 text-[rgb(var(--meadow-primary))]">
                    Started with free plan
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[rgb(var(--meadow-ink))]">{study.headline}</h3>
                <p className="text-sm text-[rgb(var(--meadow-ink)/0.75)]">{study.summary}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-ink)/0.55)]">
                  {study.company}
                </p>
              </header>
              <dl className="grid gap-3 text-sm text-[rgb(var(--meadow-ink)/0.75)] sm:grid-cols-3">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-4 text-center"
                  >
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-wide text-[rgb(var(--meadow-ink)/0.6)]">
                      {metric.label}
                    </dt>
                    <dd className="mt-2 text-xl font-semibold text-[rgb(var(--meadow-primary))]">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
