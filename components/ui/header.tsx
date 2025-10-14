"use client";

import Link from "next/link";
import Logo from "./logo";

const navigation = [
  { name: "Approach", href: "#approach" },
  { name: "Chat", href: "#start-chat" },
  { name: "Resources", href: "#resources" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Header() {
  return (
    <header className="sticky top-4 z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between gap-4 rounded-2xl border border-[rgba(var(--meadow-primary)/0.15)] bg-white/80 px-4 shadow-md backdrop-blur">
          <div className="flex flex-1 items-center gap-6">
            <Logo />
            <nav className="hidden items-center gap-4 text-sm font-medium text-[rgb(var(--meadow-ink)/0.7)] md:flex">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="rounded-full px-3 py-2 transition hover:bg-[rgba(var(--meadow-muted)/0.8)] hover:text-[rgb(var(--meadow-ink))]">
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-none items-center gap-3">
            <Link
              href="#book-ai-roadmap"
              className="hidden rounded-full border border-[rgba(var(--meadow-primary)/0.2)] px-4 py-2 text-sm font-semibold text-[rgb(var(--meadow-ink))] transition hover:bg-[rgba(var(--meadow-muted)/0.8)] sm:inline-flex"
            >
              Book free Game Plan
            </Link>
            <Link
              href="#start-chat"
              className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--meadow-primary))] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[rgb(var(--meadow-primary))]/90"
            >
              Launch chat
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
