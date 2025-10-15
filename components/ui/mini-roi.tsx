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
    <div className="rounded-2xl border border-slate-300 bg-white p-5 shadow-card">
      <div className="grid items-end gap-3 md:grid-cols-3">
        <label className="text-sm text-ink">
          Hours/week
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus-ring"
            value={hoursPerWeek}
            min={0}
            onChange={(event) => setHoursPerWeek(Number(event.target.value))}
          />
        </label>
        <label className="text-sm text-ink">
          Hourly rate
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus-ring"
            value={hourlyRate}
            min={0}
            onChange={(event) => setHourlyRate(Number(event.target.value))}
          />
        </label>
        <label className="text-sm text-ink">
          Investment
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus-ring"
            value={investment}
            min={0}
            onChange={(event) => setInvestment(Number(event.target.value))}
          />
        </label>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <Chip label="Save/mo" value={`$${formatCurrency(savePerMonth)}`} />
        <Chip label="Payback" value={`${paybackMonths.toFixed(1)} mo`} />
        <Chip label="Year-1 ROI" value={`${Math.round(yearOneRoi * 100)}%`} />
      </div>
    </div>
  );
}
