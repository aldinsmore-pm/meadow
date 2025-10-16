import { ProcessStepper, Step } from "../ui/process-stepper";

interface ProcessSectionProps {
  steps: Step[];
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section className="space-y-4" data-aos="fade-up" data-aos-delay="80">
      <div>
        <h2 className="text-3xl font-serif text-ink">How partnership unfolds</h2>
        <p className="mt-2 max-w-2xl text-slate-700">
          We build shoulder-to-shoulder with your operators so the automations stick long after handoff.
        </p>
      </div>
      <ProcessStepper steps={steps} />
    </section>
  );
}
