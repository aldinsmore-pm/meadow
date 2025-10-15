import { cn } from '@/utils/cn'

export default function Chip({
  label,
  value,
  tone = 'default'
}: {
  label: string
  value?: string
  tone?: 'default' | 'stamped'
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-1.5 font-mono text-sm tabular-nums',
        tone === 'stamped' ? 'bg-wheat text-ink' : 'bg-fog text-ink'
      )}
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-ink">{label}</span>
      {value && <span className="text-sm normal-case tracking-tight text-slate-700">{value}</span>}
    </span>
  )
}
