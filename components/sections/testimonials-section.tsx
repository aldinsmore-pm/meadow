import { Chip } from "../ui/chip";
import { SectionSurface } from "../ui/section-surface";

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
    <SectionSurface
      variant="night"
      className="p-6 md:p-8"
      innerClassName="space-y-6"
      data-reveal
      data-reveal-delay="120"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/70">Owner results</p>
        <h2 className="mt-2 text-3xl font-serif text-linen">Owners on Meadow</h2>
        <p className="mt-2 max-w-2xl text-sm text-linen/80">
          A handful of the 30% of applicants we accept each year. Results compound because we deliver with your team, not to them.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <figure
            key={testimonial.name}
            className="rounded-2xl border border-white/12 bg-white/5 p-6 shadow-night backdrop-blur"
            data-reveal
            data-reveal-delay={200 + index * 80}
          >
            <blockquote className="text-lg italic leading-snug text-linen">“{testimonial.quote}”</blockquote>
            <figcaption className="mt-4 space-y-2 text-sm text-linen/80">
              <div className="font-semibold text-linen">{testimonial.name}</div>
              <div>
                {testimonial.title} · {testimonial.company}
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip label="Investment" value={testimonial.investment} stamped tone="night" />
                <Chip label="Duration" value={testimonial.duration} tone="night" />
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionSurface>
  );
}
