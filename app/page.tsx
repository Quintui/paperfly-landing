"use client";

import { Button } from "@/components/ui/button";
import { DEMO_BOOKING_URL } from "@/lib/constants";
import { Footer } from "@/components/footer";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Hero } from "@/components/sections/hero";
import { KeyFeatures } from "@/components/sections/key-features";
import { CallToAction } from "@/components/sections/call-to-action";
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

        {/* What We Do Section */}
        <WhatWeDo />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Call to Action Section */}
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
