"use client";

import { motion } from "framer-motion";
import { FileText, Check, Bell, Award } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Step 1 – Gathering Requirements",
    description:
      "Procurement gathers input from engineering, legal, and finance teams. Instead of merging multiple Word docs, they upload all notes into Paperfly.",
  },
  {
    icon: FileText,
    title: "Step 2 – RFP Drafting",
    description:
      "Paperfly generates a bilingual draft, applying industry best practices for public works projects.",
  },
  {
    icon: FileText,
    title: "Step 3 – Vendor Q&A Link",
    description:
      "The RFP includes an auto-generated Q&A form. Vendors receive a link to fill in structured fields that align with the RFP.",
  },
  {
    icon: Check,
    title: "Step 4 – Auto-Grading Responses",
    description:
      "As vendor submissions come in, they are graded instantly and ranked by percentage score. Procurement staff can still review full submissions if needed.",
  },
  {
    icon: Bell,
    title: "Step 5 – Notifications",
    description:
      'The team uses Paperfly’s bulk notification feature to inform vendors of their status — all without manual email merging.',
  },
];

const outcomes = [
  "RFP completed in 2 days instead of 2 weeks",
  "All responses in a consistent format",
  "Scoring completed instantly upon submission",
  "Bilingual compliance maintained",
];

export function CityRfpExample() {
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
            Example: How Paperfly Works for a City RFP
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Scenario: A mid-sized Canadian city needs to issue an RFP for a
            public works project requiring bilingual documentation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-[#005DF2]/10 rounded-full flex-shrink-0 flex items-center justify-center">
                  <step.icon className="text-[#005DF2]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-lg"
          >
            <div className="flex items-center justify-center mb-6">
              <Award className="text-[#005DF2]" size={48} />
            </div>
            <h3 className="text-2xl font-bold text-center mb-6">Outcome:</h3>
            <ul className="space-y-4">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="text-green-500" />
                  <span className="text-lg text-gray-800">{outcome}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
