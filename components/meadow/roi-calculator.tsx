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
    label: "Finance ops",
    description: "120 invoices / month, $45 blended rate",
    values: {
      monthlyHours: 140,
      hourlyCost: 45,
      automationRate: 65,
      buildCost: 9500,
      monthlyPlatform: 1200,
    },
  },
  {
    label: "Logistics",
    description: "80 shipments / week, $38 blended rate",
    values: {
      monthlyHours: 160,
      hourlyCost: 38,
      automationRate: 55,
      buildCost: 8000,
      monthlyPlatform: 950,
    },
  },
  {
    label: "Healthcare",
    description: "Prior auth queue with $52 RN support",
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
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--meadow-primary)/0.2)] bg-[rgba(var(--meadow-muted)/0.8)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-primary))]">
              Model ROI in minutes
            </span>
            <h2 className="text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
              Forecast savings before you commit to a build
            </h2>
            <p className="text-base text-[rgb(var(--meadow-ink)/0.75)]">
              Adjust the levers below to estimate labor savings, payback period, and first-year ROI for your top automation candidate. We walk through the same math during the free AI Game Plan (Roadmap) so you know the upside before you build.
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
                  className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                    activePreset === preset.label
                      ? "border-[rgba(var(--meadow-primary)/0.4)] bg-[rgba(var(--meadow-accent)/0.3)] text-[rgb(var(--meadow-ink))]"
                      : "border-[rgba(var(--meadow-primary)/0.15)] bg-white/70 text-[rgb(var(--meadow-ink)/0.75)] hover:border-[rgba(var(--meadow-primary)/0.3)] hover:text-[rgb(var(--meadow-ink))]"
                  }`}
                >
                  <p className="text-sm font-semibold text-[rgb(var(--meadow-ink))]">{preset.label}</p>
                  <p className="text-xs text-[rgb(var(--meadow-ink)/0.65)]">{preset.description}</p>
                </button>
              ))}
            </div>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.65)]">
              {activePreset === "custom" ? (
                <>Using custom assumptions. Email <a className="font-semibold text-[rgb(var(--meadow-primary))]" href="mailto:roi@meadow.ai">roi@meadow.ai</a> to preload your exact numbers before the Game Plan.</>
              ) : (
                <>Want us to run the numbers with your actual data? Email <a className="font-semibold text-[rgb(var(--meadow-primary))]" href="mailto:roi@meadow.ai">roi@meadow.ai</a> and we&rsquo;ll preload it before the call.</>
              )}
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/80 p-6 shadow-sm backdrop-blur">
              <h3 className="text-lg font-semibold text-[rgb(var(--meadow-ink))]">Automation inputs</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-[rgb(var(--meadow-ink)/0.75)]">
                  <span>Monthly manual hours</span>
                  <input
                    type="number"
                    min={0}
                    max={800}
                    value={inputs.monthlyHours}
                    onChange={(event) => handleChange("monthlyHours", clamp(Number(event.target.value), 0, 800))}
                    className="w-full rounded-2xl border border-[rgba(var(--meadow-primary)/0.2)] bg-white/70 px-3 py-2 text-[rgb(var(--meadow-ink))] focus:border-[rgba(var(--meadow-primary)/0.5)] focus:outline-none"
                  />
                </label>
                <label className="space-y-2 text-sm text-[rgb(var(--meadow-ink)/0.75)]">
                  <span>Blended hourly cost (USD)</span>
                  <input
                    type="number"
                    min={10}
                    max={150}
                    value={inputs.hourlyCost}
                    onChange={(event) => handleChange("hourlyCost", clamp(Number(event.target.value), 10, 150))}
                    className="w-full rounded-2xl border border-[rgba(var(--meadow-primary)/0.2)] bg-white/70 px-3 py-2 text-[rgb(var(--meadow-ink))] focus:border-[rgba(var(--meadow-primary)/0.5)] focus:outline-none"
                  />
                </label>
                <label className="space-y-2 text-sm text-[rgb(var(--meadow-ink)/0.75)]">
                  <span>% of work Meadow can automate</span>
                  <input
                    type="number"
                    min={10}
                    max={90}
                    value={inputs.automationRate}
                    onChange={(event) => handleChange("automationRate", clamp(Number(event.target.value), 10, 90))}
                    className="w-full rounded-2xl border border-[rgba(var(--meadow-primary)/0.2)] bg-white/70 px-3 py-2 text-[rgb(var(--meadow-ink))] focus:border-[rgba(var(--meadow-primary)/0.5)] focus:outline-none"
                  />
                </label>
                <label className="space-y-2 text-sm text-[rgb(var(--meadow-ink)/0.75)]">
                  <span>One-time build investment</span>
                  <input
                    type="number"
                    min={0}
                    max={20000}
                    value={inputs.buildCost}
                    onChange={(event) => handleChange("buildCost", clamp(Number(event.target.value), 0, 20000))}
                    className="w-full rounded-2xl border border-[rgba(var(--meadow-primary)/0.2)] bg-white/70 px-3 py-2 text-[rgb(var(--meadow-ink))] focus:border-[rgba(var(--meadow-primary)/0.5)] focus:outline-none"
                  />
                </label>
                <label className="space-y-2 text-sm text-[rgb(var(--meadow-ink)/0.75)] sm:col-span-2">
                  <span>Ongoing platform &amp; QA (monthly)</span>
                  <input
                    type="number"
                    min={0}
                    max={5000}
                    value={inputs.monthlyPlatform}
                    onChange={(event) => handleChange("monthlyPlatform", clamp(Number(event.target.value), 0, 5000))}
                    className="w-full rounded-2xl border border-[rgba(var(--meadow-primary)/0.2)] bg-white/70 px-3 py-2 text-[rgb(var(--meadow-ink))] focus:border-[rgba(var(--meadow-primary)/0.5)] focus:outline-none"
                  />
                </label>
              </div>
            </div>

            <div className="rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-[rgba(var(--meadow-primary)/0.08)] p-6 text-[rgb(var(--meadow-ink))] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">Projected impact</h3>
                <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-primary))]">
                  {activePreset === "custom" ? "Custom scenario" : `${activePreset} preset`}
                </span>
              </div>
              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/70 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-ink)/0.6)]">Monthly labor savings</dt>
                  <dd className="mt-1 text-2xl font-semibold text-[rgb(var(--meadow-primary))]">{formatCurrency(monthlySavings)}</dd>
                </div>
                <div className="rounded-2xl bg-white/70 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-ink)/0.6)]">Net monthly impact</dt>
                  <dd className="mt-1 text-2xl font-semibold text-[rgb(var(--meadow-primary))]">
                    {formatCurrency(netMonthlySavings)}
                  </dd>
                  <p className="mt-1 text-[0.7rem] text-[rgb(var(--meadow-ink)/0.6)]">After platform &amp; QA costs</p>
                </div>
                <div className="rounded-2xl bg-white/70 p-4 sm:col-span-2">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-ink)/0.6)]">Payback period</dt>
                  <dd className="mt-1 text-xl font-semibold text-[rgb(var(--meadow-ink))]">
                    {Number.isFinite(paybackMonths) ? `${paybackMonths.toFixed(1)} months` : "Add savings inputs"}
                  </dd>
                  <p className="mt-2 text-xs text-[rgb(var(--meadow-ink)/0.65)]">
                    Includes automation build and the first month of platform &amp; QA.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/70 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-ink)/0.6)]">Year-one ROI</dt>
                  <dd className="mt-1 text-2xl font-semibold text-[rgb(var(--meadow-primary))]">{Number.isFinite(roiPercent) ? `${roiPercent.toFixed(0)}%` : "—"}</dd>
                </div>
                <div className="rounded-2xl bg-white/70 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-ink)/0.6)]">Net value year one</dt>
                  <dd className="mt-1 text-xl font-semibold text-[rgb(var(--meadow-ink))]">{formatCurrency(netAnnualValue)}</dd>
                </div>
              </dl>
              <a
                href="#book-ai-roadmap"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[rgb(var(--meadow-primary))] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[rgb(var(--meadow-primary))]/90"
              >
                Walk through this in the free Game Plan
              </a>
              <p className="mt-3 text-[0.7rem] text-[rgb(var(--meadow-ink)/0.55)]">
                ROI reflects labor savings vs. build plus 12 months of platform &amp; QA support. Adjust the sliders to pressure-test assumptions before the Game Plan session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
