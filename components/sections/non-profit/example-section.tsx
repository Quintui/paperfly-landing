"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Gathering Requirements",
    description:
      "Event, operations, and finance teams upload their needs into Paperfly, including budget, timeline, and compliance requirements.",
  },
  {
    title: "RFP Drafting",
    description:
      "Paperfly generates a bilingual RFP covering all event specifications, sustainability requirements, and community impact considerations.",
  },
  {
    title: "Vendor Q&A Link",
    description:
      "Vendors respond via a structured form, ensuring their proposals address every requirement in the same format.",
  },
  {
    title: "Auto-Grading Responses",
    description:
      "Responses are scored based on experience, community alignment, cost, and execution capability.",
  },
  {
    title: "Vendor Selection",
    description:
      "Top vendors are shortlisted, with bulk notifications sent to all participants through Paperfly.",
  },
];

export const ExampleSection = () => {
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
            Example: Event Management Services RFP
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A national non-profit is organizing its annual fundraising gala.
            Procurement must source an event management company to handle venue
            coordination, catering, AV equipment, and decor.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              {steps.map((step, index) => (
                <div key={index} className="flex items-start mb-8 relative">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#005DF2] rounded-full flex items-center justify-center text-white font-bold z-10">
                    {index + 1}
                  </div>
                  <div className="ml-6">
                    <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-xl border border-gray-200"
          >
            <h3 className="text-2xl font-bold mb-6">Outcome</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>
                  RFP created in a fraction of the typical time, freeing up staff
                  for mission-focused work.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>
                  Vendor responses were perfectly aligned and easy to compare,
                  leading to a confident decision.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>
                  The transparent process was fully documented for board and
                  donor reporting, ensuring accountability.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
