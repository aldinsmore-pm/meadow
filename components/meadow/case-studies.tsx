const caseStudies = [
  {
    company: "BrightLedger Accounting",
    sector: "Accounting Firm",
    headline: "Cleared a 3-week invoice backlog and got evenings back",
    summary:
      "The owner was drowning in vendor intake and invoice coding. We automated the busywork so the team could focus on client relationships instead.",
    metrics: [
      { label: "Time saved", value: "80 hrs/mo" },
      { label: "Fewer errors", value: "97% → 99.6%" },
      { label: "Money back", value: "Under 3 months" },
    ],
  },
  {
    company: "Atlas Clinics",
    sector: "Healthcare Practice",
    headline: "Cut prior auth turnaround from 2 days to 6 hours",
    summary:
      "Insurance paperwork was eating up clinical staff time. Now it's handled automatically with nurse review only when needed.",
    metrics: [
      { label: "Faster service", value: "48h → 6h" },
      { label: "Team using it", value: "82%" },
      { label: "Time to launch", value: "28 days" },
    ],
  },
  {
    company: "Fieldstone Logistics",
    sector: "Freight Company",
    headline: "Stopped living in spreadsheets for dispatch",
    summary:
      "The owner was manually tracking every shipment update. We built a simple system that does it automatically and flags only what needs attention.",
    metrics: [
      { label: "Less busywork", value: "68% fewer updates" },
      { label: "Better service", value: "+12% on-time" },
      { label: "Owner happiness", value: "Way up" },
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
            Business owners getting their time back
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.75)]">
            Each business started with a free Time-Back Plan to identify their biggest time drains. They were saving hours every week within the first 90 days.
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
