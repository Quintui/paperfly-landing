"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Clock } from "lucide-react";
import { DEMO_BOOKING_URL } from "@/lib/constants";
import { Footer } from "@/components/footer";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyAIWorks } from "@/components/sections/why-ai-works";
import { Hero } from "@/components/sections/hero";
import { KeyFeatures } from "@/components/sections/key-features";
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

        {/* Demo Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-[#005DF2] rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 md:p-12 flex items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Get Started Today
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                      Ready to simplify your RFP/RFI workflow and save hours?
                      Create RFPs and RFIs in minutes — not days.
                    </p>
                    <Button
                      className="bg-white text-[#005DF2] hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      asChild
                    >
                      <a
                        href={DEMO_BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book a Demo <ChevronRight className="ml-2" size={20} />
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 bg-[#004acf] p-8 md:p-12 flex items-center justify-center">
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center space-x-4 mb-6">
                      <Clock className="text-white" size={24} />
                      <div>
                        <h3 className="text-white font-bold">
                          Save 85% of Time
                        </h3>
                        <p className="text-white/80">
                          Compared to manual RFP creation
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/5 h-2 rounded-full mb-2">
                      <div className="bg-white h-2 rounded-full w-[15%]"></div>
                    </div>
                    <div className="flex justify-between text-white/80 text-sm">
                      <span>Paperfly: 30 min</span>
                      <span>Manual: 3+ hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
