import { Chip } from "./chip";

export type Step = { title: string; goal: string; receipt: string };

interface ProcessStepperProps {
  steps: Step[];
}

export function ProcessStepper({ steps }: ProcessStepperProps) {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="rounded-2xl border border-slate-300 bg-white p-5 shadow-card"
          data-reveal
          data-reveal-delay={120 + index * 80}
        >
          <div className="text-5xl font-serif leading-none text-meadow-700">{index + 1}</div>
          <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
          <p className="text-sm text-slate-700">{step.goal}</p>
          <div className="mt-3">
            <Chip label="Receipt" value={step.receipt} stamped />
          </div>
        </li>
      ))}
    </ol>
  );
}
