"use client";

import { Button } from "@/components/ui/button";
import { DEMO_BOOKING_URL } from "@/lib/constants";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { WhyPaperfly } from "@/components/sections/why-paperfly";
import { CommonRFPChallenges } from "@/components/sections/common-rfp-challenges";
import { IndustrySpecificProblems } from "@/components/sections/industry-specific-problems";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FeatureSpotlight } from "@/components/sections/feature-spotlight";
import { Faq } from "@/components/sections/faq";
import { WhoUsesPaperfly } from "@/components/sections/who-uses-paperfly";
import { Header } from "@/components/header";
import {
  Brain,
  Shield,
  Sparkles,
  Zap,
  Timer,
  CheckCircle2,
  BarChart3,
  Lock,
  ShieldCheck,
  FileCheck,
  Network,
  Database,
  Rocket,
} from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Sticky Header */}
      <Header />

      {/* Add padding to account for fixed header */}
      <div className="pt-[72px]">
        {/* Hero Section */}
        <Hero />

        <WhyPaperfly />
        <CommonRFPChallenges />
        <IndustrySpecificProblems />
        <HowItWorks />
        <FeatureSpotlight />
        <Faq />
        <WhoUsesPaperfly />

        {/* Call to Action Section */}
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
}
