"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

const navigation = [
  { name: "Approach", href: "#approach" },
  { name: "Resources", href: "#resources" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="border-b border-[rgba(var(--meadow-ink)/0.08)] bg-white/95">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-9 items-center justify-end gap-4 text-xs text-[rgb(var(--meadow-ink)/0.6)]">
            <a
              href="tel:+15125551234"
              className="hover:text-[rgb(var(--meadow-primary))] transition"
            >
              <span className="hidden sm:inline">Call: </span>(512) 555-1234
            </a>
            <span className="hidden sm:inline text-[rgba(var(--meadow-primary)/0.2)]">|</span>
            <a
              href="mailto:hello@meadow.ai"
              className="hover:text-[rgb(var(--meadow-primary))] transition"
            >
              hello@meadow.ai
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-[rgba(var(--meadow-primary)/0.12)] bg-white/98 shadow-sm backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Logo />
              <nav className="hidden items-center gap-1 lg:flex">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="rounded-md px-4 py-2 text-sm font-semibold text-[rgb(var(--meadow-ink)/0.7)] transition hover:bg-[rgba(var(--meadow-primary)/0.08)] hover:text-[rgb(var(--meadow-ink))]"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="#start-chat"
                className="hidden text-sm font-semibold text-[rgb(var(--meadow-primary))] underline underline-offset-4 transition hover:text-[rgb(var(--meadow-primary-dark))] sm:inline-flex"
              >
                Chat
              </Link>
              <Link
                href="#book-ai-roadmap"
                className="inline-flex items-center justify-center rounded-md border-2 border-[rgb(var(--meadow-primary-dark))] bg-[rgb(var(--meadow-primary))] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[rgba(var(--meadow-primary-dark)/0.2)] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--meadow-primary-dark))]"
              >
                Apply to Partner
              </Link>
              <button
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="p-2 text-[rgb(var(--meadow-ink)/0.7)] transition hover:text-[rgb(var(--meadow-ink))] lg:hidden"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="border-t border-[rgba(var(--meadow-primary)/0.12)] py-4 lg:hidden">
              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-md px-4 py-3 text-sm font-semibold text-[rgb(var(--meadow-ink)/0.7)] transition hover:bg-[rgba(var(--meadow-primary)/0.08)] hover:text-[rgb(var(--meadow-ink))]"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
