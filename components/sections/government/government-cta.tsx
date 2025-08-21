"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { DEMO_BOOKING_URL } from "@/lib/constants";

export function GovernmentCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#005DF2] rounded-2xl overflow-hidden shadow-2xl text-center p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Government Procurement Process
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Book a demo today and see how Paperfly can help you draft RFPs,
            evaluate vendors, and maintain full compliance and transparency.
          </p>
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
        </motion.div>
      </div>
    </section>
  );
}
