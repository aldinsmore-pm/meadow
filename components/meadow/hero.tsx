import Link from "next/link";
import Image from "next/image";
import FounderImage from "@/public/images/founder-alejandro.jpg";

export default function MeadowHero() {
  return (
    <section className="relative overflow-hidden bg-warm py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[rgba(var(--meadow-warm)/0.9)] via-white/70 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.95fr] lg:items-center">
          <div className="space-y-7 max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-md border border-[rgba(var(--meadow-primary)/0.25)] bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[rgb(var(--meadow-primary))] shadow-sm">
              Limited Client Engagements
              <span className="hidden rounded-full bg-[rgba(var(--meadow-primary)/0.1)] px-2 py-1 text-[0.6rem] font-semibold text-[rgb(var(--meadow-primary-dark))] sm:inline-flex">
                15-20 Partners/Year
              </span>
            </div>
            <h1 className="heading-serif text-balance text-4xl font-semibold leading-tight text-[rgb(var(--meadow-ink))] sm:text-5xl md:text-6xl">
              We help 15-20 businesses per year reclaim 20+ hours every week through systematic automation.
            </h1>
            <p className="max-w-2xl text-lg text-[rgb(var(--meadow-ink)/0.78)]">
              If you're a $2M-$20M business spending nights and weekends on repetitive work—and you're ready to invest in a 6-9 month partnership—let's see if we're aligned.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#book-ai-roadmap"
                className="inline-flex items-center justify-center rounded-md border-2 border-[rgb(var(--meadow-primary-dark))] bg-[rgb(var(--meadow-primary))] px-7 py-3 text-lg font-semibold text-white shadow-xl shadow-[rgba(var(--meadow-primary-dark)/0.3)] transition hover:-translate-y-1 hover:bg-[rgb(var(--meadow-primary-dark))]"
              >
                Start an Application
              </Link>
              <Link
                href="#approach"
                className="inline-flex items-center justify-center rounded-md border-2 border-[rgba(var(--meadow-primary)/0.3)] bg-white px-7 py-3 text-base font-semibold text-[rgb(var(--meadow-primary))] transition hover:bg-[rgba(var(--meadow-primary)/0.08)]"
              >
                Review Partnership Criteria
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 rounded-xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/90 px-5 py-3 text-xs font-medium text-[rgb(var(--meadow-ink)/0.7)] shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-lg text-[rgb(var(--meadow-primary))]">✓</span>
                <span>$15K-$45K typical investment over 6-9 months</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg text-[rgb(var(--meadow-primary))]">✓</span>
                <span>Most partners break even in 6-9 months</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg text-[rgb(var(--meadow-primary))]">✓</span>
                <span>~30% acceptance rate—we're selective</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-14 -top-10 hidden h-40 w-40 rounded-full bg-[rgba(var(--meadow-accent)/0.25)] blur-3xl sm:block" />
            <div className="relative overflow-hidden rounded-3xl border-2 border-[rgba(var(--meadow-primary)/0.2)] bg-white/95 shadow-2xl shadow-[rgba(var(--meadow-primary-dark)/0.25)]">
              <div className="flex flex-col lg:flex-row">
                <div className="relative h-48 w-full flex-none overflow-hidden border-b border-[rgba(var(--meadow-primary)/0.12)] lg:h-auto lg:w-[30%] lg:border-b-0 lg:border-r">
                  <Image
                    src={FounderImage}
                    alt="Alejandro Dinsmore, Founder of Meadow"
                    fill
                    className="object-cover object-[center_52%] lg:object-[center_32%]"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent px-4 py-3 text-xs text-white">
                    <p className="font-semibold">Alejandro Dinsmore</p>
                    <p className="text-white/80">Founder</p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <div className="mb-4">
                    <h2 className="heading-serif text-base font-semibold text-[rgb(var(--meadow-ink))] lg:text-lg">
                      Discovery Process
                    </h2>
                  </div>

                  <div className="space-y-3 mb-4">
                    {[
                      {
                        step: "1",
                        title: "Map your bottlenecks",
                        body: "Examine workflows and time costs to determine ROI potential.",
                      },
                      {
                        step: "2",
                        title: "Assess technical fit",
                        body: "Evaluate your systems, team readiness, and operational alignment.",
                      },
                      {
                        step: "3",
                        title: "Propose partnership terms",
                        body: "Outline 6-9 month plan—scope, timeline, investment, outcomes.",
                      },
                    ].map(({ step, title, body }) => (
                      <div key={step} className="flex gap-2.5">
                        <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[rgba(var(--meadow-primary)/0.25)] bg-[rgba(var(--meadow-primary)/0.08)] text-xs font-semibold text-[rgb(var(--meadow-primary))]">
                          {step}
                        </span>
                        <div>
                          <h3 className="text-xs font-semibold text-[rgb(var(--meadow-ink))]">{title}</h3>
                          <p className="text-xs leading-relaxed text-[rgb(var(--meadow-ink)/0.7)]">{body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[rgba(var(--meadow-primary)/0.1)] pt-3 text-xs italic text-[rgb(var(--meadow-ink)/0.7)]">
                    "I only work with businesses where I know we can deliver 10x ROI."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 rounded-3xl border-2 border-[rgba(var(--meadow-primary)/0.15)] bg-white/95 p-6 shadow-lg sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-trust-blue))]">
              Partner Selection
            </p>
            <p className="heading-serif text-3xl font-semibold text-[rgb(var(--meadow-primary-dark))]">~30% accepted</p>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">We evaluate technical fit, team readiness, and growth potential. Not every business is right for our approach—and that's okay.</p>
          </div>
          <div className="flex flex-col gap-2 border-l border-[rgba(var(--meadow-primary)/0.1)] pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-trust-blue))]">
              Active Partnerships
            </p>
            <p className="heading-serif text-3xl font-semibold text-[rgb(var(--meadow-primary-dark))]">17 businesses</p>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">We limit engagements so every partner gets direct access to our team—no junior staff, no outsourcing.</p>
          </div>
          <div className="flex flex-col gap-2 border-l border-[rgba(var(--meadow-primary)/0.1)] pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-trust-blue))]">
              Typical Engagement Length
            </p>
            <p className="heading-serif text-3xl font-semibold text-[rgb(var(--meadow-primary-dark))]">6-9 months</p>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">We stay until the systems work and your team can maintain them. Some partners extend to tackle additional workflows.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

