import Chip from '../components/chips/Chip'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import { testimonialItems } from '../lib/copy'

export default function Testimonials() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <p className="reveal text-sm uppercase tracking-[0.3em] text-slate-700">Testimonials</p>
          <h2 className="reveal mt-2 font-serif text-3xl text-ink sm:text-4xl">Operators who ship with Meadow go home on time.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonialItems.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="reveal rounded-2xl border border-slate-300 bg-fog p-6 shadow-card transition hover:shadow-lg"
            >
              <blockquote className="text-lg text-ink">{testimonial.quote}</blockquote>
              <figcaption className="mt-4 space-y-2">
                <p className="text-sm text-slate-700">{testimonial.name}</p>
                {testimonial.stamp && <Chip label="Engagement" value={testimonial.stamp} tone="stamped" />}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}
