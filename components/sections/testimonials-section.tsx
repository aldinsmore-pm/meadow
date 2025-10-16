import { Chip } from "../ui/chip";

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  investment: string;
  duration: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="space-y-6" data-reveal data-reveal-delay="120">
      <div>
        <h2 className="text-3xl font-serif text-ink">Owners on Meadow</h2>
        <p className="mt-2 max-w-2xl text-slate-700">
          A handful of the 30% of applicants we accept each year. Results compound because we deliver with your team, not to them.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <figure
            key={testimonial.name}
            className="rounded-2xl border border-slate-300 bg-white p-6 shadow-card"
            data-reveal
            data-reveal-delay={200 + index * 80}
          >
            <blockquote className="text-lg italic leading-snug text-ink">“{testimonial.quote}”</blockquote>
            <figcaption className="mt-4 space-y-2 text-sm text-slate-700">
              <div className="font-semibold text-ink">{testimonial.name}</div>
              <div>
                {testimonial.title} · {testimonial.company}
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip label="Investment" value={testimonial.investment} stamped />
                <Chip label="Duration" value={testimonial.duration} />
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
