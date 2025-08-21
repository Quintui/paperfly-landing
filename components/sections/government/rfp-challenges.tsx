"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const challenges = [
  "Bilingual compliance requirements that double the work if done manually",
  "Multiple departments (legal, finance, operations, technical) each contributing their own sections, often with conflicting formats",
  "Unstructured vendor submissions that make scoring time-consuming and inconsistent",
  "Audit trails that require detailed record-keeping for every decision",
  "Time pressure to issue RFPs quickly while avoiding errors that could delay projects or trigger re-issues",
];

export function RfpChallenges() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Government RFPs Are Challenging
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            If you’ve worked in public procurement, you already know the pain
            points:
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-6">
            {challenges.map((challenge, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">{challenge}</span>
              </motion.li>
            ))}
          </ul>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: challenges.length * 0.1 + 0.2 }}
            className="text-center mt-12 text-lg text-gray-800 bg-gray-50 p-6 rounded-lg border border-gray-200"
          >
            These challenges don’t just slow down procurement — they increase
            risk. Poorly structured RFPs can lead to vague vendor responses,
            unclear scoring, and even disputes.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
