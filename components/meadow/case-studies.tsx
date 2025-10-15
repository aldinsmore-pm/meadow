const caseStudies = [
  {
    company: "BrightLedger Accounting",
    sector: "Accounting Firm",
    headline: "\"I was working until 9pm every night. Now I'm home for dinner.\"",
    engagement: "6-month partnership • $18K investment",
    summary:
      "We automated vendor intake and invoice coding, integrating directly with their existing systems. Now the team closes books on time without late nights, and Sasha only steps in for exceptions.",
    metrics: [
      { label: "Time reclaimed", value: "80 hrs/mo" },
      { label: "Invoice backlog", value: "Cleared in 3 weeks" },
      { label: "Payback period", value: "2.5 months" },
    ],
  },
  {
    company: "Atlas Clinics",
    sector: "Healthcare Practice",
    headline: "\"Staff stopped complaining about the paperwork burden\"",
    engagement: "9-month partnership • $34K investment",
    summary:
      "We streamlined prior authorizations, layered AI checks for exceptions, and trained nurses on the new process. The team now handles approvals in hours, not days, and morale is up.",
    metrics: [
      { label: "Turnaround time", value: "48h → 6h" },
      { label: "Staff workload", value: "-32% manual effort" },
      { label: "Go-live", value: "Phase 1 in 6 weeks" },
    ],
  },
  {
    company: "Fieldstone Logistics",
    sector: "Freight Company",
    headline: "\"Finally stopped living in my email at midnight\"",
    engagement: "12-month partnership • $28K investment",
    summary:
      "We built shipment monitoring automations that flag only real issues, trained dispatchers on escalation paths, and set up weekly optimizations. Laura no longer checks status updates after hours.",
    metrics: [
      { label: "Manual updates", value: "Eliminated 68%" },
      { label: "Delivery performance", value: "+12%" },
      { label: "Owner escalations", value: "Only critical" },
    ],
  },
];

export default function MeadowCaseStudies() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center justify-center rounded-md border border-[rgba(var(--meadow-trust-blue)/0.3)] bg-[rgba(var(--meadow-warm)/0.8)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-trust-blue))]">
            Partner outcomes
          </span>
          <h2 className="heading-serif mt-6 text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
            The kind of results selective owners hire us for
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.72)]">
            Each engagement is tailored, multi-month, and embedded. Here's what partnership looks like once we align on fit, scope, and investment.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.company}
              className="flex h-full flex-col justify-between gap-6 rounded-3xl border-2 border-[rgba(var(--meadow-primary)/0.12)] bg-white p-7 shadow-md transition hover:-translate-y-1 hover:border-[rgba(var(--meadow-primary)/0.28)]"
            >
              <header className="space-y-3">
                <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-ink)/0.6)]">
                  <span>{study.sector}</span>
                  <span className="rounded-full bg-[rgba(var(--meadow-primary)/0.15)] px-2 py-1 text-[rgb(var(--meadow-primary))]">
                    {study.engagement}
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
