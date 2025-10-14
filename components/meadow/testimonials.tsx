const testimonials = [
  {
    quote:
      "I was missing my kids' bedtimes every night, buried in invoices. Three weeks after our first call, I left work at 5pm and the invoices still got done. I cried when I realized I'd been torturing myself for nothing.",
    author: "Sasha Patel",
    role: "Owner, BrightLedger Accounting",
  },
  {
    quote:
      "My staff were burned out from paperwork and threatening to quit. Now they actually smile when prior auths come in because the system handles it. Best $18k I ever spent—saved three resignations.",
    author: "Jamal Rivers",
    role: "Owner, Atlas Clinics",
  },
  {
    quote:
      "I was checking shipment updates at midnight, weekends, even on vacation. My wife said she'd had enough. Now the system watches everything and I only get pinged for real problems. Marriage saved.",
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
            "I was on the edge of burnout. Now I'm not."
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.75)]">
            These owners were at breaking point—exhausted, stressed, relationships suffering. Here's what they say about life after getting their time back.
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
