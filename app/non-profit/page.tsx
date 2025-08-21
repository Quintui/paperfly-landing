"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/non-profit/hero-section";
import { ChallengesSection } from "@/components/sections/non-profit/challenges-section";
import { SolutionsSection } from "@/components/sections/non-profit/solutions-section";
import { ExampleSection } from "@/components/sections/non-profit/example-section";
import { BenefitsSection } from "@/components/sections/non-profit/benefits-section";
import { FaqSection } from "@/components/sections/non-profit/faq-section";
import { WhyPaperflySection } from "@/components/sections/non-profit/why-paperfly-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function NonProfitPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <div className="pt-[72px]">
        <HeroSection />
        <ChallengesSection />
        <SolutionsSection />
        <ExampleSection />
        <BenefitsSection />
        <FaqSection />
        <WhyPaperflySection />
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
}

