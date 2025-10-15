import Chip from '../chips/Chip'
import type { CaseStudy } from '../../lib/types'

export default function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <article className="reveal flex h-full flex-col justify-between rounded-2xl border border-slate-300 bg-fog p-6 shadow-card transition hover:shadow-lg">
      <div>
        <h3 className="font-serif text-2xl leading-snug text-ink">{c.headline}</h3>
        <p className="mt-1 text-sm text-slate-700">{c.subtitle}</p>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {c.kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-slate-300 bg-white/60 p-3">
              <div className="text-sm text-slate-700">{kpi.label}</div>
              <div className="text-2xl font-mono tabular-nums text-ink">
                {kpi.value}
                {kpi.unit ? ` ${kpi.unit}` : ''}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {c.stack.slice(0, 3).map((tool) => (
            <Chip key={tool} label={tool} />
          ))}
        </div>

        <p className="mt-4 text-sm text-ink">
          <span className="font-medium">What changed:</span>{' '}
          <span className="text-slate-700">{c.changeBullet}</span>
        </p>
      </div>

      {c.quote && <blockquote className="mt-6 border-l-2 border-meadow-600 pl-4 text-slate-700">{c.quote}</blockquote>}
    </article>
  )
}
