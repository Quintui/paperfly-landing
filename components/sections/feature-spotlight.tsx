"use client";

import { motion } from "framer-motion";
import { Check, Link, Star } from "lucide-react";

export const FeatureSpotlight = () => {
  const features = [
    "Each RFP comes with its own secure Q&A form link",
    "All responses are collected in a uniform, scorable format",
    "Auto-grading eliminates days of manual evaluation work",
    "Results are sortable by score, making top vendors easy to identify",
    "Bulk notifications save hours of manual follow-up",
  ];

  return (
    <section id="feature-spotlight" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#005DF2]/10 rounded-full"></div>
              <div className="relative bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold mb-4">Feature Spotlight</h2>
                <h3 className="text-2xl font-semibold text-[#005DF2] mb-6">Vendor Q&A Link + Instant Grading</h3>
                <p className="text-lg text-gray-700">
                  Many RFP tools stop at document creation, leaving issuers to manually chase down vendor responses. Paperfly goes further:
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex items-start text-lg"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-800">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
