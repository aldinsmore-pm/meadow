const testimonials = [
  {
    quote:
      "Meadow helped us identify automations that saved 320 labor hours in the first quarter. Their roadmap meant finance and compliance signed off immediately.",
    author: "Sasha Patel",
    role: "COO, BrightLedger Accounting",
  },
  {
    quote:
      "Instead of another AI workshop, Meadow embedded with our ops leads and shipped a working pilot in 3 weeks. Adoption is now above 80%.",
    author: "Jamal Rivers",
    role: "Director of Operations, Atlas Clinics",
  },
  {
    quote:
      "We finally have a governed way to evaluate AI bets. The ROI calculator and change plan gave our board confidence to invest.",
    author: "Laura Kim",
    role: "VP Operations, Fieldstone Logistics",
  },
];

export default function MeadowTestimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
            Trusted by operators shipping AI automations
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.75)]">
            Every engagement ends with a repeatable playbook, not just insights. Here’s what leaders say about working with Meadow.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-8 text-left shadow-sm backdrop-blur"
            >
              <blockquote className="text-[rgb(var(--meadow-ink)/0.8)]">“{testimonial.quote}”</blockquote>
              <figcaption className="text-sm font-semibold text-[rgb(var(--meadow-ink))]">
                {testimonial.author}
                <span className="block text-xs font-normal uppercase tracking-wide text-[rgb(var(--meadow-ink)/0.6)]">
                  {testimonial.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
