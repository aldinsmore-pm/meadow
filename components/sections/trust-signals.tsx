const trustNotes = [
  "BrightLedger (Austin) — saves 80 hrs/mo on invoice coding.",
  "Atlas Clinics (Denver) — prior auth time down from 48h to 6h.",
  "Fieldstone Logistics (Memphis) — dispatch runs on exceptions only.",
  "Northwind Manufacturing (Chicago) — doubled demos without new hires.",
  "KindredOps (Seattle) — SOPs operators actually follow.",
  "Nimble Freight (Dallas) — nights and weekends reclaimed for leadership.",
];

export function TrustSignals() {
  return (
    <section className="rounded-2xl border border-slate-300 bg-white/95 p-8 shadow-card" data-reveal data-reveal-delay="100">
      <div className="text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700/70">
          Selective partnerships
        </p>
        <h2 className="mt-3 font-serif text-2xl text-ink md:text-3xl">17 operators across specialized industries</h2>
        <p className="mt-2 text-sm text-slate-700">
          We cap active partners so we can stay embedded with their teams. Here are a few snapshots from this year’s cohort.
        </p>
      </div>

      <ul className="mt-8 grid gap-3 md:grid-cols-2">
        {trustNotes.map((note, index) => (
          <li
            key={note}
            className="flex items-start gap-3 rounded-xl border border-slate-300/70 bg-fog/70 p-4 text-sm text-slate-700"
            data-reveal
            data-reveal-delay={180 + index * 40}
          >
            <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-meadow-600/10 font-serif text-sm font-semibold text-meadow-700">
              ✓
            </span>
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
