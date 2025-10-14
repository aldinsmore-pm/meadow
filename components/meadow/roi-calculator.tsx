"use client";

import { useMemo, useState } from "react";

type Inputs = {
  monthlyHours: number;
  hourlyCost: number;
  automationRate: number;
  buildCost: number;
  monthlyPlatform: number;
};

const presets: Array<{
  label: string;
  values: Inputs;
  description: string;
}> = [
  {
    label: "Accounting firm",
    description: "Invoice and billing work",
    values: {
      monthlyHours: 140,
      hourlyCost: 45,
      automationRate: 65,
      buildCost: 9500,
      monthlyPlatform: 1200,
    },
  },
  {
    label: "Freight company",
    description: "Shipment tracking and updates",
    values: {
      monthlyHours: 160,
      hourlyCost: 38,
      automationRate: 55,
      buildCost: 8000,
      monthlyPlatform: 950,
    },
  },
  {
    label: "Medical practice",
    description: "Insurance paperwork",
    values: {
      monthlyHours: 110,
      hourlyCost: 52,
      automationRate: 60,
      buildCost: 10500,
      monthlyPlatform: 1350,
    },
  },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value >= 1000 ? 0 : 2,
  }).format(value);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function MeadowRoiCalculator() {
  const [inputs, setInputs] = useState<Inputs>(presets[0].values);
  const [activePreset, setActivePreset] = useState<string>(presets[0].label);

  const { monthlySavings, netMonthlySavings, annualSavings, netAnnualValue, paybackMonths, roiPercent } = useMemo(() => {
    const monthlySavings = ((inputs.monthlyHours * inputs.automationRate) / 100) * inputs.hourlyCost;
    const netMonthlySavings = monthlySavings - inputs.monthlyPlatform;
    const annualSavings = monthlySavings * 12;
    const netAnnualValue = annualSavings - inputs.monthlyPlatform * 12;
    const totalYearOneCost = inputs.buildCost + inputs.monthlyPlatform * 12;
    const paybackMonths = monthlySavings > 0 ? (inputs.buildCost + inputs.monthlyPlatform) / monthlySavings : Infinity;
    const roiPercent = totalYearOneCost > 0 ? ((annualSavings - totalYearOneCost) / totalYearOneCost) * 100 : 0;
    return { monthlySavings, netMonthlySavings, annualSavings, netAnnualValue, paybackMonths, roiPercent };
  }, [inputs]);

  function handleChange(key: keyof Inputs, value: number) {
    setInputs((prev) => ({
      ...prev,
      [key]: Number.isFinite(value) ? value : prev[key],
    }));
    setActivePreset("custom");
  }

  return (
    <section className="bg-[rgba(var(--meadow-warm)/0.6)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center justify-center rounded-md border border-[rgba(var(--meadow-trust-blue)/0.25)] bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-trust-blue))]">
              See what you could save
            </span>
            <h2 className="heading-serif text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
              What's one repetitive task costing you right now?
            </h2>
            <p className="text-base text-[rgb(var(--meadow-ink)/0.7)]">
              Pick any soul-crushing task you do every week. Plug in the numbers below and watch the calculator show you exactly how much of your life you're wasting. Then imagine getting that time back.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => {
                    setInputs(preset.values);
                    setActivePreset(preset.label);
                  }}
                  className={`rounded-2xl border-2 px-4 py-4 text-left text-sm transition ${
                    activePreset === preset.label
                      ? "border-[rgba(var(--meadow-primary)/0.45)] bg-white text-[rgb(var(--meadow-ink))] shadow-md"
                      : "border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 text-[rgb(var(--meadow-ink)/0.75)] hover:border-[rgba(var(--meadow-primary)/0.3)] hover:bg-white"
                  }`}
                >
                  <p className="heading-serif text-base font-semibold text-[rgb(var(--meadow-ink))]">{preset.label}</p>
                  <p className="mt-1 text-xs text-[rgb(var(--meadow-ink)/0.6)]">{preset.description}</p>
                </button>
              ))}
            </div>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.65)]">
              {activePreset === "custom" ? (
                <>Using your numbers. Want us to run this with your exact data? Email <a className="font-semibold text-[rgb(var(--meadow-primary))]" href="mailto:roi@meadow.ai">roi@meadow.ai</a> before your session.</>
              ) : (
                <>Want us to calculate this with your real numbers? Email <a className="font-semibold text-[rgb(var(--meadow-primary))]" href="mailto:roi@meadow.ai">roi@meadow.ai</a> and we&rsquo;ll do it before the call.</>
              )}
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border-2 border-[rgba(var(--meadow-primary)/0.15)] bg-white shadow-md">
              <div className="border-b border-[rgba(var(--meadow-primary)/0.12)] bg-[rgba(var(--meadow-primary)/0.05)] px-6 py-4">
                <h3 className="heading-serif text-lg font-semibold text-[rgb(var(--meadow-ink))]">Tell us about the task</h3>
                <p className="text-xs text-[rgb(var(--meadow-ink)/0.6)]">Numbers stay private. This just helps us show you the real upside.</p>
              </div>
              <div className="overflow-hidden px-0 py-0">
                <table className="w-full text-sm text-[rgb(var(--meadow-ink)/0.8)]">
                  <tbody className="divide-y divide-[rgba(var(--meadow-primary)/0.1)]">
                    <tr className="bg-white/80">
                      <th scope="row" className="w-1/2 px-6 py-4 text-left font-semibold">Hours spent per month</th>
                      <td className="px-6 py-4">
                        <input
                          type="number"
                          min={0}
                          max={800}
                          value={inputs.monthlyHours}
                          onChange={(event) => handleChange("monthlyHours", clamp(Number(event.target.value), 0, 800))}
                          className="w-full rounded-md border-2 border-[rgba(var(--meadow-primary)/0.25)] bg-[rgba(255,255,255,0.9)] px-3 py-2 text-right font-mono text-base text-[rgb(var(--meadow-ink))] focus:border-[rgb(var(--meadow-trust-blue))] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--meadow-trust-blue)/0.25)]"
                        />
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <th scope="row" className="px-6 py-4 text-left font-semibold">Cost per hour (salary + overhead)</th>
                      <td className="px-6 py-4">
                        <input
                          type="number"
                          min={10}
                          max={150}
                          value={inputs.hourlyCost}
                          onChange={(event) => handleChange("hourlyCost", clamp(Number(event.target.value), 10, 150))}
                          className="w-full rounded-md border-2 border-[rgba(var(--meadow-primary)/0.25)] bg-[rgba(255,255,255,0.9)] px-3 py-2 text-right font-mono text-base text-[rgb(var(--meadow-ink))] focus:border-[rgb(var(--meadow-trust-blue))] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--meadow-trust-blue)/0.25)]"
                        />
                      </td>
                    </tr>
                    <tr className="bg-white/80">
                      <th scope="row" className="px-6 py-4 text-left font-semibold">% of work that could be automated</th>
                      <td className="px-6 py-4">
                        <input
                          type="number"
                          min={10}
                          max={90}
                          value={inputs.automationRate}
                          onChange={(event) => handleChange("automationRate", clamp(Number(event.target.value), 10, 90))}
                          className="w-full rounded-md border-2 border-[rgba(var(--meadow-primary)/0.25)] bg-[rgba(255,255,255,0.9)] px-3 py-2 text-right font-mono text-base text-[rgb(var(--meadow-ink))] focus:border-[rgb(var(--meadow-trust-blue))] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--meadow-trust-blue)/0.25)]"
                        />
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <th scope="row" className="px-6 py-4 text-left font-semibold">One-time setup cost</th>
                      <td className="px-6 py-4">
                        <input
                          type="number"
                          min={0}
                          max={20000}
                          value={inputs.buildCost}
                          onChange={(event) => handleChange("buildCost", clamp(Number(event.target.value), 0, 20000))}
                          className="w-full rounded-md border-2 border-[rgba(var(--meadow-primary)/0.25)] bg-[rgba(255,255,255,0.9)] px-3 py-2 text-right font-mono text-base text-[rgb(var(--meadow-ink))] focus:border-[rgb(var(--meadow-trust-blue))] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--meadow-trust-blue)/0.25)]"
                        />
                      </td>
                    </tr>
                    <tr className="bg-white/80">
                      <th scope="row" className="px-6 py-4 text-left font-semibold">Monthly maintenance cost</th>
                      <td className="px-6 py-4">
                        <input
                          type="number"
                          min={0}
                          max={5000}
                          value={inputs.monthlyPlatform}
                          onChange={(event) => handleChange("monthlyPlatform", clamp(Number(event.target.value), 0, 5000))}
                          className="w-full rounded-md border-2 border-[rgba(var(--meadow-primary)/0.25)] bg-[rgba(255,255,255,0.9)] px-3 py-2 text-right font-mono text-base text-[rgb(var(--meadow-ink))] focus:border-[rgb(var(--meadow-trust-blue))] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--meadow-trust-blue)/0.25)]"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-3xl border-2 border-[rgba(var(--meadow-primary)/0.15)] bg-white p-6 text-[rgb(var(--meadow-ink))] shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-primary))]">Projected impact</p>
                  <h3 className="heading-serif text-xl font-semibold">What you'll get back</h3>
                </div>
                <span className="inline-flex items-center rounded-full border border-[rgba(var(--meadow-primary)/0.2)] bg-[rgba(var(--meadow-primary)/0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-primary))]">
                  {activePreset === "custom" ? "Custom scenario" : `${activePreset} preset`}
                </span>
              </div>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[rgba(var(--meadow-primary)/0.15)] bg-[rgba(var(--meadow-warm)/0.6)] p-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-primary))]">You save each month</dt>
                  <dd className="heading-serif mt-2 text-3xl font-semibold text-[rgb(var(--meadow-primary-dark))]">{formatCurrency(monthlySavings)}</dd>
                </div>
                <div className="rounded-2xl border border-[rgba(var(--meadow-primary)/0.15)] bg-[rgba(var(--meadow-warm)/0.6)] p-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-primary))]">Net profit each month</dt>
                  <dd className="heading-serif mt-2 text-3xl font-semibold text-[rgb(var(--meadow-primary-dark))]">
                    {formatCurrency(netMonthlySavings)}
                  </dd>
                  <p className="mt-1 text-[0.75rem] text-[rgb(var(--meadow-ink)/0.6)]">After maintenance costs</p>
                </div>
                <div className="rounded-2xl border border-[rgba(var(--meadow-primary)/0.15)] bg-white p-5 sm:col-span-2">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-primary))]">Investment pays for itself in</dt>
                  <dd className="heading-serif mt-2 text-2xl font-semibold text-[rgb(var(--meadow-ink))]">
                    {Number.isFinite(paybackMonths) ? `${paybackMonths.toFixed(1)} months` : "Enter your numbers above"}
                  </dd>
                  <p className="mt-2 text-xs text-[rgb(var(--meadow-ink)/0.65)]">
                    Includes setup cost and first month of maintenance.
                  </p>
                </div>
                <div className="rounded-2xl border border-[rgba(var(--meadow-primary)/0.15)] bg-white p-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-primary))]">Return in year one</dt>
                  <dd className="heading-serif mt-2 text-3xl font-semibold text-[rgb(var(--meadow-primary-dark))]">{Number.isFinite(roiPercent) ? `${roiPercent.toFixed(0)}%` : "—"}</dd>
                </div>
                <div className="rounded-2xl border border-[rgba(var(--meadow-primary)/0.15)] bg-white p-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-primary))]">Total saved first year</dt>
                  <dd className="heading-serif mt-2 text-2xl font-semibold text-[rgb(var(--meadow-ink))]">{formatCurrency(netAnnualValue)}</dd>
                </div>
              </dl>
              <a
                href="#book-ai-roadmap"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md border-2 border-[rgb(var(--meadow-primary-dark))] bg-[rgb(var(--meadow-primary))] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[rgba(var(--meadow-primary-dark)/0.25)] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--meadow-primary-dark))]"
              >
                Walk through this during your free Time-Back Plan
              </a>
              <p className="mt-3 text-xs text-[rgb(var(--meadow-ink)/0.6)]">
                These numbers compare your time savings to setup and maintenance costs over 12 months. We'll review the math during your session so you can pressure-test every assumption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
