"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DEMO_BOOKING_URL, DASHBOARD_URL } from "@/lib/constants";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute right-[10%] top-20 h-64 w-64 rounded-full bg-[#005DF2] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute bottom-20 left-[10%] h-80 w-80 rounded-full bg-[#005DF2] blur-3xl"
      />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <Badge
              variant="outline"
              className="mb-4 border-[#005DF2] text-[#005DF2]"
            >
              SaaS & Technology
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl"
          >
            SaaS & Technology RFP Creation & Vendor Evaluation — Move Fast
            Without Sacrificing Quality
          </motion.h1>
          <motion.p
            className="mx-auto mb-10 max-w-3xl text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            In the fast-paced world of SaaS and technology, speed matters — but
            moving too quickly without a structured procurement process can lead
            to costly mistakes. Paperfly allows technology teams to create
            bilingual RFPs, collect structured vendor responses, and
            automatically score them — so you can make faster, more confident
            vendor decisions without skipping critical due diligence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              className="bg-[#005DF2] hover:bg-[#004acf] text-white text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              asChild
            >
              <a
                href={DEMO_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Book a Demo
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <ChevronRight className="ml-2" size={20} />
                </motion.span>
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-[#005DF2] text-[#005DF2] hover:bg-[#005DF2] hover:text-white text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              asChild
            >
              <a href={DASHBOARD_URL} className="flex items-center">
                Get Started
                <ChevronRight className="ml-2" size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
