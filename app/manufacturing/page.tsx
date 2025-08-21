"use client";

import { BenefitsSection } from "@/components/sections/manufacturing/benefits-section";
import { ChallengesSection } from "@/components/sections/manufacturing/challenges-section";
import { FaqSection } from "@/components/sections/manufacturing/faq-section";
import { HeroSection } from "@/components/sections/manufacturing/hero-section";
import { ProcurementExampleSection } from "@/components/sections/manufacturing/procurement-example-section";
import { SolutionsSection } from "@/components/sections/manufacturing/solutions-section";
import { WhyPaperflySection } from "@/components/sections/manufacturing/why-paperfly-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <Header />
      <div className="pt-[72px]">
        <HeroSection />
        <ChallengesSection />
        <SolutionsSection />
        <ProcurementExampleSection />
        <BenefitsSection />
        <WhyPaperflySection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
}
