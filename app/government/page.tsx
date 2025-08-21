"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { GovernmentHero } from "@/components/sections/government/hero-section";
import { IntroSection } from "@/components/sections/government/intro-section";
import { RfpChallenges } from "@/components/sections/government/rfp-challenges";
import { PaperflySolutions } from "@/components/sections/government/paperfly-solutions";
import { CityRfpExample } from "@/components/sections/government/city-rfp-example";
import { GovernmentBenefits } from "@/components/sections/government/government-benefits";
import { GovernmentFaq } from "@/components/sections/government/government-faq";
import { WhyPaperflyForGovernment } from "@/components/sections/government/why-paperfly-for-government";
import { GovernmentCta } from "@/components/sections/government/government-cta";

export default function GovernmentPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <div className="pt-[72px]">
        <GovernmentHero />
        <IntroSection />
        <RfpChallenges />
        <PaperflySolutions />
        <CityRfpExample />
        <GovernmentBenefits />
        <GovernmentFaq />
        <WhyPaperflyForGovernment />
        <GovernmentCta />
        <Footer />
      </div>
    </div>
  );
}

