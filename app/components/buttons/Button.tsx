import { cloneElement, isValidElement } from 'react'
import type { ButtonHTMLAttributes, ReactElement } from 'react'
import { cn } from '@/utils/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'md' | 'lg'
  stamp?: boolean
  children: ReactElement | ButtonHTMLAttributes<HTMLButtonElement>['children']
}

export default function Button({
  asChild,
  className,
  variant = 'primary',
  size = 'md',
  stamp,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-meadow-600 focus-visible:ring-offset-2 focus-visible:ring-offset-fog',
    size === 'lg' ? 'px-5 py-3 text-base' : 'px-4 py-2.5 text-sm',
    variant === 'primary' &&
      'bg-meadow-600 text-white shadow-card hover:-translate-y-[1px] hover:shadow-lg active:translate-y-0 active:shadow-press',
    variant === 'secondary' && 'bg-ink text-fog shadow-card hover:-translate-y-[1px] hover:shadow-lg active:shadow-press',
    variant === 'ghost' && 'border border-slate-300 bg-fog text-ink hover:-translate-y-[1px] hover:shadow-sm active:shadow-press',
    stamp && 'before:block before:h-2 before:w-2 before:rounded-full before:bg-clay',
    className
  )

  if (asChild && isValidElement(children)) {
    return cloneElement(
      children as ReactElement,
      {
        ...(props as Record<string, unknown>),
        className: cn((children.props as { className?: string }).className, classes)
      } as any
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
