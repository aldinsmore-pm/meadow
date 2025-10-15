'use client'

import { useState } from 'react'
import { cn } from '@/utils/cn'
import type { FitItem } from '../lib/types'

export default function FitCards({ items }: { items: FitItem[] }) {
  const [view, setView] = useState<'proofs' | 'notFit'>('proofs')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2 rounded-full border border-slate-300 bg-fog p-1">
          {(
            [
              { value: 'proofs' as const, label: 'Proofs we look for' },
              { value: 'notFit' as const, label: 'Not a fit if…' }
            ] as const
          ).map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setView(option.value)}
              className={cn(
                'rounded-full px-4 py-2 text-sm transition',
                view === option.value ? 'bg-meadow-600 text-white shadow-card' : 'text-ink hover:bg-white'
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className="text-sm text-slate-700">Toggle to see what signals we look for before partnering.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="reveal rounded-2xl border border-slate-300 bg-fog p-6 shadow-card transition hover:shadow-lg"
          >
            <h3 className="font-serif text-xl text-ink">{item.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {(view === 'proofs' ? item.proofs : item.notFit).map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-meadow-600" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
