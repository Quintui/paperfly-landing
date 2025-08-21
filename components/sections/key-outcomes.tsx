"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, Zap } from "lucide-react";

const outcomes = [
  {
    icon: <Zap className="w-6 h-6 text-[#005DF2]" />,
    title: "Faster Turnaround",
    description: "Move from draft to published RFP in hours instead of days.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-[#005DF2]" />,
    title: "Better Vendor Responses",
    description:
      "Structured forms mean fewer missing answers and more comparable proposals.",
  },
  {
    icon: <FileText className="w-6 h-6 text-[#005DF2]" />,
    title: "Consistent Formatting",
    description:
      "Every document is polished and export-ready in Word, PDF, or Google Docs.",
  },
];

export const KeyOutcomes = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Outcomes</h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real results from teams who streamlined their RFP process with
            Paperfly:
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#005DF2]/10 rounded-full mb-4">
                {outcome.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{outcome.title}</h3>
              <p className="text-gray-600">{outcome.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
