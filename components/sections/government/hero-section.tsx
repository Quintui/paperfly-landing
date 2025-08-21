"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { DEMO_BOOKING_URL } from "@/lib/constants";

export function GovernmentHero() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-20 right-[10%] w-64 h-64 bg-[#005DF2] rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute bottom-20 left-[10%] w-80 h-80 bg-[#005DF2] rounded-full blur-3xl"
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <Badge
              variant="outline"
              className="text-[#005DF2] border-[#005DF2] mb-4"
            >
              Government Solutions
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Government RFP Creation & Vendor Evaluation
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
