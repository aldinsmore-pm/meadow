"use client";

import Link from "next/link";
import Logo from "./logo";

const navigation = [
  { name: "Approach", href: "#approach" },
  { name: "Chat", href: "#start-chat" },
  { name: "Resources", href: "#resources" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[rgba(var(--meadow-primary)/0.15)] bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between gap-6">
          <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <Logo />
            <nav className="hidden items-center gap-4 text-sm font-semibold text-[rgb(var(--meadow-ink)/0.7)] md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-md px-3 py-2 transition hover:bg-[rgba(var(--meadow-muted)/0.8)] hover:text-[rgb(var(--meadow-ink))]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-none items-center gap-3">
            <div className="hidden flex-col text-right text-xs text-[rgb(var(--meadow-ink)/0.6)] sm:flex">
              <span>Call: <a href="tel:+15125551234" className="font-semibold text-[rgb(var(--meadow-primary))]">(512) 555-1234</a></span>
              <span>Email: <a href="mailto:hello@meadow.ai" className="underline">hello@meadow.ai</a></span>
            </div>
            <Link
              href="#start-chat"
              className="inline-flex items-center justify-center rounded-md border-2 border-[rgb(var(--meadow-primary))] px-4 py-2 text-sm font-semibold text-[rgb(var(--meadow-primary))] transition hover:bg-[rgba(var(--meadow-primary)/0.08)]"
            >
              Request a Consultation
            </Link>
            <Link
              href="#book-ai-roadmap"
              className="inline-flex items-center justify-center rounded-md border-2 border-[rgb(var(--meadow-primary-dark))] bg-[rgb(var(--meadow-primary))] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(var(--meadow-primary-dark)/0.2)] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--meadow-primary-dark))]"
            >
              Apply to Partner
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
