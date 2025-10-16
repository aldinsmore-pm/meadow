import * as React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost-partner";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  asChild,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus-ring transform disabled:cursor-not-allowed disabled:opacity-60";
  const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3",
    lg: "px-6 py-4 text-lg",
  };
  const variants: Record<ButtonVariant, string> = {
    primary:
      "border border-ember/35 bg-gradient-to-r from-ember to-gold text-ink shadow-glow hover:from-ember/90 hover:to-gold/90 focus-visible:from-ember/90 focus-visible:to-gold/90 hover:-translate-y-px focus-visible:-translate-y-px active:translate-y-0 active:shadow-press",
    secondary:
      "bg-white/95 text-ink border border-slate-300/80 shadow-card hover:-translate-y-px focus-visible:-translate-y-px active:translate-y-0",
    "ghost-partner":
      "bg-white/40 text-ink border border-[rgba(14,20,18,0.42)] backdrop-blur hover:bg-wheat/40",
  };

  const classes = [base, sizes[size], variants[variant], className]
    .filter(Boolean)
    .join(" ");

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: [classes, child.props.className].filter(Boolean).join(" "),
      ...props,
    } as React.Attributes & { className?: string });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
