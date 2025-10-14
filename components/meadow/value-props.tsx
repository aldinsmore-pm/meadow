const valueProps = [
  {
    title: "See exactly what's stealing your life",
    description:
      "No more guessing which tasks waste the most time. We'll show you in dollars and hours exactly what each repetitive task costs you—so you know what to fix first.",
  },
  {
    title: "No expensive overhauls or months of implementation",
    description:
      "Works with QuickBooks, your spreadsheets, whatever you use today. No ripping out systems or spending six months on 'digital transformation.' Just fast relief.",
  },
  {
    title: "Zero resistance from your team",
    description:
      "Your staff won't fight this because we make it ridiculously simple. They'll wonder why you didn't do it sooner—because they get their time back too.",
  },
];

export default function MeadowValueProps() {
  return (
    <section id="approach" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center rounded-md border border-[rgba(var(--meadow-trust-blue)/0.3)] bg-[rgba(var(--meadow-warm)/0.8)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-trust-blue))]">
            How we help
          </span>
          <h2 className="heading-serif mt-6 text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
            Tired of being the bottleneck in your own business?
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.72)]">
            Every hour you spend on busywork is an hour you can't spend growing. We'll show you which tasks to automate first—the ones consuming most of your time—and help you fix them fast.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {valueProps.map((value) => (
            <div
              key={value.title}
              className="group relative overflow-hidden rounded-3xl border-2 border-[rgba(var(--meadow-primary)/0.12)] bg-white p-8 shadow-md transition hover:-translate-y-1 hover:border-[rgba(var(--meadow-primary)/0.35)]"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-[rgba(var(--meadow-accent)/0.15)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <h3 className="heading-serif text-xl font-semibold text-[rgb(var(--meadow-ink))]">{value.title}</h3>
              <p className="mt-3 text-[rgb(var(--meadow-ink)/0.72)]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
