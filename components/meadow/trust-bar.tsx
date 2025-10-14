const trustNotes = [
  "BrightLedger (Austin) – saves 80 hrs/mo on invoice coding",
  "Atlas Clinics (Denver) – cut prior auth time from 48h to 6h",
  "Fieldstone Logistics (Memphis) – nights free after 10 years",
  "Northlight Finance (Chicago) – doubled capacity without new hires",
  "KindredOps (Seattle) – playbooks staff actually follow",
  "Nimble Freight (Dallas) – dispatch updates run themselves",
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
            Owners bring us the busywork that keeps them late at the office. Here are a few of their wins once Meadow took over the repetitive tasks.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 text-sm text-[rgb(var(--meadow-ink)/0.75)] sm:grid-cols-2">
          {trustNotes.map((note) => (
            <li key={note} className="flex items-start gap-3 rounded-xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/85 p-4 shadow-sm">
              <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[rgba(var(--meadow-primary)/0.1)] font-serif text-sm font-semibold text-[rgb(var(--meadow-primary))]">
                ✓
              </span>
              <span>{note}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-5 text-center text-xs text-[rgb(var(--meadow-ink)/0.6)]">
          <p>
            38 of these owners booked their free Time-Back Plan after 8pm once the house was quiet. We work on your schedule.
          </p>
        </div>
      </div>
    </section>
  );
}
