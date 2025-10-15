const valueProps = [
  {
    title: "You have complex workflows worth systematizing",
    description:
      "We're built for businesses doing $2M-$20M in revenue with repetitive processes that are eating 15+ hours per week. If you're earlier stage or have simple needs, there are better (cheaper) options out there.",
  },
  {
    title: "Your team is open to changing how they work",
    description:
      "Automation only works if people actually use it. We need your team willing to adapt processes—not just leadership buy-in, but actual operational buy-in.",
  },
  {
    title: "You're ready to invest for 12-18 month ROI",
    description:
      "Most partners break even in 6-9 months and hit 3-5x ROI by month 18. If you need immediate payback or are stretched financially, this isn't the right time.",
  },
];

export default function MeadowValueProps() {
  return (
    <section id="approach" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center rounded-md border border-[rgba(var(--meadow-trust-blue)/0.3)] bg-[rgba(var(--meadow-warm)/0.8)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-trust-blue))]">
            Who We Work With
          </span>
          <h2 className="heading-serif mt-6 text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
            We're selective about partnerships—here's what makes a great fit
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.72)]">
            We work closely with your team for months, not weeks. These three criteria help us determine if we can deliver the results you're looking for.
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
