"use client";

import { motion } from "framer-motion";
import { Zap, Target, CheckCircle, Languages } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Speed Without Sacrificing Accuracy",
  },
  {
    icon: Target,
    title: "Supplier-Friendly Structured Responses",
  },
  {
    icon: CheckCircle,
    title: "Objective, Transparent Scoring",
  },
  {
    icon: Languages,
    title: "Bilingual Communication for International Sourcing",
  },
];

export function WhyPaperflySection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Paperfly for Manufacturing Procurement?
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Generic procurement tools don’t address the front-end of supplier
            sourcing — creating structured, precise RFPs and collecting vendor
            responses in a way that’s easy to evaluate.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-10 h-10 bg-[#005DF2] rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
