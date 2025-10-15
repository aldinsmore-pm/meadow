"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "./button";
import Logo from "./logo";

const navigation = [
  { name: "Approach", href: "#approach" },
  { name: "Results", href: "#results" },
  { name: "Fit", href: "#fit" },
  { name: "Process", href: "#process" },
  { name: "Tools", href: "#tools" },
  { name: "FAQ", href: "#faq" },
  { name: "Apply", href: "#apply" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-300/60 bg-fog/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 md:px-6">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden items-center gap-1 text-sm font-medium text-slate-700 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-lg px-3 py-2 transition hover:bg-white hover:text-ink"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild size="sm" variant="secondary" className="hidden md:inline-flex">
            <Link href="#tools">ROI calculator</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="#apply">Apply to partner</Link>
          </Button>
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-700 transition hover:bg-white md:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {mobileMenuOpen ? (
        <div className="border-t border-slate-300/60 bg-fog/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2 text-sm text-slate-700">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 transition hover:bg-white hover:text-ink"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
