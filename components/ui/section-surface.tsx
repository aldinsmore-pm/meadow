import * as React from "react";

type SectionSurfaceVariant = "grain" | "ledger" | "aurora" | "night" | "strata";

type ElementTag = keyof JSX.IntrinsicElements;

interface SectionSurfaceProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementTag;
  variant?: SectionSurfaceVariant;
  innerClassName?: string;
}

const variantClasses: Record<SectionSurfaceVariant, string> = {
  grain: "surface border border-slate-300 bg-fog shadow-card",
  ledger: "surface-ledger shadow-ledger",
  aurora: "surface-aurora shadow-glow",
  night: "surface-night shadow-night text-linen",
  strata: "surface-strata shadow-soft",
};

export function SectionSurface({
  as = "section",
  variant = "grain",
  className,
  innerClassName,
  children,
  ...props
}: SectionSurfaceProps) {
  const Component = as;
  const outerClasses = [
    "relative overflow-hidden rounded-3xl",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const innerClasses = ["relative z-10", innerClassName].filter(Boolean).join(" ");

  return (
    <Component className={outerClasses} {...props}>
      <div className={innerClasses}>{children}</div>
    </Component>
  );
}
