'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isReducedMotion) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return null
}
