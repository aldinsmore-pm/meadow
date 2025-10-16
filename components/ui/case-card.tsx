import { Chip } from "./chip";

export type KPI = { label: string; value: string };

export interface CaseCardProps {
  quote: string;
  client: string;
  duration: string;
  investment: string;
  kpis: KPI[];
  stack: string[];
  dayToDay: string;
}

export function CaseCard({
  quote,
  client,
  duration,
  investment,
  kpis,
  stack,
  dayToDay,
}: CaseCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-300 bg-white p-6 shadow-card">
      <p className="text-lg italic leading-snug">“{quote}”</p>
      <div className="mt-3 text-sm text-slate-700">
        {client} · {duration} · {investment}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-lg bg-fog p-3">
            <div className="font-mono tabular-nums text-xl text-ink">{kpi.value}</div>
            <div className="text-xs text-slate-700">{kpi.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {stack.map((item) => (
          <Chip key={item} label={item} />
        ))}
      </div>
      <div className="mt-4 text-sm text-ink">
        <span className="font-semibold">What changed:</span> {dayToDay}
      </div>
    </article>
  );
}
