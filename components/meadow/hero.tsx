import Link from "next/link";
import Image from "next/image";
import FounderImage from "@/public/images/founder-alejandro.jpg";

const heroStats = [
  {
    label: "Acceptance rate",
    value: "~30%",
    caption: "We partner with the owners we can help most.",
  },
  {
    label: "Active partnerships",
    value: "17",
    caption: "Each engagement is founder-led, never delegated.",
  },
  {
    label: "Typical engagement",
    value: "6-9 months",
    caption: "We stay until the systems run on their own.",
  },
];

const discoverySteps = [
  {
    step: "1",
    title: "Map your bottlenecks",
    body: "We surface the workflows and time costs with the highest ROI potential.",
  },
  {
    step: "2",
    title: "Assess technical fit",
    body: "We evaluate systems, team readiness, and how automation complements your ops.",
  },
  {
    step: "3",
    title: "Propose partnership terms",
    body: "We co-design a 6-9 month roadmap—scope, timeline, investment, and outcomes.",
  },
];

const founderQuote =
  "After burning out twice as a founder, I built Meadow so owners can reclaim their evenings. We cap partnerships each year to stay deeply involved.";

export default function MeadowHero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Illustrated Field Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FDF9F0] to-[#F7EBDC]" />
        <div className="absolute inset-x-0 top-0 h-[55%] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.92)_0%,_rgba(255,255,255,0.2)_65%,_transparent_100%)]" />
        <div className="absolute inset-x-[-15%] top-[18%] h-[220px] bg-[radial-gradient(circle_at_center,_rgba(255,247,232,0.62)_0%,_transparent_70%)] blur-3xl opacity-85" />
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <g style={{ animation: "meadowBreeze 28s ease-in-out infinite", animationDelay: "-6s" }}>
            <path
              d="M 0 360 Q 200 320, 460 335 T 930 320 T 1440 340 L 1440 420 L 0 420 Z"
              fill="rgba(223,236,230,0.39)"
              stroke="transparent"
            />
          </g>
          <g style={{ animation: "meadowBreeze 32s ease-in-out infinite", animationDelay: "-2s" }}>
            <path
              d="M 0 420 Q 220 390, 520 410 T 1020 395 T 1440 415 L 1440 500 L 0 500 Z"
              fill="rgba(247,223,196,0.36)"
              stroke="transparent"
            />
          </g>
          <g style={{ animation: "meadowBreeze 30s ease-in-out infinite", animationDelay: "-10s" }}>
            <path
              d="M 0 480 Q 240 460, 560 475 T 1080 465 T 1440 485 L 1440 560 L 0 560 Z"
              fill="rgba(226,240,219,0.36)"
              stroke="transparent"
            />
          </g>
          <g style={{ animation: "meadowBreeze 34s ease-in-out infinite" }}>
            <path
              d="M 0 530 Q 260 515, 580 525 T 1110 520 T 1440 535 L 1440 600 L 0 600 Z"
              fill="rgba(249,224,201,0.34)"
              stroke="transparent"
            />
          </g>
        </svg>
        <div className="absolute -top-10 left-[8%] h-28 w-56 rounded-full bg-[rgba(255,247,230,0.8)] blur-2xl opacity-75" />
        <div className="absolute -top-12 right-[16%] h-32 w-64 rounded-full bg-[rgba(255,245,225,0.82)] blur-3xl opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[rgba(253,240,222,0.92)] via-[rgba(253,240,222,0.4)] to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(225,207,188,0.055)_1px,_transparent_1px),_linear-gradient(300deg,_rgba(222,234,212,0.048)_1px,_transparent_1px)] bg-[size:200px_200px] opacity-26 mix-blend-soft-light" />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.95fr] lg:items-center">
          <div className="space-y-5 max-w-3xl">
            <h1 className="heading-serif text-balance text-4xl font-semibold leading-[1.1] text-[rgb(var(--meadow-ink))] sm:text-5xl md:text-6xl">
              Spending too much time on repetitive tasks instead of growing your business?
            </h1>
            <p className="max-w-2xl text-base text-[rgb(var(--meadow-ink)/0.78)] leading-relaxed">
              If you're a $2M-$20M business spending nights and weekends on repetitive work—and you're ready to invest in a 6-9 month partnership—let's see if we're aligned.
            </p>
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <Link
                href="#book-ai-roadmap"
                className="inline-flex items-center justify-center rounded border-2 border-[#1f7b53] bg-[#2fad7a] px-5 py-1.5 text-sm font-semibold tracking-[0.01em] text-white shadow-xl shadow-[rgba(31,123,83,0.28)] transition hover:-translate-y-0.5 hover:bg-[#278f64]"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif", fontWeight: 600 }}
              >
                Start an Application
              </Link>
              <Link
                href="#approach"
                className="inline-flex items-center justify-center rounded border-2 border-[rgba(39,143,100,0.35)] bg-white px-5 py-1.5 text-xs font-medium tracking-[0.05em] text-[#278f64] transition hover:bg-[rgba(39,143,100,0.08)]"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif", fontWeight: 500 }}
              >
                Review Partnership Criteria
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-lg border border-[rgba(var(--meadow-primary)/0.12)] bg-white/90 px-4 py-2.5 text-xs font-medium text-[rgb(var(--meadow-ink)/0.7)] shadow-sm">
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
          
          {/* Founder Discovery Card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg border-2 border-[rgba(var(--meadow-primary)/0.2)] bg-white/95 shadow-2xl shadow-[rgba(var(--meadow-primary-dark)/0.25)]">
              <div className="flex flex-col lg:flex-row">
                <div className="relative h-64 w-full flex-none overflow-hidden border-b border-[rgba(var(--meadow-primary)/0.12)] lg:h-auto lg:w-[45%] lg:border-b-0 lg:border-r">
                  <Image
                    src={FounderImage}
                    alt="Alejandro Dinsmore, Founder of Meadow"
                    fill
                    className="object-cover object-[center_52%] lg:object-[center_32%]"
                    sizes="(max-width: 1024px) 100vw, 45vw"
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
                        <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded border border-[rgba(var(--meadow-primary)/0.25)] bg-[rgba(var(--meadow-primary)/0.08)] text-xs font-semibold text-[rgb(var(--meadow-primary))]">
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
                    "After burning out twice as a founder, I built this to help others get their evenings back. I only take 15-20 partners per year so I can go deep instead of wide—quality over scale, always."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid gap-6 rounded-lg border-2 border-[rgba(var(--meadow-primary)/0.15)] bg-white/95 p-5 shadow-lg sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(21,40,30,0.45)]">
              Partner Selection
            </p>
            <p className="heading-serif text-3xl font-semibold text-[rgb(47,57,67)]">~30% accepted</p>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">We evaluate technical fit, team readiness, and growth potential. Not every business is right for our approach—and that's okay.</p>
          </div>
          <div className="flex flex-col gap-2 border-l border-[rgba(var(--meadow-primary)/0.1)] pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(21,40,30,0.45)]">
              Active Partnerships
            </p>
            <p className="heading-serif text-3xl font-semibold text-[rgb(47,57,67)]">17 businesses</p>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">We limit engagements so every partner gets direct access to our team—no junior staff, no outsourcing.</p>
          </div>
          <div className="flex flex-col gap-2 border-l border-[rgba(var(--meadow-primary)/0.1)] pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(21,40,30,0.45)]">
              Typical Engagement Length
            </p>
            <p className="heading-serif text-3xl font-semibold text-[rgb(47,57,67)]">6-9 months</p>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">We stay until the systems work and your team can maintain them. Some partners extend to tackle additional workflows.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

