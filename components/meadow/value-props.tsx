const valueProps = [
  {
    title: "Roadmaps stakeholders sign off on",
    description:
      "We translate AI hype into ops reality with quantified ROI models, risk mitigation plans, and rollout playbooks everyone can approve.",
  },
  {
    title: "Automations tuned for your stack",
    description:
      "From ERPs to vertical SaaS, we design LLM-powered workflows that snap into the tools your team already uses and govern access from day one.",
  },
  {
    title: "Change management baked in",
    description:
      "Enable adoption with training, QA loops, and human-in-the-loop guardrails so your ops team feels supported—not replaced.",
  },
];

export default function MeadowValueProps() {
  return (
    <section id="approach" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--meadow-primary)/0.2)] bg-[rgba(var(--meadow-muted)/0.8)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-primary))]">
            Why operators choose Meadow
          </span>
          <h2 className="mt-6 text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
            Your AI partner for pragmatic, measurable wins
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.75)]">
            Every engagement is designed to surface quick automation gains while building the governance that unlocks sustainable scale.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {valueProps.map((value) => (
            <div
              key={value.title}
              className="group relative overflow-hidden rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-[rgba(var(--meadow-primary)/0.3)]"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-[rgba(var(--meadow-accent)/0.15)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <h3 className="text-xl font-semibold text-[rgb(var(--meadow-ink))]">{value.title}</h3>
              <p className="mt-3 text-[rgb(var(--meadow-ink)/0.75)]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
