"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  {
    text: "Faster vendor selection without sacrificing transparency",
  },
  {
    text: "Better alignment between vendors and mission goals",
  },
  {
    text: "Lower administrative burden for small teams",
  },
  {
    text: "Improved donor and grantor confidence through clear documentation",
  },
];

export const WhyPaperflySection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Paperfly for Non-Profit Procurement?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Many procurement tools focus on large enterprise workflows.
              Paperfly focuses on making procurement accessible, structured, and
              fair for mission-driven organizations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg"
          >
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{point.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
