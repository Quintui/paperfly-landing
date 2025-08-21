"use client";

import { Header } from "@/components/header";
import { HowItWorksHero } from "@/components/sections/how-it-works-hero";
import { KeyOutcomes } from "@/components/sections/key-outcomes";
import { ProcurementProblem } from "@/components/sections/procurement-problem";
import { PaperflyApproach } from "@/components/sections/paperfly-approach";
import { WhyChoosePaperfly } from "@/components/sections/why-choose-paperfly";
import { CallToActionSection } from "@/components/sections/call-to-action";
import { Footer } from "@/components/footer";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <div className="pt-[72px]">
        <HowItWorksHero />
        <KeyOutcomes />
        <ProcurementProblem />
        <PaperflyApproach />
        <WhyChoosePaperfly />
        <CallToActionSection
          title="Ready to Transform Your Procurement Process?"
          description="Discover how Paperfly's AI-powered platform can help you save time, reduce costs, and make better procurement decisions. Book your personalized demo today!"
        />
        <Footer />
      </div>
    </div>
  );
};

export default HowItWorksPage;
