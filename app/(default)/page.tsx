import casesData from "@/content/cases.json";
import faqData from "@/content/faq.json";
import testimonialsData from "@/content/testimonials.json";

import { ApplySection } from "@/components/sections/apply-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FitPoint, FitSection } from "@/components/sections/fit-section";
import { Hero, HeroVariant } from "@/components/sections/hero";
import { ProcessSection } from "@/components/sections/process-section";
import { ResultsGrid } from "@/components/sections/results-grid";
import { SummaryStat, SummaryStrip } from "@/components/sections/summary-strip";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ToolsSection } from "@/components/sections/tools-section";
import { Step } from "@/components/ui/process-stepper";

const summaryStats: SummaryStat[] = [
  { value: "80", unit: "hrs/mo", caption: "Average time reclaimed" },
  { value: "6-9", unit: "mo", caption: "Typical engagement length" },
  { value: "30%", caption: "Applicants accepted annually" },
];

const steps: Step[] = [
  { title: "Discovery", goal: "Map ops + quantify waste", receipt: "Partnership plan & backlog" },
  { title: "Build", goal: "Pilot + integrate in workflow", receipt: "Working pilot & training" },
  { title: "Optimize", goal: "Stabilize & handoff", receipt: "Runbook & KPIs" },
];

const fitPoints: FitPoint[] = [
  {
    title: "Operators in the loop",
    description: "Your ops and finance leads can sponsor weekly working sessions and champion adoption.",
  },
  {
    title: "Data you trust",
    description: "Source systems live in QuickBooks, NetSuite, Airtable, HubSpot, or adjacent stacks we’ve scaled before.",
  },
  {
    title: "Growth mandate",
    description: "You’re ready to reinvest freed hours into higher-margin work—sales enablement, service upsells, or expansion.",
  },
];

const heroVariant: HeroVariant =
  process.env.NEXT_PUBLIC_HERO_VARIANT === "B" || process.env.NEXT_PUBLIC_THEME === "meadow-refresh-b"
    ? "B"
    : "A";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-12 md:px-6">
      <section id="approach">
        <Hero variant={heroVariant} />
      </section>

      <section id="results" className="space-y-10">
        <SummaryStrip stats={summaryStats} />
        <ResultsGrid cases={casesData} />
        <TestimonialsSection testimonials={testimonialsData} />
      </section>

      <section id="fit">
        <FitSection points={fitPoints} />
      </section>

      <section id="process">
        <ProcessSection steps={steps} />
      </section>

      <section id="tools">
        <ToolsSection />
      </section>

      <section id="faq">
        <FAQSection items={faqData} />
      </section>

      <section id="apply">
        <ApplySection />
      </section>
    </main>
  );
}
