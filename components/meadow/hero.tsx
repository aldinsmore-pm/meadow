import Link from "next/link";

const highlights = [
  "Reclaim 10-20 hours every week",
  "Stop working nights and weekends",
  "Finally have time to grow your business",
];

export default function MeadowHero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[rgba(var(--meadow-muted)/0.7)] via-white/60 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--meadow-primary)/0.2)] bg-white/80 px-4 py-2 text-sm font-semibold text-[rgb(var(--meadow-primary))] shadow-sm">
              For Small Business Owners
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[rgb(var(--meadow-ink))] sm:text-5xl md:text-6xl">
              Drowning in repetitive tasks while your business suffers?
            </h1>
            <p className="max-w-xl text-lg text-[rgb(var(--meadow-ink)/0.8)]">
              You started this business to build something, not to spend 12-hour days chasing invoices and updating spreadsheets. Meadow shows you exactly which tasks are eating your life—and helps you automate them in weeks so you can finally breathe again.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#book-ai-roadmap"
                className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--meadow-primary))] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[rgba(var(--meadow-primary)/0.3)] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--meadow-primary))]/90"
              >
                Show me what I'm losing
              </Link>
              <Link
                href="#start-chat"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--meadow-primary)/0.2)] bg-white px-6 py-3 text-base font-semibold text-[rgb(var(--meadow-ink))] transition hover:border-[rgba(var(--meadow-primary)/0.5)] hover:bg-[rgba(var(--meadow-muted)/0.6)]"
              >
                Calculate my time back
              </Link>
            </div>
            <ul className="grid gap-3 text-sm text-[rgb(var(--meadow-ink)/0.75)] sm:grid-cols-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-2xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-4 shadow-sm backdrop-blur"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[rgba(var(--meadow-primary)/0.15)] text-sm font-semibold text-[rgb(var(--meadow-primary))]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-10 hidden h-32 w-32 rounded-full bg-[rgba(var(--meadow-accent)/0.35)] blur-3xl sm:block" />
            <div className="relative rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/80 p-6 shadow-2xl shadow-[rgba(var(--meadow-ink)/0.12)] backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-base font-semibold text-[rgb(var(--meadow-ink))]">Your Time-Back Plan</h2>
                  <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">
                    What you'll get in your free consultation
                  </p>
                </div>
                <span className="rounded-full bg-[rgba(var(--meadow-primary)/0.18)] px-3 py-1 text-xs font-semibold text-[rgb(var(--meadow-primary))]">
                  90 min
                </span>
              </div>
              <dl className="mt-8 grid gap-6 text-sm text-[rgb(var(--meadow-ink)/0.75)]">
                <div className="space-y-1">
                  <dt className="font-semibold text-[rgb(var(--meadow-ink))]">Find your biggest time vampire</dt>
                  <dd>We'll show you exactly which tasks are destroying your schedule—like those invoice follow-ups stealing 28 hours every month.</dd>
                </div>
                <div className="space-y-1">
                  <dt className="font-semibold text-[rgb(var(--meadow-ink))]">A plan that actually works</dt>
                  <dd>Walk away with a clear roadmap your team will understand and follow—no confusion, no pushback.</dd>
                </div>
                <div className="space-y-1">
                  <dt className="font-semibold text-[rgb(var(--meadow-ink))]">Get your life back fast</dt>
                  <dd>Start saving hours in weeks, not months. Most owners reclaim their evenings within 30 days.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="grid gap-6 rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/60 p-6 shadow-sm backdrop-blur-sm sm:grid-cols-3">
          <div>
            <p className="text-3xl font-semibold text-[rgb(var(--meadow-primary))]">20+ hours</p>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">Average weekly hours our clients get back—that's a half day every single week</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-[rgb(var(--meadow-primary))]">Under 3 weeks</p>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">From your first call to getting your evenings and weekends back</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-[rgb(var(--meadow-primary))]">Every client</p>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">Who starts finds more time-wasters to eliminate once they see it working</p>
          </div>
        </div>
      </div>
    </section>
  );
}
