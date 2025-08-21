"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "Less time spent consolidating vendor responses",
  "Better supplier fit for your needs",
  "Faster procurement decisions",
  "Consistent documentation across categories and seasons",
];

export function WhyPaperflySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Paperfly for Retail Procurement?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Unlike generic procurement tools, Paperfly focuses on the front-end of the procurement process — creating structured RFPs, collecting comparable supplier responses, and automating scoring.
            </p>
            <p className="text-lg text-gray-700 font-semibold mb-6">
              For retailers, this means:
            </p>
            <div className="space-y-4 inline-block text-left">
              {points.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <Check size={16} />
                  </div>
                  <p className="text-lg text-gray-800">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
