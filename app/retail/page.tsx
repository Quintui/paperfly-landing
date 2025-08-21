"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/retail/hero-section";
import { IntroSection } from "@/components/sections/retail/intro-section";
import { ChallengesSection } from "@/components/sections/retail/challenges-section";
import { SolutionsSection } from "@/components/sections/retail/solutions-section";
import { ExampleSection } from "@/components/sections/retail/example-section";
import { BenefitsSection } from "@/components/sections/retail/benefits-section";
import { FaqSection } from "@/components/sections/retail/faq-section";
import { WhyPaperflySection } from "@/components/sections/retail/why-paperfly-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function RetailPage() {
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
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
}
