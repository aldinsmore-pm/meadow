import { Chip } from "../ui/chip";

export interface FitPoint {
  title: string;
  description: string;
}

interface FitSectionProps {
  points: FitPoint[];
}

export function FitSection({ points }: FitSectionProps) {
  return (
    <section className="space-y-6 rounded-2xl border border-slate-300 bg-white p-6 shadow-card">
      <div>
        <h2 className="text-3xl font-serif text-ink">Are we a fit?</h2>
        <p className="mt-2 text-slate-700">
          Meadow partners with operators who are ready to institutionalize automation as an operating muscle.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Chip label="Partners accepted" value="~30%" stamped />
        <Chip label="Embedded with operators" stamped />
        <Chip label="ROI window" value="12–18 months" />
      </div>
      <ul className="grid gap-4 md:grid-cols-3">
        {points.map((point) => (
          <li key={point.title} className="rounded-xl border border-slate-300/70 bg-fog/70 p-4">
            <h3 className="font-semibold text-ink">{point.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{point.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
