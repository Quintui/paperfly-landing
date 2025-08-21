"use client";

import { Button } from "@/components/ui/button";
import { DEMO_BOOKING_URL, DASHBOARD_URL } from "@/lib/constants";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const HowItWorksHero = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build Clearer RFPs. Pick Better Vendors. Save Weeks.
            </h1>
          </motion.div>

          <motion.p
            className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Skip the blank page. Create professional, bilingual RFPs and RFQs
            faster — with built-in tools to collect requirements, compare
            vendors, and make confident procurement decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <Button
                className="bg-[#005DF2] hover:bg-[#004acf] text-white text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl h-[50px]"
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

            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <Button
                className="bg-transparent border border-[#005DF2] text-[#005DF2] hover:bg-[#005DF2] hover:text-white text-lg px-8 py-6 rounded-lg transition-all duration-300 h-[50px]"
                variant="outline"
                asChild
              >
                <a href={DASHBOARD_URL} className="flex items-center">
                  Get Started
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
