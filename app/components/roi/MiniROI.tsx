'use client'

import { useMemo, useState } from 'react'
import Chip from '../chips/Chip'

const MONTHLY_PARTNERSHIP_COST = 18000

export default function MiniROI() {
  const [hours, setHours] = useState(20)
  const [hourlyRate, setHourlyRate] = useState(45)
  const [months, setMonths] = useState(6)

  const metrics = useMemo(() => {
    const monthlySavings = hours * hourlyRate * 4.3
    const totalInvestment = months * MONTHLY_PARTNERSHIP_COST
    const payback = monthlySavings > 0 ? totalInvestment / monthlySavings : 0
    const yearOneReturn = totalInvestment > 0 ? ((monthlySavings * 12 - totalInvestment) / totalInvestment) * 100 : 0

    return {
      monthlySavings,
      payback,
      yearOneReturn
    }
  }, [hours, hourlyRate, months])

  return (
    <div className="rounded-2xl border border-slate-300 bg-fog p-6 shadow-card">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="font-serif text-2xl text-ink">Mini ROI check</h3>
          <p className="mt-1 text-sm text-slate-700">Adjust the inputs to see how quickly the Meadow engagement returns capacity.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Chip label="Save / mo" value={`$${metrics.monthlySavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}`} tone="stamped" />
          <Chip
            label="Payback"
            value={`${metrics.payback < 0.5 ? '<0.5' : metrics.payback.toFixed(1)} mo`}
          />
          <Chip
            label="Year-1 ROI"
            value={`${metrics.yearOneReturn > 0 ? Math.round(metrics.yearOneReturn) : 0}%`}
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <label className="flex flex-col gap-2 text-sm text-ink">
          Hours saved / week
          <input
            type="range"
            min={5}
            max={60}
            value={hours}
            onChange={(event) => setHours(Number(event.target.value))}
            className="accent-meadow-600"
          />
          <span className="font-mono tabular-nums text-slate-700">{hours} hrs</span>
        </label>
        <label className="flex flex-col gap-2 text-sm text-ink">
          Blended hourly cost
          <input
            type="number"
            min={20}
            max={150}
            step={5}
            value={hourlyRate}
            onChange={(event) => setHourlyRate(Number(event.target.value))}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-ink">
          Months with Meadow
          <input
            type="number"
            min={3}
            max={12}
            step={1}
            value={months}
            onChange={(event) => setMonths(Number(event.target.value))}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2"
          />
        </label>
      </div>
    </div>
  )
}
