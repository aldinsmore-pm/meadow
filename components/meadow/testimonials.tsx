const testimonials = [
  {
    quote:
      "I was drowning in invoices and follow-ups. Meadow showed me exactly what was eating my time and helped us fix it. Now I actually have evenings with my family again.",
    author: "Sasha Patel",
    role: "Owner, BrightLedger Accounting",
  },
  {
    quote:
      "Instead of just talking about it, they actually helped us get it done in 3 weeks. My team uses it every day and it just works.",
    author: "Jamal Rivers",
    role: "Owner, Atlas Clinics",
  },
  {
    quote:
      "I finally stopped living in spreadsheets. The ROI calculator helped me see it was worth it, and the plan made it easy to get started.",
    author: "Laura Kim",
    role: "Owner, Fieldstone Logistics",
  },
];

export default function MeadowTestimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
            What business owners say
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.75)]">
            Real stories from small business owners who got their time back and can finally focus on growing their business.
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
