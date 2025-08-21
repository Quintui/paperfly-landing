"use client";

import { motion } from "framer-motion";
import { Languages, Files, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    icon: <Languages className="w-6 h-6 text-[#005DF2]" />,
    title: "Bilingual ENG/FR Support",
    description: "Publish in both languages without doubling the work.",
  },
  {
    icon: <Files className="w-6 h-6 text-[#005DF2]" />,
    title: "Structured Vendor Submissions",
    description: "Comparable answers make scoring easier.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#005DF2]" />,
    title: "Audit-Ready Records",
    description: "Keep clear documentation for compliance.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#005DF2]" />,
    title: "Faster Consensus",
    description: "Shared rubric scoring means decisions happen sooner.",
  },
];

export const WhyChoosePaperfly = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Teams Choose Paperfly
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Paperfly is designed to address the real-world challenges of public
            and private sector procurement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#005DF2]/10 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
