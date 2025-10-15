const testimonials = [
  {
    quote:
      "I was missing my kids' bedtimes every night, buried in invoices. Three weeks after our first call, I left work at 5pm and the invoices still got done. I cried when I realized I'd been torturing myself for nothing.",
    author: "Sasha Patel",
    role: "Owner, BrightLedger Accounting",
    location: "Austin, TX",
    engagement: "6-month engagement • Accounting automation • $18K investment",
    rating: 5,
  },
  {
    quote:
      "My staff were burned out from paperwork and threatening to quit. Now they actually smile when prior auths come in because the system handles it. Best $18k I ever spent—saved three resignations.",
    author: "Jamal Rivers",
    role: "Owner, Atlas Clinics",
    location: "Denver, CO",
    engagement: "9-month engagement • Healthcare workflow automation • $34K investment",
    rating: 5,
  },
  {
    quote:
      "I was checking shipment updates at midnight, weekends, even on vacation. My wife said she'd had enough. Now the system watches everything and I only get pinged for real problems. Marriage saved.",
    author: "Laura Kim",
    role: "Owner, Fieldstone Logistics",
    location: "Memphis, TN",
    engagement: "12-month engagement • Logistics monitoring system • $28K investment",
    rating: 5,
  },
];

export default function MeadowTestimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center rounded-md border border-[rgba(var(--meadow-trust-blue)/0.3)] bg-[rgba(var(--meadow-warm)/0.8)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--meadow-trust-blue))]">
            What Partners Say
          </span>
          <h2 className="heading-serif mt-6 text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
            "I was on the edge of burnout. Now I'm not."
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.7)]">
            These business owners went through our discovery process, committed to a multi-month engagement, and scaled their operations. Here's what that looked like.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex h-full flex-col justify-between gap-6 rounded-3xl border-2 border-[rgba(var(--meadow-primary)/0.12)] bg-white p-8 text-left shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[rgb(var(--meadow-primary))]">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <span key={`${testimonial.author}-star-${index}`} className="text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="border-l-4 border-[rgba(var(--meadow-primary)/0.2)] pl-4 text-[rgb(var(--meadow-ink)/0.8)]">
                  “{testimonial.quote}”
                </blockquote>
              </div>
              <figcaption className="text-sm font-semibold text-[rgb(var(--meadow-ink))]">
                {testimonial.author}
                <span className="block text-xs font-normal uppercase tracking-wide text-[rgb(var(--meadow-ink)/0.6)]">
                  {testimonial.role} • {testimonial.location}
                </span>
                <span className="mt-2 block text-[0.7rem] leading-relaxed text-[rgb(var(--meadow-ink)/0.5)]">
                  {testimonial.engagement}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-[rgba(var(--meadow-warm)/0.6)] p-6 text-center text-sm text-[rgb(var(--meadow-ink)/0.68)]">
          <p>
            Wondering if this is right for you? Email <a className="font-semibold text-[rgb(var(--meadow-primary))]" href="mailto:hello@meadow.ai">hello@meadow.ai</a> and we'll have a brief conversation about fit before you apply—no pressure, just clarity.
          </p>
        </div>
      </div>
    </section>
  );
}
