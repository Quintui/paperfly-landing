"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, DollarSign, CheckCircle } from "lucide-react";
import { DEMO_BOOKING_URL, DASHBOARD_URL } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#005DF2] rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Optimize Your Procurement Process?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join industry leaders who have reduced costs and accelerated
                  project execution through standardized procurement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-white text-[#005DF2] hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl h-[50px]"
                    asChild
                  >
                    <a
                      href={DEMO_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Book a Demo
                      <ChevronRight className="ml-2" size={20} />
                    </a>
                  </Button>
                  <Button
                    className="bg-transparent border border-white text-white hover:bg-white hover:text-[#005DF2] text-lg px-8 py-6 rounded-lg transition-all duration-300 h-[50px]"
                    asChild
                  >
                    <a
                      href={DASHBOARD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Get Started
                      <ChevronRight className="ml-2" size={20} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-[#004acf] p-8 md:p-12 flex items-center justify-center">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm w-full">
                <div className="flex items-center space-x-4 mb-6">
                  <Zap className="text-white" size={24} />
                  <span className="text-white text-lg font-semibold">
                    40% faster execution
                  </span>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <DollarSign className="text-white" size={24} />
                  <span className="text-white text-lg font-semibold">
                    25% cost reduction
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="text-white" size={24} />
                  <span className="text-white text-lg font-semibold">
                    Zero documentation errors
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
