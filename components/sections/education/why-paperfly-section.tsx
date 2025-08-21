"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "Built for the unique needs of public sector procurement",
  "Intuitive platform that’s easy for all stakeholders to use",
  "Reduces RFP timelines from months to weeks",
  "Ensures a fair, transparent, and auditable process",
];

export function WhyPaperflySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why Paperfly is the Right Choice for Higher Education
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {points.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-lg text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
