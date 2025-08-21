"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CallToActionSection } from "@/components/sections/call-to-action";
import { BenefitsSection } from "@/components/sections/hospitality-food-services/benefits-section";
import { FaqSection } from "@/components/sections/hospitality-food-services/faq-section";
import { HeroSection } from "@/components/sections/hospitality-food-services/hero-section";
import { HotelExampleSection } from "@/components/sections/hospitality-food-services/hotel-example-section";
import { IntroSection } from "@/components/sections/hospitality-food-services/intro-section";
import { PaperflySolutionsSection } from "@/components/sections/hospitality-food-services/paperfly-solutions";
import { RfpChallengesSection } from "@/components/sections/hospitality-food-services/rfp-challenges";

export default function HospitalityPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <div className="pt-[72px]">
        <HeroSection />
        <IntroSection />
        <RfpChallengesSection />
        <PaperflySolutionsSection />
        <HotelExampleSection />
        <BenefitsSection />
        <FaqSection />
        <CallToActionSection
          title="Ready to Transform Your Hospitality Procurement?"
          description="Whether you’re managing procurement for a single venue or a global hotel brand, Paperfly can help you create compliant, vendor-friendly RFPs, evaluate proposals with precision, and keep your procurement process running as smoothly as your front-of-house. Book a demo today to see how Paperfly transforms procurement in hospitality and food services."
        />
        <Footer />
      </div>
    </div>
  );
}
