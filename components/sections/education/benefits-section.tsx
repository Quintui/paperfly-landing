"use client";

import { motion } from "framer-motion";
import { ThumbsUp, ShieldCheck, Zap, Award } from "lucide-react";

const benefits = [
  {
    icon: <Zap className="w-8 h-8 text-[#005DF2]" />,
    title: "Faster Procurement Cycles",
    description:
      "Reduce the time it takes to draft, issue, and evaluate RFPs, so you can get critical projects moving faster.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#005DF2]" />,
    title: "Improved Compliance & Transparency",
    description:
      "Maintain a clear, auditable trail for every procurement project, ensuring fairness and compliance with public sector rules.",
  },
  {
    icon: <Award className="w-8 h-8 text-[#005DF2]" />,
    title: "Better Vendor Selection",
    description:
      "Structured responses and automated scoring help you identify the best-fit vendors based on objective, consistent criteria.",
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-[#005DF2]" />,
    title: "Reduced Administrative Burden",
    description:
      "Free up your procurement team from manual tasks so they can focus on strategic sourcing and vendor management.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Benefits of Automating Your RFP Process
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start space-x-6 p-6"
            >
              <div className="flex-shrink-0 mt-1 p-3 bg-blue-100 rounded-full">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
