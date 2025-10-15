import Image from 'next/image'
import Button from '../components/buttons/Button'
import Chip from '../components/chips/Chip'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import { heroChips, heroCopy } from '../lib/copy'

export default function Hero() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr),340px]">
          <div className="space-y-6">
            <p className="reveal text-sm uppercase tracking-[0.3em] text-slate-700">{heroCopy.tagline}</p>
            <h1 className="reveal font-serif text-4xl leading-tight text-ink sm:text-5xl">{heroCopy.title}</h1>
            <p className="reveal max-w-2xl text-lg text-slate-700">{heroCopy.subtitle}</p>
            <div className="reveal flex flex-wrap items-center gap-3">
              <Button size="lg">{heroCopy.primaryCta}</Button>
              <Button variant="ghost" size="lg">
                {heroCopy.secondaryCta}
              </Button>
            </div>
            <div className="reveal flex flex-wrap gap-3">
              {heroChips.map((chip) => (
                <Chip key={chip.label} label={chip.label} value={chip.value} tone="stamped" />
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[320px] w-[320px] overflow-hidden rounded-3xl border border-slate-300 bg-fog shadow-card">
              <Image
                src="/tokens/stamp-partner.svg"
                alt="Meadow partner stamp"
                fill
                className="object-contain p-12"
                sizes="(max-width: 1024px) 240px, 320px"
                priority
              />
              <Image
                src="/tokens/ledger-lines.svg"
                alt="Ledger lines"
                width={320}
                height={320}
                className="pointer-events-none absolute inset-0 opacity-40"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
