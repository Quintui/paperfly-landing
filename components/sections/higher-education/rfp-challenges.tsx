"use client";

import { motion } from "framer-motion";
import { Mail, FileDiff, FileCheck, Languages, AlertTriangle } from "lucide-react";

const challenges = [
  {
    icon: <Mail className="w-8 h-8 text-[#005DF2]" />,
    title: "Lost in Email Chains",
    description:
      "RFP drafts get lost in email chains between faculty, facilities, and administration.",
  },
  {
    icon: <FileDiff className="w-8 h-8 text-[#005DF2]" />,
    title: "Inconsistent Vendor Formats",
    description:
      "Vendors submit proposals in wildly different formats, making apples-to-apples comparisons almost impossible.",
  },
  {
    icon: <FileCheck className="w-8 h-8 text-[#005DF2]" />,
    title: "Compliance Gaps",
    description:
      "Grant-funded projects stall because requirements aren’t fully documented in compliance-ready language.",
  },
  {
    icon: <Languages className="w-8 h-8 text-[#005DF2]" />,
    title: "Bilingual Bottlenecks",
    description:
      "Translation of procurement documents for bilingual regions slows down the entire process.",
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-[#005DF2]" />,
    title: "Project Delays",
    description:
      "Every delay means postponed projects, missed budget cycles, and — in some cases — lost funding.",
  },
];

export function RfpChallengesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Real Procurement Problems on Campus
          </h2>
          <p className="text-lg text-gray-600">
            If you’ve worked on a university RFP, this probably sounds familiar:
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center h-full"
            >
              <div className="mb-4 p-3 bg-blue-100 rounded-full">
                {challenge.icon}
              </div>
              <p className="text-gray-700 text-base">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
