"use client";

import { Button } from "@/components/ui/button";
import { DEMO_BOOKING_URL } from "@/lib/constants";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

const points = [
  {
    text: "Clear, comparable vendor proposals that meet technical requirements",
  },
  { text: "Faster procurement without sacrificing due diligence" },
  { text: "Improved security and compliance readiness" },
  {
    text: "Better alignment between vendor capabilities and your product roadmap",
  },
];

export function WhyPaperflySection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Why Choose Paperfly for SaaS & Technology Procurement?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              While many procurement tools focus on contract management,
              Paperfly focuses on the front end of procurement — ensuring your
              vendor selection process is fast, structured, and repeatable.
            </p>
            <div className="space-y-4 inline-block">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-[#005DF2]" />
                  <p className="text-gray-700">{point.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
