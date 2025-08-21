"use client";

import { BenefitsSection } from "@/components/sections/technology-saas-tech/benefits-section";
import { ChallengesSection } from "@/components/sections/technology-saas-tech/challenges-section";
import { CtaSection } from "@/components/sections/cta-section";
import { ExampleSection } from "@/components/sections/technology-saas-tech/example-section";
import { FaqSection } from "@/components/sections/technology-saas-tech/faq-section";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/technology-saas-tech/hero-section";
import { SolutionsSection } from "@/components/sections/technology-saas-tech/solutions-section";
import { WhyPaperflySection } from "@/components/sections/technology-saas-tech/why-paperfly-section";
import { Footer } from "@/components/footer";

export default function TechnologySaasTechPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="flex-grow pt-[72px]">
        <HeroSection />
        <ChallengesSection />
        <SolutionsSection />
        <ExampleSection />
        <BenefitsSection />
        <FaqSection />
        <WhyPaperflySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

