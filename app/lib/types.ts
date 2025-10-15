export type KPI = { label: string; value: string; unit?: string }

export type CaseStudy = {
  id: string
  headline: string
  subtitle: string
  kpis: KPI[]
  stack: string[]
  changeBullet: string
  quote?: string
}

export type FitItem = { title: string; proofs: string[]; notFit: string[] }

export type FAQItem = { id: string; q: string; a: string }
