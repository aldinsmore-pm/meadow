const valueProps = [
  {
    title: "Plans owners and managers can say yes to",
    description:
      "We turn vague AI ideas into simple numbers: hours saved, cost to build, and when it pays back. Everyone sees the upside before you spend a dollar.",
  },
  {
    title: "Automations that plug into what you already use",
    description:
      "From QuickBooks to industry-specific tools, we design workflows that sit on top of your current systems and keep data access locked down from day one.",
  },
  {
    title: "People-first rollout support",
    description:
      "We handle training, quality checks, and the human hand-offs so your team feels supported—not replaced—when the automation goes live.",
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
            Your AI partner for real savings and smoother days
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.75)]">
            Every project is scoped to cut obvious pain first, then set you up to keep improving without needing a full-time AI hire.
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
