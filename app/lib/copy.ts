import type { FAQItem } from './types'

export const heroCopy = {
  tagline: 'Practical AI for operators',
  title: 'Stop working until 9pm.',
  subtitle:
    "We embed with your team for 6–9 months to eliminate the repetitive work stealing your evenings. Operators stay focused on decisions while Meadow handles the automations.",
  primaryCta: 'Apply to partner',
  secondaryCta: "See if you're a fit"
}

export const heroChips = [
  { label: 'Average hours returned', value: '22 /wk' },
  { label: 'Engagement length', value: '6–9 mo' },
  { label: 'Acceptance rate', value: '~30%' }
]

export const summaryItems = [
  { label: 'Selective partners', value: '~30%' },
  { label: 'Embedded with operators', value: 'Daily standups' },
  { label: 'ROI in months', value: '12–18 mo compounding' }
]

export const processSteps = [
  {
    title: 'Discovery',
    goal: 'Document the hidden manual loops wasting operator time.',
    receipt: 'Delivered: Current state map + automation backlog.'
  },
  {
    title: 'Build',
    goal: 'Ship the flows, bots, and integrations that remove the work.',
    receipt: 'Delivered: Weekly drops with recorded loom walkthroughs.'
  },
  {
    title: 'Optimize',
    goal: 'Tighten accuracy, expand coverage, and upskill the team.',
    receipt: 'Delivered: 30/60/90 operational scorecard + playbooks.'
  }
]

export const faqItems: FAQItem[] = [
  {
    id: 'fit',
    q: 'Who is the Meadow partnership designed for?',
    a: 'Operators at $2M–$20M revenue companies who feel the pain of after-hours catch up. You have data living in SaaS tools, manual exports, and scattered approvals that are ready for structured automation.'
  },
  {
    id: 'team',
    q: 'What does the embedded team look like?',
    a: 'Two Meadow builders embed with your ops and finance leads. We run daily async standups, own the automation roadmap, and ship improvements weekly with transparent metrics.'
  },
  {
    id: 'investment',
    q: 'How much does it cost?',
    a: 'Engagements range from $14K–$24K per month depending on scope. Most teams break even in under 4 months and compound savings from there.'
  },
  {
    id: 'handoff',
    q: 'What happens after the 6–9 months?',
    a: 'We train your internal operators, hand off playbooks, and leave behind maintained automations plus dashboards that track the new capacity you have unlocked.'
  },
  {
    id: 'data',
    q: 'How does Meadow handle sensitive data?',
    a: 'We work with your existing security reviews, limit access through service accounts, and design automations to respect role-based permissions. No data is used for model training beyond your engagement.'
  },
  {
    id: 'start',
    q: 'How quickly can we begin?',
    a: 'Once accepted, we kick off within two weeks. Discovery starts immediately with existing documentation, recordings, and live process shadowing.'
  }
]

export const testimonialItems = [
  {
    quote: '“We reclaimed 120 operator hours in the first quarter alone.”',
    name: 'COO, BrightLedger',
    stamp: '$18K · 6 months'
  },
  {
    quote: '“The nightly backlog vanished. Our team leaves on time again.”',
    name: 'Head of Ops, ParcelPath',
    stamp: '$22K · 7 months'
  }
]

export const applyCopy = {
  title: 'Ready to reclaim your evenings?',
  body:
    'Tell us about the manual loops slowing your team down. We review every application and respond within three business days.',
  primaryCta: 'Apply to partner'
}
