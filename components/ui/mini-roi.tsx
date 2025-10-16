"use client";

import * as React from "react";

import { Chip } from "./chip";

function formatCurrency(value: number) {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function MiniROI() {
  const [hoursPerWeek, setHoursPerWeek] = React.useState(15);
  const [hourlyRate, setHourlyRate] = React.useState(45);
  const [investment, setInvestment] = React.useState(18000);

  const savePerMonth = hoursPerWeek * 4 * hourlyRate;
  const paybackMonths = investment > 0 ? investment / savePerMonth : 0;
  const yearOneRoi = investment > 0 ? (savePerMonth * 12 - investment) / investment : 0;

  return (
    <div
      className="rounded-3xl border border-moss-200/60 bg-white/90 p-6 shadow-soft backdrop-blur"
      data-reveal
      data-reveal-delay="140"
    >
      <div className="grid items-end gap-4 md:grid-cols-3">
        <label className="text-sm text-ink">
          Hours/week
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-slate-300/70 bg-white/80 px-3 py-2 shadow-inner focus-ring"
            value={hoursPerWeek}
            min={0}
            onChange={(event) => setHoursPerWeek(Number(event.target.value))}
          />
        </label>
        <label className="text-sm text-ink">
          Hourly rate
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-slate-300/70 bg-white/80 px-3 py-2 shadow-inner focus-ring"
            value={hourlyRate}
            min={0}
            onChange={(event) => setHourlyRate(Number(event.target.value))}
          />
        </label>
        <label className="text-sm text-ink">
          Investment
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-slate-300/70 bg-white/80 px-3 py-2 shadow-inner focus-ring"
            value={investment}
            min={0}
            onChange={(event) => setInvestment(Number(event.target.value))}
          />
        </label>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <Chip label="Save/mo" value={`$${formatCurrency(savePerMonth)}`} tone="moss" stamped />
        <Chip label="Payback" value={`${paybackMonths.toFixed(1)} mo`} tone="wheat" />
        <Chip label="Year-1 ROI" value={`${Math.round(yearOneRoi * 100)}%`} tone="night" />
      </div>
    </div>
  );
}
