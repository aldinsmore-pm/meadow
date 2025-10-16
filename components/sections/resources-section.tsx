import Link from "next/link";

import { SectionSurface } from "../ui/section-surface";

interface ResourceItem {
  title: string;
  description: string;
  badge: string;
}

interface ResourcesSectionProps {
  items: ResourceItem[];
}

export function ResourcesSection({ items }: ResourcesSectionProps) {
  return (
    <SectionSurface
      variant="ledger"
      className="p-8 md:p-10"
      innerClassName="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center"
      data-reveal
      data-reveal-delay="200"
    >
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember/80">Resource library</p>
        <h3 className="font-serif text-2xl text-ink md:text-3xl">Not ready to apply yet?</h3>
        <p className="text-sm text-slate-700/90">
          Start with our self-serve tools. Quantify the opportunity, get your team aligned, and show up to discovery with numbers in hand.
        </p>
        <Link
          href="mailto:hello@meadow.ai"
          className="inline-flex w-fit items-center justify-center rounded-full border border-ember/35 bg-white/80 px-5 py-2 text-sm font-semibold text-ember transition hover:bg-ember/15"
        >
          Request access to the library
        </Link>
      </div>

      <div className="grid gap-4">
        {items.map((item, index) => {
          const cards = [
            "border-slate-300/70 bg-white/90 shadow-card",
            "border-ember/25 bg-parchment/85 shadow-ledger",
            "border-moss-200/60 bg-tide/70 shadow-soft",
          ];
          const palette = cards[index % cards.length];

          return (
            <article
              key={item.title}
              className={`rounded-2xl border p-5 backdrop-blur ${palette}`}
              data-reveal
              data-reveal-delay={240 + index * 80}
            >
              <span className="inline-flex w-fit items-center rounded-full border border-ember/30 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ember">
                {item.badge}
              </span>
              <h4 className="mt-3 font-serif text-lg text-ink">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-700/90">{item.description}</p>
            </article>
          );
        })}
      </div>
    </SectionSurface>
  );
}
