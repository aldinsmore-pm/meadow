const valueProps = [
  {
    title: "Get your time back without the complexity",
    description:
      "We show you exactly how many hours you'll save and what it will cost—no tech jargon, just clear numbers. You'll know if it makes sense before spending a penny.",
  },
  {
    title: "Works with the tools you already have",
    description:
      "From QuickBooks to whatever software runs your business, we build solutions that work with your existing setup. No ripping and replacing everything.",
  },
  {
    title: "Your team will actually use it",
    description:
      "We train your people and make the transition smooth. They'll feel supported and empowered, not threatened or confused.",
  },
];

export default function MeadowValueProps() {
  return (
    <section id="approach" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--meadow-primary)/0.2)] bg-[rgba(var(--meadow-muted)/0.8)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-primary))]">
            How we help
          </span>
          <h2 className="mt-6 text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
            Finally stop doing everything yourself
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.75)]">
            We find the tasks eating your time and help you solve them—starting with the biggest time-wasters first, so you can focus on growing your business.
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
