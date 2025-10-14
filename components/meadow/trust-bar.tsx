const companies = [
  { name: "BrightLedger", location: "Austin, TX", industry: "Accounting firm" },
  { name: "Atlas Clinics", location: "Denver, CO", industry: "Multi-site healthcare" },
  { name: "Fieldstone Logistics", location: "Memphis, TN", industry: "Freight coordination" },
  { name: "Northlight Finance", location: "Chicago, IL", industry: "Financial services" },
  { name: "KindredOps", location: "Seattle, WA", industry: "Operations consultancy" },
  { name: "Nimble Freight", location: "Dallas, TX", industry: "Third-party logistics" },
];

export default function MeadowTrustBar() {
  return (
    <section className="border-y border-[rgba(var(--meadow-primary)/0.12)] bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-trust-blue))]">
            Trusted across the US &amp; Canada
          </p>
          <h2 className="heading-serif mt-3 text-2xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-3xl">
            47 small business owners rely on Meadow to get their evenings back
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[rgb(var(--meadow-ink)/0.65)]">
            From freight dispatch to medical paperwork, owners bring us the work that keeps them late at the office. Here are a few of the shops we support every week.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex flex-col gap-2 rounded-2xl border-2 border-[rgba(var(--meadow-primary)/0.12)] bg-[rgba(var(--meadow-warm)/0.6)] p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[rgba(var(--meadow-primary)/0.25)] bg-white font-serif text-lg font-semibold text-[rgb(var(--meadow-primary))]">
                  {company.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="text-left">
                  <p className="text-base font-semibold text-[rgb(var(--meadow-ink))]">{company.name}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-[rgb(var(--meadow-ink)/0.5)]">{company.location}</p>
                </div>
              </div>
              <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">{company.industry}</p>
              <div className="flex items-center gap-2 text-xs text-[rgb(var(--meadow-primary))]">
                <span>⭐️⭐️⭐️⭐️⭐️</span>
                <span className="font-semibold">Verified partner</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-5 text-center text-xs text-[rgb(var(--meadow-ink)/0.6)]">
          <p>
            38 of these owners booked their free Time-Back Plan on a Tuesday or Wednesday evening after the kids went to bed. We work on your schedule.
          </p>
        </div>
      </div>
    </section>
  );
}
