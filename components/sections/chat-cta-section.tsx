import Link from "next/link";

import { SectionSurface } from "../ui/section-surface";

const prompts = [
  {
    title: "Find the hidden drains",
    description: "Answer a few questions about your team’s weekly workflow. We’ll flag the top three automation candidates.",
  },
  {
    title: "Preview savings",
    description: "Drop in one task that’s eating nights and weekends. Get an estimated payback window before the call.",
  },
  {
    title: "Share with stakeholders",
    description: "Turn the results into a short summary for your finance or ops lead so everyone shows up aligned.",
  },
];

const promptVariants = [
  "border-slate-300/70 bg-white/95 shadow-card",
  "border-ember/25 bg-parchment/85 shadow-ledger",
  "border-moss-200/70 bg-tide/75 shadow-soft",
];

export function ChatCtaSection() {
  return (
    <SectionSurface
      variant="grain"
      className="p-8 md:p-10"
      innerClassName="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center"
      data-reveal
      data-reveal-delay="140"
    >
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-meadow-700/80">Self-serve assessment</p>
        <h3 className="font-serif text-2xl text-ink md:text-3xl">Prefer to explore before scheduling?</h3>
        <p className="text-sm text-slate-700/90">
          Use the Meadow assessment to audit your workflows. If we see a path to meaningful ROI, we’ll follow up with next steps.
        </p>
        <Link
          href="#apply"
          className="inline-flex w-fit items-center justify-center rounded-full bg-meadow-600 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-meadow-700"
        >
          Begin workflow assessment
        </Link>
      </div>

      <div className="space-y-4">
        {prompts.map((prompt, index) => {
          const variant = promptVariants[index % promptVariants.length];
          const accent = index === 2 ? "bg-meadow-600/15 text-meadow-700" : "bg-meadow-600/12 text-meadow-700";

          return (
            <div
              key={prompt.title}
              className={`rounded-2xl border p-5 backdrop-blur ${variant}`}
              data-reveal
              data-reveal-delay={200 + index * 80}
              data-reveal-from="right"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-serif text-lg text-ink">{prompt.title}</h4>
                  <p className="mt-2 text-sm text-slate-700/90">{prompt.description}</p>
                </div>
                <span className={`inline-flex h-9 w-9 flex-none items-center justify-center rounded-full font-semibold ${accent}`}>
                  →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </SectionSurface>
  );
}
