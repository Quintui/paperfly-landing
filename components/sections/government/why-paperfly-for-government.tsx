"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "We handle both document creation and evaluation in one platform",
  "Our bilingual generation is built-in, not an add-on",
  "We provide immediate scoring — no spreadsheet exports needed",
  "Our vendor Q&A link eliminates formatting headaches",
];

export function WhyPaperflyForGovernment() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Paperfly Over Other Solutions?
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Most procurement tools focus on storage or workflow, not on the
            actual creation of the RFP and structured collection of vendor
            responses. Paperfly bridges that gap:
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <ul className="space-y-6">
            {points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-green-100 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="text-green-600" size={20} />
                </div>
                <span className="text-lg text-gray-800">{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
