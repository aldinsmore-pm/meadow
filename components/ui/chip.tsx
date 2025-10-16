type ChipTone = "light" | "wheat" | "moss" | "night";

interface ChipProps {
  label: string;
  value?: string | number;
  stamped?: boolean;
  tone?: ChipTone;
  className?: string;
}

const chipStyles: Record<ChipTone, { base: string; stamped: string; label: string; value: string }> = {
  light: {
    base: "bg-white/70 border-slate-300",
    stamped: "bg-wheat/45 border-ember/30",
    label: "text-slate-700",
    value: "text-ink",
  },
  wheat: {
    base: "bg-wheat/40 border-ember/35",
    stamped: "bg-wheat/55 border-ember/45",
    label: "text-ember",
    value: "text-ink",
  },
  moss: {
    base: "bg-tide/70 border-moss-400/50",
    stamped: "bg-moss-200/75 border-moss-600/45",
    label: "text-moss-600",
    value: "text-meadow-700",
  },
  night: {
    base: "bg-dusk/85 border-white/18",
    stamped: "bg-white/12 border-white/30",
    label: "text-linen/85",
    value: "text-gold",
  },
};

export function Chip({ label, value, stamped, tone = "light", className }: ChipProps) {
  const palette = chipStyles[tone];
  const wrapperClasses = [
    "inline-flex items-center gap-2 rounded-lg border px-3 py-1 uppercase tracking-[0.18em]",
    stamped ? palette.stamped : palette.base,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses}>
      <span className={`text-[11px] font-semibold ${palette.label}`}>{label}</span>
      {value ? <span className={`font-mono tabular-nums text-sm normal-case ${palette.value}`}>{value}</span> : null}
    </div>
  );
}
