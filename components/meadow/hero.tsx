import Link from "next/link";
import Image from "next/image";
import FounderImage from "@/public/images/founder-alejandro.jpg";

const highlights = [
  "Reclaim 10-20 hours every week",
  "Stop working nights and weekends",
  "Finally have time to grow your business",
];

export default function MeadowHero() {
  return (
    <section className="relative overflow-hidden bg-warm py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[rgba(var(--meadow-warm)/0.9)] via-white/70 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.95fr] lg:items-center">
          <div className="space-y-7 max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-md border border-[rgba(var(--meadow-primary)/0.25)] bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[rgb(var(--meadow-primary))] shadow-sm">
              For Small Business Owners
              <span className="hidden rounded-full bg-[rgba(var(--meadow-primary)/0.1)] px-2 py-1 text-[0.6rem] font-semibold text-[rgb(var(--meadow-primary-dark))] sm:inline-flex">
                Free 90-Min Session
              </span>
            </div>
            <h1 className="heading-serif text-balance text-4xl font-semibold leading-tight text-[rgb(var(--meadow-ink))] sm:text-5xl md:text-6xl">
              Spending too much time on repetitive tasks instead of growing your business?
            </h1>
            <p className="max-w-2xl text-lg text-[rgb(var(--meadow-ink)/0.78)]">
              You started this business to build something, not to spend 12-hour days chasing invoices and updating spreadsheets. Meadow shows you exactly which tasks are consuming your time—and helps you automate them in weeks so you can focus on what matters.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#book-ai-roadmap"
                className="inline-flex items-center justify-center rounded-md border-2 border-[rgb(var(--meadow-primary-dark))] bg-[rgb(var(--meadow-primary))] px-7 py-3 text-lg font-semibold text-white shadow-xl shadow-[rgba(var(--meadow-primary-dark)/0.3)] transition hover:-translate-y-1 hover:bg-[rgb(var(--meadow-primary-dark))]"
              >
                Show me what I'm losing
              </Link>
              <Link
                href="#start-chat"
                className="inline-flex items-center justify-center text-base font-semibold text-[rgb(var(--meadow-primary))] underline underline-offset-4 transition hover:text-[rgb(var(--meadow-primary-dark))]"
              >
                Calculate my time back
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 rounded-xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/90 px-5 py-3 text-xs font-medium text-[rgb(var(--meadow-ink)/0.7)] shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-lg text-[rgb(var(--meadow-primary))]">✓</span>
                <span>No tech jargon or AI hype—plain English</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg text-[rgb(var(--meadow-primary))]">✓</span>
                <span>Free 90-minute plan • No credit card needed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg text-[rgb(var(--meadow-primary))]">✓</span>
                <span>Your data stays private and secure</span>
              </div>
            </div>
            <ul className="grid gap-3 text-sm text-[rgb(var(--meadow-ink)/0.75)] sm:grid-cols-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border-2 border-[rgba(var(--meadow-primary)/0.15)] bg-white/80 p-5 shadow-sm"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 border-[rgba(var(--meadow-primary)/0.25)] bg-[rgba(var(--meadow-primary)/0.1)] text-sm font-semibold text-[rgb(var(--meadow-primary))]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -left-14 -top-10 hidden h-40 w-40 rounded-full bg-[rgba(var(--meadow-accent)/0.25)] blur-3xl sm:block" />
            <div className="relative overflow-hidden rounded-3xl border-2 border-[rgba(var(--meadow-primary)/0.2)] bg-white/95 shadow-2xl shadow-[rgba(var(--meadow-primary-dark)/0.25)]">
              <div className="flex flex-col lg:min-h-[520px] lg:flex-row">
                <div className="relative h-64 w-full flex-none overflow-hidden border-b border-[rgba(var(--meadow-primary)/0.12)] lg:h-auto lg:w-[40%] lg:border-b-0 lg:border-r">
                  <Image
                    src={FounderImage}
                    alt="Alejandro Dinsmore, Founder of Meadow"
                    fill
                    className="object-cover object-[center_32%]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(0,0,0,0.55)] to-transparent px-5 py-4 text-sm text-white">
                    <p className="font-semibold">Alejandro Dinsmore</p>
                    <p className="text-white/80">Founder, Meadow</p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <header className="border-b border-[rgba(var(--meadow-primary)/0.12)] bg-[rgba(var(--meadow-primary)/0.04)] px-4 py-3 lg:px-6 lg:py-4">
                    <div className="space-y-1.5">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[rgb(var(--meadow-primary))]">
                        Free time-back plan
                      </p>
                      <h2 className="heading-serif text-lg font-semibold leading-tight text-[rgb(var(--meadow-ink))] lg:text-xl">
                        Inside your 90-minute plan
                      </h2>
                    </div>
                  </header>

                  <div className="flex flex-1 flex-col">
                  <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-5">
                    <div className="space-y-4">
                        {[
                        {
                          step: "1",
                          title: "Spot your biggest time drain",
                          body: "List the tasks eating your week and see what they're costing in real dollars.",
                        },
                        {
                          step: "2",
                          title: "Check the dollars before you invest",
                          body: "Leave with savings, costs, and breakeven spelled out—no jargon, no guesswork.",
                        },
                        {
                          step: "3",
                          title: "Turn it on without the headaches",
                          body: "Get a simple checklist, training options, and safety checks so adoption sticks.",
                        },
                        ].map(({ step, title, body }) => (
                          <div key={step} className="flex gap-3">
                            <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-[rgba(var(--meadow-primary)/0.2)] bg-[rgba(var(--meadow-primary)/0.1)] font-serif text-base font-semibold text-[rgb(var(--meadow-primary))]">
                              {step}
                            </span>
                            <div className="space-y-1">
                              <h3 className="text-sm font-semibold text-[rgb(var(--meadow-ink))]">{title}</h3>
                              <p className="text-sm leading-relaxed text-[rgb(var(--meadow-ink)/0.75)] lg:text-[0.88rem]">{body}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <footer className="border-t border-[rgba(var(--meadow-primary)/0.12)] bg-[rgba(var(--meadow-primary)/0.04)] px-6 py-4 text-sm text-[rgb(var(--meadow-ink)/0.72)]">
                      "After a decade in ops, this is the playbook I wish I’d had to get my evenings back."
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 rounded-3xl border-2 border-[rgba(var(--meadow-primary)/0.15)] bg-white/95 p-6 shadow-lg sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-trust-blue))]">
              Typical results
            </p>
            <p className="heading-serif text-3xl font-semibold text-[rgb(var(--meadow-primary-dark))]">20+ hours back</p>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">Average weekly hours our clients reclaim—that's a half day every single week.</p>
          </div>
          <div className="flex flex-col gap-2 border-l border-[rgba(var(--meadow-primary)/0.1)] pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-trust-blue))]">
              Speed to relief
            </p>
            <p className="heading-serif text-3xl font-semibold text-[rgb(var(--meadow-primary-dark))]">Under 3 weeks</p>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">From your first call to getting your evenings and weekends back.</p>
          </div>
          <div className="flex flex-col gap-2 border-l border-[rgba(var(--meadow-primary)/0.1)] pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-trust-blue))]">
              Owners who stick with it
            </p>
            <p className="heading-serif text-3xl font-semibold text-[rgb(var(--meadow-primary-dark))]">94% expand</p>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">Most owners find even more time-wasters to eliminate once they see proofs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

