# Meadow – agent.md
> Build brief + implementation plan for adapting `cruip/open-react-template` into a conversion‑optimized landing page for **Meadow** (AI automation consulting for SMBs, $500k–$10M revenue). This file is written for an AI code agent (e.g., Codex/Copilot) to execute.

## 0) Goals

**Primary goal:** Maximize bookings for “AI Roadmap (Free)” via chat‑forward onboarding and/or scheduler.
**Secondary goals:** Start the 2‑minute “Find My Automations” chat, use ROI Calculator, download lead magnet, and join newsletter.

**Non‑goals:** Building the downstream agent workflow. (We only surface *where* and *how* chat appears and what context to pass.)

---

## 1) Repo snapshot & tech assumptions

- Next.js with **App Router** (`app/`), and the main landing page at `app/page.tsx`.
- Tailwind CSS v4; components live under `components/`; static assets under `public/`.
- Fonts loaded via `next/font`.  
> If any of the above differ locally, prefer creating **new Meadow‑scoped components** (`components/meadow/*`) and compose from `app/page.tsx` rather than modifying template internals.

---

## 2) Brand system

**Name:** Meadow  
**Positioning tagline:** Practical AI for Operations  
**Voice:** Calm, operator‑friendly, outcome‑driven; no hype.

### 2.1 Colors (Tailwind tokens via CSS variables)

Add these to `app/globals.css` (Tailwind v4 reads CSS variables automatically):

```css
:root {
  /* Meadow brand */
  --meadow-primary: 31 122 86;    /* #1F7A56 - deep meadow green */
  --meadow-accent: 126 194 127;   /* #7EC27F - fresh grass */
  --meadow-ink: 14 30 23;         /* #0E1E17 - nearly-black */
  --meadow-muted: 235 245 239;    /* #EBF5EF - light green wash */
  --meadow-warn: 245 190 73;      /* #F5BE49 - warm highlight */

  /* Semantic */
  --bg: 255 255 255;
  --fg: var(--meadow-ink);
  --primary: var(--meadow-primary);
  --accent: var(--meadow-accent);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: 12 14 14;
    --fg: 240 245 241;
  }
}
