"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Gathering Requirements",
    description:
      "Engineering, operations, and finance upload their requirements into Paperfly for consolidation.",
  },
  {
    title: "RFP Drafting",
    description:
      "Paperfly generates a bilingual RFP that includes performance specifications, maintenance requirements, and warranty terms.",
  },
  {
    title: "Supplier Q&A Link",
    description:
      "Suppliers receive a structured response form to ensure consistent answers to every technical and commercial question.",
  },
  {
    title: "Auto-Grading Responses",
    description:
      "Responses are scored against the manufacturer’s rubric, factoring in technical fit, lead time, warranty, and cost.",
  },
  {
    title: "Vendor Selection",
    description:
      "The procurement team reviews the top-scoring suppliers, then uses bulk notifications to communicate final decisions.",
  },
];

const outcomes = [
  "RFP created in 3 days instead of 2 weeks",
  "Responses scored instantly for side-by-side comparison",
  "Faster contract award with documented evaluation for audit purposes",
];

export function ProcurementExampleSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Example: Industrial Equipment Procurement
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A mid-sized manufacturer needs to procure new CNC machines from
            multiple suppliers. Procurement must capture requirements from
            engineering, operations, and finance, while ensuring all vendors
            provide detailed technical specifications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div
              className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"
              aria-hidden="true"
            ></div>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-start mb-8"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-[#005DF2] rounded-full flex items-center justify-center text-white font-bold z-10">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-50 p-8 rounded-lg border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-[#005DF2] mb-6">Outcome</h3>
            <ul className="space-y-4">
              {outcomes.map((outcome, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  className="flex items-start"
                >
                  <CheckCircle
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-lg text-gray-800">{outcome}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
