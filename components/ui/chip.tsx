interface ChipProps {
  label: string;
  value?: string | number;
  stamped?: boolean;
  className?: string;
}

export function Chip({ label, value, stamped, className }: ChipProps) {
  const classes = [
    "inline-flex items-center gap-2 rounded-lg border px-3 py-1",
    stamped ? "bg-wheat/40" : "bg-white/70",
    "border-slate-300",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <span className="text-[11px] uppercase tracking-wide text-slate-700">{label}</span>
      {value ? (
        <span className="font-mono tabular-nums text-sm text-ink">{value}</span>
      ) : null}
    </div>
  );
}
