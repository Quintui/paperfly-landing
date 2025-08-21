"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Step 1 – Gathering Requirements",
    description:
      "Each department submits requirements to Paperfly, including security, compliance, and operational needs.",
  },
  {
    title: "Step 2 – RFP Drafting",
    description:
      "Paperfly generates a bilingual RFP covering all technical, compliance, and support specifications.",
  },
  {
    title: "Step 3 – Vendor Q&A Link",
    description:
      "Vendors respond via a structured online form, ensuring their answers directly match the RFP criteria.",
  },
  {
    title: "Step 4 – Auto-Grading Responses",
    description:
      "Responses are scored instantly based on compliance, security readiness, functionality, and cost.",
  },
  {
    title: "Step 5 – Vendor Selection",
    description:
      "Top vendors are shortlisted for presentations. The team uses bulk notifications to inform vendors of their status.",
  },
];

export function ExampleSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Example: Core Banking Software RFP
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A mid-sized credit union needs to upgrade its core banking system.
            The procurement process must involve IT security, compliance,
            operations, and finance teams — and ensure the new vendor meets
            strict data security standards.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
                className="flex items-start mb-6"
              >
                <div className="w-8 h-8 bg-[#005DF2] text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-[#005DF2]">
              Outcome
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={24} />
                <p className="text-lg">
                  RFP creation time reduced by <span className="font-bold">60%</span>
                </p>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={24} />
                <p className="text-lg">
                  All responses in a standardized format for easy review
                </p>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={24} />
                <p className="text-lg">
                  Compliance documentation ready for audit
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
