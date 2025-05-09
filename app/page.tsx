"use client";

import { Button } from "@/components/ui/button";
import { DEMO_BOOKING_URL } from "@/lib/constants";
import { Footer } from "@/components/footer";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyAIWorks } from "@/components/sections/why-ai-works";
import { Hero } from "@/components/sections/hero";
import { KeyFeatures } from "@/components/sections/key-features";
import { CallToAction } from "@/components/sections/call-to-action";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Sticky Header */}
      <Header />

      {/* Add padding to account for fixed header */}
      <div className="pt-[72px]">
        {/* Hero Section */}
        <Hero />

        {/* Key Features Section */}
        <KeyFeatures />

        <WhoWeAre />

        <WhatWeDo />

        <WhoWeServe />

        <HowItWorks />

        <WhyAIWorks />

        {/* Call to Action Section */}
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
