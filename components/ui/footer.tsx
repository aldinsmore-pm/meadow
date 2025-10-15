import Link from "next/link";

import Logo from "./logo";

const workLinks = [
  { label: "Partnership model", href: "#approach" },
  { label: "Apply to partner", href: "#book-ai-roadmap" },
  { label: "Discovery process", href: "#start-chat" },
];

const resourceLinks = [
  { label: "Automation ROI Calculator", href: "#resources" },
  { label: "Ops Leader Newsletter", href: "#resources" },
  { label: "Client testimonials", href: "#testimonials" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(var(--meadow-primary)/0.15)] bg-[rgb(var(--meadow-ink))] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[rgba(255,255,255,0.04)] px-6 py-12 sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[rgba(var(--meadow-primary)/0.35)] blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-[rgba(var(--meadow-accent)/0.25)] blur-3xl" />
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
            <div className="space-y-6">
              <Logo invert />
              <p className="max-w-sm text-sm leading-relaxed text-white/70">
                Meadow is the operator-first partner for governed AI automations. We work closely with a small
                number of businesses each year, building and scaling automations alongside your team until the
                results stick.
              </p>
              <div className="space-y-4 text-sm text-white/70">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Talk with Meadow</p>
                  <a
                    href="https://cal.com"
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-[rgb(var(--meadow-accent))] px-5 py-2 text-sm font-semibold text-[rgb(var(--meadow-ink))] transition hover:bg-[rgb(var(--meadow-accent))]/90"
                  >
                    Schedule discovery call
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <a className="hover:text-white" href="mailto:hello@meadow.ai">
                    hello@meadow.ai
                  </a>
                  <span>Based in Austin • Serving US &amp; Canada</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Work with Meadow</p>
              <ul className="space-y-3 text-sm text-white/70">
                {workLinks.map((item) => (
                  <li key={item.label}>
                    <Link className="transition hover:text-white" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Resources</p>
              <ul className="space-y-3 text-sm text-white/70">
                {resourceLinks.map((item) => (
                  <li key={item.label}>
                    <Link className="transition hover:text-white" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                <p className="font-semibold text-white">Need a custom automation review?</p>
                <p className="mt-1 text-xs text-white/60">
                  Send over your process or CSV volumes and we’ll share the first pass within 48 hours.
                </p>
                <a className="mt-3 inline-flex text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-accent))] hover:text-white" href="mailto:scoping@meadow.ai">
                  scoping@meadow.ai
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <span>© {currentYear} Meadow. All rights reserved.</span>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/company/meadow-ai"
                className="transition hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="transition hover:text-white" href="mailto:hello@meadow.ai">
                Contact
              </a>
              <a className="transition hover:text-white" href="mailto:legal@meadow.ai">
                Privacy &amp; terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
