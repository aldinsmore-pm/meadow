import { Chip } from "../ui/chip";
import { SectionSurface } from "../ui/section-surface";

export interface FitPoint {
  title: string;
  description: string;
}

interface FitSectionProps {
  points: FitPoint[];
}

export function FitSection({ points }: FitSectionProps) {
  const cardStyles = [
    "border-slate-300 bg-white/90 shadow-card",
    "border-ember/25 bg-parchment/85 shadow-ledger",
    "border-transparent bg-dusk/90 text-linen shadow-night",
  ];

  return (
    <SectionSurface
      variant="aurora"
      className="p-6 md:p-8"
      innerClassName="space-y-6"
      data-reveal
      data-reveal-delay="120"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss-600">Fit check</p>
        <h2 className="mt-2 text-3xl font-serif text-ink">Are we a fit?</h2>
        <p className="mt-2 text-slate-700/90">
          Meadow partners with operators who are ready to institutionalize automation as an operating muscle.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Chip label="Partners accepted" value="~30%" stamped tone="wheat" />
        <Chip label="Embedded with operators" stamped tone="moss" />
        <Chip label="ROI window" value="12–18 months" tone="night" />
      </div>
      <ul className="grid gap-4 md:grid-cols-3">
        {points.map((point, index) => {
          const palette = cardStyles[index % cardStyles.length];
          const descriptionClass = palette.includes("bg-dusk") ? "text-linen/75" : "text-slate-700/90";

          return (
            <li
              key={point.title}
              className={`rounded-xl border p-5 ${palette}`}
              data-reveal
              data-reveal-delay={180 + index * 80}
            >
              <h3 className="font-semibold">{point.title}</h3>
              <p className={`mt-2 text-sm ${descriptionClass}`}>{point.description}</p>
            </li>
          );
        })}
      </ul>
    </SectionSurface>
  );
}
