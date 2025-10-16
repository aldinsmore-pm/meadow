import { Chip } from "./chip";

export type Step = { title: string; goal: string; receipt: string };

interface ProcessStepperProps {
  steps: Step[];
}

export function ProcessStepper({ steps }: ProcessStepperProps) {
  const cards = [
    {
      wrapper: "border-slate-300 bg-white text-ink shadow-card",
      label: "text-meadow-700",
      chipTone: "moss" as const,
    },
    {
      wrapper: "border-ember/25 bg-parchment/90 text-ink shadow-ledger",
      label: "text-ember",
      chipTone: "wheat" as const,
    },
    {
      wrapper: "border-transparent bg-dusk/95 text-linen shadow-night",
      label: "text-gold",
      chipTone: "night" as const,
    },
  ];

  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {steps.map((step, index) => {
        const palette = cards[index % cards.length];
        const goalClass = palette.wrapper.includes("bg-dusk") ? "text-linen/80" : "text-slate-700";

        return (
          <li
            key={step.title}
            className={`rounded-2xl border p-5 ${palette.wrapper}`}
            data-reveal
            data-reveal-delay={120 + index * 80}
          >
            <div className={`text-5xl font-serif leading-none ${palette.label}`}>{index + 1}</div>
            <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
            <p className={`text-sm ${goalClass}`}>{step.goal}</p>
            <div className="mt-3">
              <Chip label="Receipt" value={step.receipt} stamped tone={palette.chipTone} />
            </div>
          </li>
        );
      })}
    </ol>
  );
}
