import Link from "next/link";

import Logo from "./logo";

const workLinks = [
  { label: "Approach", href: "#approach" },
  { label: "Results", href: "#results" },
  { label: "Apply", href: "#apply" },
];

const resourceLinks = [
  { label: "Process", href: "#process" },
  { label: "Tools", href: "#tools" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-300 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-sm text-sm text-slate-700">
              Meadow helps operators compound gains by eliminating the 15+ hours each week that stall growth. We partner with a select cohort each year so results stick.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-700">
              <Link className="link-animated" href="mailto:hello@meadow.ai">
                hello@meadow.ai
              </Link>
              <span>Based in Austin · Serving US &amp; Canada</span>
            </div>
          </div>
          <div className="space-y-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-700/70">Navigation</p>
            <ul className="space-y-2">
              {workLinks.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-ink" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-700/70">Resources</p>
            <ul className="space-y-2">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-ink" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-slate-300 pt-6 text-xs text-slate-600 md:flex-row md:items-center md:justify-between">
          <span>© {currentYear} Meadow. All rights reserved.</span>
          <div className="flex flex-wrap gap-4">
            <Link className="transition hover:text-ink" href="https://www.linkedin.com/company/meadow-ai" target="_blank" rel="noreferrer">
              LinkedIn
            </Link>
            <Link className="transition hover:text-ink" href="mailto:hello@meadow.ai">
              Contact
            </Link>
            <Link className="transition hover:text-ink" href="mailto:legal@meadow.ai">
              Privacy &amp; terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
