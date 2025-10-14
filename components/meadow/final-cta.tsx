import Link from "next/link";

export default function MeadowFinalCta() {
  return (
    <section id="book-ai-roadmap" className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-[rgba(var(--meadow-primary)/0.15)] bg-[rgb(var(--meadow-primary))] px-8 py-12 text-center text-white shadow-xl">
          <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[rgba(var(--meadow-accent)/0.45)] blur-3xl" />
          <div className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-[rgba(255,255,255,0.18)] blur-3xl" />
          <div className="relative space-y-6">
            <h2 className="text-pretty text-3xl font-semibold sm:text-4xl">
              How many more weeks will you work until 9pm?
            </h2>
            <p className="text-base text-white/80">
              Book your free Time-Back Plan now. In 90 minutes, you'll know exactly which tasks are destroying your schedule—and have a plan to reclaim 10-20 hours every week starting this month.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="https://cal.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-[rgb(var(--meadow-primary))] transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                Yes, I want my life back
              </Link>
              <Link
                href="#start-chat"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Show me the calculator first
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
