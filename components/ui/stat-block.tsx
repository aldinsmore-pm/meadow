type StatTone = "fog" | "parchment" | "tide" | "night";

interface StatBlockProps {
  value: string;
  unit?: string;
  caption: string;
  tone?: StatTone;
}

const toneClasses: Record<StatTone, { wrapper: string; value: string; caption: string; unit: string }> = {
  fog: {
    wrapper: "border-slate-300 bg-fog text-ink shadow-card",
    value: "text-ink",
    caption: "text-slate-700",
    unit: "text-slate-700",
  },
  parchment: {
    wrapper: "border-ember/30 bg-parchment/90 text-ink shadow-ledger",
    value: "text-ink",
    caption: "text-ember/80",
    unit: "text-ember",
  },
  tide: {
    wrapper: "border-moss-200/60 bg-tide/80 text-ink shadow-soft",
    value: "text-meadow-700",
    caption: "text-moss-600",
    unit: "text-moss-600",
  },
  night: {
    wrapper: "border-transparent bg-dusk/95 text-linen shadow-night",
    value: "text-linen",
    caption: "text-linen/75",
    unit: "text-gold",
  },
};

export function StatBlock({ value, unit, caption, tone = "fog" }: StatBlockProps) {
  const palette = toneClasses[tone];

  return (
    <div className={`rounded-2xl border p-5 ${palette.wrapper}`}>
      <div className={`text-4xl font-mono tabular-nums ${palette.value}`}>
        {value}
        {unit ? <span className={`align-top text-xl ${palette.unit}`}> {unit}</span> : null}
      </div>
      <div className={`mt-1 ${palette.caption}`}>{caption}</div>
    </div>
  );
}
