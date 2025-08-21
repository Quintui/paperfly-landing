"use client";

import { motion } from "framer-motion";
import {
  Shield, 
  Users, 
  FileText, 
  Briefcase, 
  Banknote 
} from "lucide-react";

const challenges = [
  {
    icon: <Shield className="w-8 h-8 text-[#005DF2]" />,
    title: "Strict Compliance",
    description:
      "Navigating requirements like HIPAA, PHIPA, and other regional privacy laws.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#005DF2]" />,
    title: "Multi-Stakeholder Input",
    description:
      "Aligning input from clinical, administrative, IT, and legal teams.",
  },
  {
    icon: <FileText className="w-8 h-8 text-[#005DF2]" />,
    title: "Technical Specifications",
    description: "Requiring precision in documenting highly complex needs.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-[#005DF2]" />,
    title: "Vendor Diversity",
    description:
      "Managing suppliers from large multinationals to niche medical startups.",
  },
  {
    icon: <Banknote className="w-8 h-8 text-[#005DF2]" />,
    title: "Budget Scrutiny",
    description:
      "Justifying every expenditure with detailed evaluation records.",
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
            Why Healthcare RFPs Are Complex
          </h2>
          <p className="text-lg text-gray-600">
            These challenges slow down procurement and increase the risk of
            miscommunication, vendor mismatches, and costly delays.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {challenge.title}
              </h3>
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
