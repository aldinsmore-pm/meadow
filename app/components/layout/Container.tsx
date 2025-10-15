import type { HTMLAttributes } from 'react'

export default function Container({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  const classes = ['mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className].filter(Boolean).join(' ')
  return <div className={classes} {...props} />
}
