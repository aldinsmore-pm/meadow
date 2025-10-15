'use client'

import { useEffect, useMemo, useState } from 'react'
import type { FAQItem } from '../../lib/types'

export default function FAQTwoPane({ items }: { items: FAQItem[] }) {
  const ids = useMemo(() => items.map((item) => item.id), [items])
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    if (!active) return
    history.replaceState(null, '', `#${active}`)
  }, [active])

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && ids.includes(hash)) {
      setActive(hash)
    }
  }, [ids])

  return (
    <div className="grid gap-10 md:grid-cols-[220px,1fr]">
      <nav className="sticky top-24 hidden flex-col gap-2 md:flex">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            className={`rounded-xl px-4 py-2 text-left text-sm transition ${
              active === item.id
                ? 'bg-meadow-600 text-white shadow-card'
                : 'bg-fog text-ink hover:bg-white'
            }`}
          >
            {item.q}
          </button>
        ))}
      </nav>

      <div className="space-y-6">
        <div className="md:hidden">
          <dl className="space-y-4">
            {items.map((item) => (
              <details key={item.id} className="rounded-2xl border border-slate-300 bg-fog p-4">
                <summary className="cursor-pointer font-medium text-ink">{item.q}</summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </dl>
        </div>

        <div className="hidden md:block">
          {items.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className={`reveal rounded-2xl border border-slate-300 bg-fog p-6 shadow-card transition ${
                active === item.id ? 'block' : 'hidden'
              }`}
            >
              <h3 className="font-serif text-2xl text-ink">{item.q}</h3>
              <p className="mt-3 text-slate-700">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
