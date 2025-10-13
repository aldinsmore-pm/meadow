export const metadata = {
  title: "Meadow | Practical AI for Operations",
  description:
    "Meadow builds AI roadmaps and automation pilots for $500k–$10M revenue operators, turning manual workflows into governed, measurable wins.",
};

import MeadowHero from "@/components/meadow/hero";
import MeadowTrustBar from "@/components/meadow/trust-bar";
import MeadowValueProps from "@/components/meadow/value-props";
import MeadowEngagementSteps from "@/components/meadow/engagement-steps";
import MeadowChatCta from "@/components/meadow/chat-cta";
import MeadowRoadmapOverview from "@/components/meadow/roadmap-overview";
import MeadowRoiCalculator from "@/components/meadow/roi-calculator";
import MeadowResources from "@/components/meadow/resources";
import MeadowTestimonials from "@/components/meadow/testimonials";
import MeadowFinalCta from "@/components/meadow/final-cta";

export default function Home() {
  return (
    <>
      <MeadowHero />
      <MeadowTrustBar />
      <MeadowValueProps />
      <MeadowEngagementSteps />
      <MeadowRoadmapOverview />
      <MeadowChatCta />
      <MeadowRoiCalculator />
      <MeadowResources />
      <MeadowTestimonials />
      <MeadowFinalCta />
    </>
  );
}
