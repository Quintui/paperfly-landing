"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CallToActionSection } from "@/components/sections/call-to-action";
import { HeroSection } from "@/components/sections/higher-education/hero-section";
import { IntroSection } from "@/components/sections/higher-education/intro-section";
import { RfpChallengesSection } from "@/components/sections/higher-education/rfp-challenges";
import { PaperflySolutionsSection } from "@/components/sections/higher-education/paperfly-solutions";
import { UniversityExampleSection } from "@/components/sections/higher-education/university-example";
import { BenefitsSection } from "@/components/sections/higher-education/benefits-section";
import { FaqSection } from "@/components/sections/higher-education/faq-section";

export default function HigherEducationPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <div className="pt-[72px]">
        <HeroSection />
        <IntroSection />
        <RfpChallengesSection />
        <PaperflySolutionsSection />
        <UniversityExampleSection />
        <BenefitsSection />
        <FaqSection />
        <CallToActionSection
          title="Ready to Modernize Your RFP Creation & Procurement Process?"
          description="If your campus is still juggling RFP drafts in Word and scoring vendor proposals in Excel, it’s time to graduate to something smarter. Paperfly delivers clarity, compliance, and speed for every procurement project — whether it’s new lab equipment, a campus dining provider, or an enterprise LMS. Book a demo today to see how Paperfly helps higher education teams create bilingual, structured RFPs, evaluate vendors fairly, and make faster, better procurement decisions."
        />
        <Footer />
      </div>
    </div>
  );
}
