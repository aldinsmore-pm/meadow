import Link from "next/link";

import { Button } from "../ui/button";
import { Chip } from "../ui/chip";

export type HeroVariant = "A" | "B";

interface HeroProps {
  variant?: HeroVariant;
}

export function Hero({ variant = "A" }: HeroProps) {
  const headline =
    variant === "A"
      ? "Stop working until 9pm."
      : "Free your evenings. Keep your margins.";
  const subheadline =
    "We embed with your operators for 6–9 months to eliminate the 15+ hours/week that steal your nights.";

  return (
    <section className="surface overflow-hidden rounded-2xl p-8 shadow-card md:p-12">
      <div className="relative z-10 space-y-6">
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
    </section>
  );
}
