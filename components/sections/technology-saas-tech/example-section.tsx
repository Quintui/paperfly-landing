"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Gathering Requirements",
    description:
      "Sales, marketing, IT, and compliance teams submit needs, including integration APIs, data security certifications, and multilingual interface capabilities.",
  },
  {
    title: "RFP Drafting",
    description:
      "Paperfly generates a bilingual RFP covering technical requirements, security compliance, and implementation timelines.",
  },
  {
    title: "Vendor Q&A Link",
    description:
      "Vendors respond through a structured form, ensuring proposals address the same integration, support, and cost criteria.",
  },
  {
    title: "Auto-Grading Responses",
    description:
      "Responses are scored based on functionality, scalability, compliance readiness, and total cost of ownership.",
  },
  {
    title: "Vendor Selection",
    description:
      "The top-scoring vendors are shortlisted for demos, with automated notifications sent to all respondents.",
  },
];

export function ExampleSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Example: Sourcing a New CRM Platform
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-[#005DF2]"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            A rapidly growing SaaS company needs to replace its CRM with a
            platform that supports advanced analytics, integrates with existing
            tools, and scales with user growth.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
                className="flex items-start space-x-4"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#005DF2] text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="w-full rounded-lg bg-gradient-to-br from-[#005DF2] to-[#004acf] p-8 text-white shadow-lg">
              <h3 className="mb-4 text-2xl font-bold">Outcome:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Clear, comparable vendor responses</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Reduced vendor selection time by over 50%</span>
                </li>
                <li className-="flex items-start">
                  <ArrowRight className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Fully documented procurement process for audit readiness</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
