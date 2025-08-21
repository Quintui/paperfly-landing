"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Gathering Requirements",
    description:
      "Stakeholders upload their needs to Paperfly, including system features, integration requirements, and budget constraints.",
  },
  {
    title: "RFP Drafting",
    description:
      "Paperfly generates a bilingual RFP covering technical specifications, security requirements, and support expectations.",
  },
  {
    title: "Vendor Q&A Link",
    description:
      "Vendors respond via a structured form, ensuring each submission addresses the same technical and business requirements.",
  },
  {
    title: "Auto-Grading Responses",
    description:
      "Responses are scored based on compliance, integration capability, cost, and support quality.",
  },
  {
    title: "Vendor Selection",
    description:
      "Procurement reviews the top-scoring vendors before bulk notifying all participants of their status.",
  },
];

const outcomes = [
  "RFP creation time reduced by more than half",
  "Vendor responses standardized for easy review",
  "Faster selection with documented scoring for accountability",
];

export function ExampleSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Example: Sourcing a New Point-of-Sale System
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A national retail chain needs a new POS system to integrate with
            inventory management and customer loyalty programs. Procurement must
            work with IT, operations, and finance to define requirements.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="flex items-start mb-8"
              >
                <div className="w-10 h-10 bg-[#005DF2] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 lg:mt-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Outcome</h3>
            <div className="space-y-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle size={16} />
                  </div>
                  <p className="text-lg text-gray-800">{outcome}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
