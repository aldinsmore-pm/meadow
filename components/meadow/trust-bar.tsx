const companies = [
  "Nimble Freight",
  "Atlas Clinics",
  "BrightLedger",
  "KindredOps",
  "Fieldstone Logistics",
  "Northlight Finance",
];

export default function MeadowTrustBar() {
  return (
    <section className="border-y border-[rgba(var(--meadow-primary)/0.12)] bg-white/60 py-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 text-sm font-semibold tracking-wide text-[rgb(var(--meadow-ink)/0.6)] sm:text-base">
        <span className="text-[rgb(var(--meadow-ink)/0.55)]">Trusted by business owners at:</span>
        {companies.map((company) => (
          <span
            key={company}
            className="rounded-full border border-[rgba(var(--meadow-primary)/0.15)] px-4 py-1 text-[rgb(var(--meadow-ink)/0.7)]"
          >
            {company}
          </span>
        ))}
      </div>
    </section>
  );
}
