import Image from "next/image";
import Link from "next/link";

import founderImage from "@/public/images/founder-alejandro.jpg";

import { Button } from "../ui/button";
import { Chip } from "../ui/chip";

export type HeroVariant = "A" | "B";

interface HeroProps {
  variant?: HeroVariant;
}

const discoverySteps = [
  {
    step: "1",
    title: "Map your bottlenecks",
    body: "Surface the workflows and time costs with the highest ROI potential.",
  },
  {
    step: "2",
    title: "Assess technical fit",
    body: "Evaluate your systems, team readiness, and operational alignment.",
  },
  {
    step: "3",
    title: "Propose partnership terms",
    body: "Co-design a 6–9 month roadmap—scope, timeline, investment, outcomes.",
  },
];

const founderQuote =
  "After burning out twice as a founder, I built Meadow so owners can reclaim their evenings. We cap partnerships each year so I can stay directly involved.";

export function Hero({ variant = "A" }: HeroProps) {
  const headline =
    variant === "A"
      ? "Stop working until 9pm."
      : "Free your evenings. Keep your margins.";
  const subheadline =
    "We embed with your operators for 6–9 months to eliminate the 15+ hours/week that steal your nights.";

  return (
    <section className="surface relative overflow-hidden rounded-2xl border border-slate-300 bg-fog p-8 shadow-card md:p-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-fog/50 to-wheat/30" />
        <div className="absolute -top-20 left-1/3 h-48 w-72 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-meadow-600/10 blur-3xl" />
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.95fr] lg:items-start">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="font-serif text-5xl leading-tight text-ink md:text-6xl">{headline}</h1>
            <p className="max-w-2xl text-lg text-slate-700">{subheadline}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="#apply">Apply to partner</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#fit">See if you’re a fit</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Chip label="Selective partnerships" value="~30%" stamped />
            <Chip label="Embedded with operators" stamped />
            <Chip label="ROI in months" value="12–18 mo compounding" />
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-2xl border border-slate-300/80 bg-white/90 shadow-card backdrop-blur">
          <div className="relative h-48 w-full md:h-56">
            <Image
              src={founderImage}
              alt="Alejandro Dinsmore, Meadow founder"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 420px"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 py-3 text-sm text-white">
              <p className="font-semibold">Alejandro Dinsmore</p>
              <p className="text-white/80">Founder</p>
            </div>
          </div>
          <div className="space-y-4 border-t border-slate-300/60 p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700/70">Discovery process</p>
              <p className="mt-1 text-sm text-slate-700">
                We go deep before proposing a partnership so the roadmap lands cleanly with your operators.
              </p>
            </div>
            <ol className="space-y-3">
              {discoverySteps.map((step) => (
                <li key={step.step} className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-meadow-600/40 bg-meadow-600/10 text-xs font-semibold text-meadow-700">
                    {step.step}
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-ink">{step.title}</p>
                    <p className="text-sm text-slate-700/90">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="border-t border-slate-300/60 pt-3 text-sm italic text-slate-700">
              “{founderQuote}”
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
