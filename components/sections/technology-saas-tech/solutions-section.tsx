"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const solutions = [
  {
    title: "Tech-Specific Templates",
    description:
      "Start with RFP templates tailored for SaaS platforms, IT services, cybersecurity tools, and integration projects.",
  },
  {
    title: "Bilingual Document Creation",
    description:
      "Instantly generate English, French, or dual-language RFPs from a single draft.",
  },
  {
    title: "Structured Vendor Q&A Forms",
    description:
      "Each RFP includes an auto-generated vendor form that ensures responses are complete, consistent, and easy to compare.",
  },
  {
    title: "Automatic Grading & Ranking",
    description:
      "Vendor submissions are scored as they arrive, with percentage rankings based on criteria like compliance, scalability, and cost.",
  },
  {
    title: "Multi-Department Collaboration",
    description:
      "Consolidate requirements from product managers, IT leaders, compliance officers, and procurement into one editable draft.",
  },
  {
    title: "Security-Centric Procurement",
    description:
      "Include security and compliance rubrics in every RFP to vet vendors before shortlisting.",
  },
  {
    title: "Bulk Vendor Notifications",
    description:
      "Notify vendors of their status instantly without managing individual email threads.",
  },
];

export function SolutionsSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            How Paperfly Solves These Problems
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-[#005DF2]"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Paperfly is designed for the speed and complexity of technology
            procurement.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="mt-1 h-6 w-6 flex-shrink-0 text-[#005DF2]">
                <CheckCircle />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {solution.title}
                </h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
