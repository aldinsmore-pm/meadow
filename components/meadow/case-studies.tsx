const caseStudies = [
  {
    company: "BrightLedger Accounting",
    sector: "Finance operations",
    headline: "AP automation cleared a 3-week backlog",
    summary:
      "Scoped vendor intake, invoice coding, and reconciliation automations with finance + compliance sign-off in one sprint.",
    metrics: [
      { label: "Hours returned", value: "320/quarter" },
      { label: "Accuracy lift", value: "97% → 99.6%" },
      { label: "Payback", value: "2.7 months" },
    ],
  },
  {
    company: "Atlas Clinics",
    sector: "Multi-site healthcare",
    headline: "Prior auth workflow now resolves in hours",
    summary:
      "Combined LLM triage with EHR integrations and RN review loops so clinical staff can focus on patient escalations.",
    metrics: [
      { label: "Cycle time", value: "48h → 6h" },
      { label: "Adoption", value: "82% of staff" },
      { label: "Pilot duration", value: "28 days" },
    ],
  },
  {
    company: "Fieldstone Logistics",
    sector: "Freight coordination",
    headline: "Dispatch moved from spreadsheets to governed agents",
    summary:
      "Designed a chat-forward command center that syncs TMS updates, vendor ETAs, and exception handling playbooks.",
    metrics: [
      { label: "Manual updates", value: "-68%" },
      { label: "On-time loads", value: "+12 pts" },
      { label: "Leadership NPS", value: "+28" },
    ],
  },
];

export default function MeadowCaseStudies() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--meadow-primary)/0.2)] bg-[rgba(var(--meadow-muted)/0.8)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-primary))]">
            Proof in live operations
          </span>
          <h2 className="mt-6 text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
            Operators rely on Meadow when automations must ship
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.75)]">
            Every Game Plan comes with hands-on help to ship the first win. Each story below started with the free AI Game Plan (Roadmap) session and was live inside the first 90 days.
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
                    Started with free AI Game Plan
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
