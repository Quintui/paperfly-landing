"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "Less time spent chasing complete vendor responses",
  "Reduced compliance risk",
  "Clear, documented vendor selection processes",
  "Improved transparency for stakeholders and regulators",
];

export function WhyPaperflySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Paperfly for Financial Services Procurement?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Most procurement tools focus on contract storage or payment
              workflows. Paperfly focuses on the front-end of the process —
              building structured, compliant RFPs, collecting consistent vendor
              responses, and making evaluations faster and more objective.
            </p>
            <p className="text-lg text-gray-700 font-semibold mb-6">
              For financial institutions, this means:
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
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gray-100 p-8 rounded-xl"
          >
            <img
              src="/placeholder.svg"
              alt="Financial Services Procurement Illustration"
              className="w-full h-auto rounded-lg"
            />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
