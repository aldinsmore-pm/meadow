import { Chip } from "./chip";

export type KPI = { label: string; value: string };

type CaseTone = "light" | "parchment" | "dusk";

export interface CaseCardProps {
  quote: string;
  client: string;
  duration: string;
  investment: string;
  kpis: KPI[];
  stack: string[];
  dayToDay: string;
  tone?: CaseTone;
}

export function CaseCard({
  quote,
  client,
  duration,
  investment,
  kpis,
  stack,
  dayToDay,
  tone = "light",
}: CaseCardProps) {
  const toneStyles: Record<CaseTone, { wrapper: string; kpi: string; kpiLabel: string; chip: "light" | "wheat" | "night" }> = {
    light: {
      wrapper: "border-slate-300 bg-white text-ink shadow-card",
      kpi: "bg-fog",
      kpiLabel: "text-slate-700",
      chip: "light",
    },
    parchment: {
      wrapper: "border-ember/25 bg-parchment/90 text-ink shadow-ledger",
      kpi: "bg-linen/90",
      kpiLabel: "text-ember/80",
      chip: "wheat",
    },
    dusk: {
      wrapper: "border-transparent bg-dusk/95 text-linen shadow-night",
      kpi: "bg-dusk/70 border border-white/15",
      kpiLabel: "text-linen/80",
      chip: "night",
    },
  };

  const palette = toneStyles[tone];
  const metaClass = tone === "dusk" ? "text-linen/80" : "text-slate-700/90";

  return (
    <article className={`flex h-full flex-col rounded-2xl border p-6 ${palette.wrapper}`}>
      <p className="text-lg italic leading-snug">“{quote}”</p>
      <div className={`mt-3 text-sm ${metaClass}`}>
        {client} · {duration} · {investment}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {kpis.map((kpi) => (
          <div key={kpi.label} className={`rounded-lg p-3 ${palette.kpi}`}>
            <div className="font-mono tabular-nums text-xl text-inherit">{kpi.value}</div>
            <div className={`text-xs ${palette.kpiLabel}`}>{kpi.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {stack.map((item) => (
          <Chip key={item} label={item} tone={palette.chip} />
        ))}
      </div>
      <div className="mt-4 text-sm text-inherit">
        <span className="font-semibold">What changed:</span> {dayToDay}
      </div>
    </article>
  );
}
