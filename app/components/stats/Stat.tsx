export default function Stat({ value, unit, caption }: { value: string; unit?: string; caption: string }) {
  return (
    <div className="rounded-2xl border border-slate-300 bg-fog p-5 shadow-card">
      <div className="text-4xl font-mono tabular-nums text-ink">
        {value}
        {unit && <span className="align-top text-xl text-slate-700"> {unit}</span>}
      </div>
      <div className="mt-1 text-slate-700">{caption}</div>
    </div>
  )
}
