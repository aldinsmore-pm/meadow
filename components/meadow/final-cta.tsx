import Link from "next/link";

export default function MeadowFinalCta() {
  return (
    <section id="book-ai-roadmap" className="bg-warm py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border-2 border-[rgba(var(--meadow-primary)/0.2)] bg-white px-8 py-12 text-center shadow-2xl">
          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[rgba(var(--meadow-accent)/0.35)] blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[rgba(var(--meadow-trust-blue)/0.15)] blur-3xl" />
          <div className="relative space-y-6">
            <span className="inline-flex items-center justify-center rounded-md border border-[rgba(var(--meadow-trust-blue)/0.3)] bg-[rgba(var(--meadow-warm)/0.8)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-trust-blue))]">
              Free time-back plan
            </span>
            <h2 className="heading-serif text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
              How many more weeks will you work until 9pm?
            </h2>
            <p className="text-base text-[rgb(var(--meadow-ink)/0.72)]">
              Book your free Time-Back Plan now. In 90 minutes, you'll know exactly which tasks are destroying your schedule—and have a plan to reclaim 10–20 hours every week starting this month.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="https://cal.com"
                className="inline-flex items-center justify-center rounded-md border-2 border-[rgb(var(--meadow-primary-dark))] bg-[rgb(var(--meadow-primary))] px-7 py-3 text-base font-semibold text-white shadow-lg shadow-[rgba(var(--meadow-primary-dark)/0.25)] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--meadow-primary-dark))]"
              >
                Yes, I want my life back
              </Link>
              <Link
                href="#start-chat"
                className="inline-flex items-center justify-center rounded-md border-2 border-[rgba(var(--meadow-primary)/0.3)] bg-white px-7 py-3 text-base font-semibold text-[rgb(var(--meadow-primary))] transition hover:bg-[rgba(var(--meadow-primary)/0.08)]"
              >
                Show me the calculator first
              </Link>
            </div>
            <p className="text-xs text-[rgb(var(--meadow-ink)/0.55)]">
              Prefer a quick call first? Text us at <a href="tel:+15125551234" className="font-semibold text-[rgb(var(--meadow-primary))]">(512) 555-1234</a> and we’ll hold a spot for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
