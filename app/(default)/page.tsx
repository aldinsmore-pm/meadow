export const metadata = {
  title: "Meadow | Get Your Time Back",
  description:
    "Meadow helps small business owners stop wasting hours on repetitive tasks. Get a clear plan to save time, reduce costs, and finally work ON your business, not IN it.",
};

import MeadowHero from "@/components/meadow/hero";
import MeadowTrustBar from "@/components/meadow/trust-bar";
import MeadowValueProps from "@/components/meadow/value-props";
import MeadowCaseStudies from "@/components/meadow/case-studies";
import MeadowEngagementSteps from "@/components/meadow/engagement-steps";
import MeadowChatCta from "@/components/meadow/chat-cta";
import MeadowRoadmapOverview from "@/components/meadow/roadmap-overview";
import MeadowRoiCalculator from "@/components/meadow/roi-calculator";
import MeadowResources from "@/components/meadow/resources";
import MeadowTestimonials from "@/components/meadow/testimonials";
import MeadowFaq from "@/components/meadow/faq";
import MeadowFinalCta from "@/components/meadow/final-cta";

export default function Home() {
  return (
    <>
      <MeadowHero />
      <MeadowTrustBar />
      <MeadowValueProps />
      <MeadowCaseStudies />
      <MeadowEngagementSteps />
      <MeadowRoadmapOverview />
      <MeadowChatCta />
      <MeadowRoiCalculator />
      <MeadowResources />
      <MeadowTestimonials />
      <MeadowFaq />
      <MeadowFinalCta />
    </>
  );
}
