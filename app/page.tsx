"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Clock,
  FileText,
  PenTool,
  Upload,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { DEMO_BOOKING_URL } from "@/lib/constants";
import { MobileMenu } from "@/components/mobile-menu";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyAIWorks } from "@/components/sections/why-ai-works";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Image src="/logo.svg" alt="Logo" width={122} height={28} />

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-700 hover:text-[#005DF2] transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-700 hover:text-[#005DF2] transition-colors"
            >
              How It Works
            </Link>
            <Button
              className="bg-[#005DF2] hover:bg-[#004acf] text-white"
              asChild
            >
              <a
                href={DEMO_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </a>
            </Button>
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </nav>
      </header>

      {/* Hero Section - Centered */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Create RFPs & RFIs in{" "}
              <span className="text-[#005DF2] relative inline-block">
                Minutes
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#005DF2]"></span>
              </span>{" "}
              — Not Days
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Skip the blank page. Instantly generate professional, ready-to-use
              RFPs and RFIs without the manual grind.
            </p>
            <Button
              className="bg-[#005DF2] hover:bg-[#004acf] text-white text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
      </section>

      {/* Key Features */}
      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Accelerate Procurement — Not Paperwork. Smart tools built to
              eliminate busywork and boost compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#005DF2]/30 hover:-translate-y-1">
              <div className="bg-[#005DF2]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#005DF2]/20">
                <Upload className="text-[#005DF2]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Prefill</h3>
              <p className="text-gray-700">
                Upload meeting notes or documents — our AI extracts key details
                to auto-fill your RFP or RFI.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#005DF2]/30 hover:-translate-y-1">
              <div className="bg-[#005DF2]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#005DF2]/20">
                <Zap className="text-[#005DF2]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Documents in Seconds</h3>
              <p className="text-gray-700">
                Generate a complete, professional draft in under a minute.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#005DF2]/30 hover:-translate-y-1">
              <div className="bg-[#005DF2]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#005DF2]/20">
                <PenTool className="text-[#005DF2]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Edit, Don't Write</h3>
              <p className="text-gray-700">
                Review, customize, or delete sections — no need to start from
                scratch.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#005DF2]/30 hover:-translate-y-1">
              <div className="bg-[#005DF2]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#005DF2]/20">
                <FileText className="text-[#005DF2]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Vendor Forms</h3>
              <p className="text-gray-700">
                Automatically turn your final document into a vendor-ready
                questionnaire.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                      <h3 className="text-white font-bold">Save 85% of Time</h3>
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
  );
}
