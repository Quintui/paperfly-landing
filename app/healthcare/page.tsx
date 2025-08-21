"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BenefitsSection } from "@/components/sections/healthcare/benefits-section";
import { CallToActionSection } from "@/components/sections/call-to-action";
import { FaqSection } from "@/components/sections/healthcare/faq-section";
import { HeroSection } from "@/components/sections/healthcare/hero-section";
import { HospitalExampleSection } from "@/components/sections/healthcare/hospital-example";
import { IntroSection } from "@/components/sections/healthcare/intro-section";
import { PaperflySolutionsSection } from "@/components/sections/healthcare/paperfly-solutions";
import { RfpChallengesSection } from "@/components/sections/healthcare/rfp-challenges";
import { WhyPaperflySection } from "@/components/sections/healthcare/why-paperfly";

export default function HealthcarePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <div className="pt-[72px]">
        <HeroSection />
        <IntroSection />
        <RfpChallengesSection />
        <PaperflySolutionsSection />
        <HospitalExampleSection />
        <BenefitsSection />
        <FaqSection />
        <WhyPaperflySection />
        <CallToActionSection
          title="Ready to Streamline Healthcare Procurement?"
          description="Book a demo today to see how Paperfly helps healthcare procurement teams create bilingual, compliant RFPs, collect structured vendor responses, auto-grade submissions, and notify vendors — all in one secure platform."
        />
        <Footer />
      </div>
    </div>
  );
}

