import type { HTMLAttributes } from 'react'

export default function Section({ className = '', ...props }: HTMLAttributes<HTMLElement>) {
  const classes = ['py-16 sm:py-20', className].filter(Boolean).join(' ')
  return <section className={classes} {...props} />
}
