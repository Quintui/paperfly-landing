"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BenefitsSection } from "@/components/sections/financial-services/benefits-section";
import { CallToActionSection } from "@/components/sections/call-to-action";
import { ChallengesSection } from "@/components/sections/financial-services/challenges-section";
import { ExampleSection } from "@/components/sections/financial-services/example-section";
import { FaqSection } from "@/components/sections/financial-services/faq-section";
import { HeroSection } from "@/components/sections/financial-services/hero-section";
import { IntroSection } from "@/components/sections/financial-services/intro-section";
import { SolutionsSection } from "@/components/sections/financial-services/solutions-section";
import { WhyPaperflySection } from "@/components/sections/financial-services/why-paperfly-section";

export default function FinancialServicesPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <div className="pt-[72px]">
        <HeroSection />
        <IntroSection />
        <ChallengesSection />
        <SolutionsSection />
        <ExampleSection />
        <BenefitsSection />
        <FaqSection />
        <WhyPaperflySection />
        <CallToActionSection
          title="Ready to Streamline Financial Services Procurement?"
          description="Book a demo today to see how Paperfly can help your financial institution create bilingual, compliant RFPs, collect structured vendor responses, auto-grade submissions, and notify vendors — all in one secure platform."
        />
        <Footer />
      </div>
    </div>
  );
}
