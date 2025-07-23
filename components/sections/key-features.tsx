"use client";

import { motion } from "framer-motion";
import { Upload, Zap, PenTool, FileText } from "lucide-react";

// Feature card component for better maintainability
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#005DF2]/30"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
        viewport={{ once: true }}
        className="bg-[#005DF2]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-[#005DF2]/20"
      >
        <motion.div
          whileHover={{ rotate: 10 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="text-[#005DF2]"
        >
          {icon}
        </motion.div>
      </motion.div>
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: index * 0.05 + 0.15 }}
        viewport={{ once: true }}
        className="text-xl font-bold mb-3"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
        viewport={{ once: true }}
        className="text-gray-700"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export const KeyFeatures = () => {
  // Outcomes data for easy management
  const outcomes = [
    {
      icon: <Upload size={24} />, // You can change icons as needed
      title: "Save ~30–50% authoring & review time vs. manual documents.",
    },
    {
      icon: <Zap size={24} />,
      title:
        "Decide up to 2× faster with built-in scoring and side-by-side comparisons.",
    },
    {
      icon: <FileText size={24} />,
      title:
        "100% template consistency across exports (Word, PDF, Google Docs).",
    },
  ];

  return (
    <section
      id="key-features"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute md:block hidden -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">KEY OUTCOMES</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-[#005DF2] mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#005DF2]/30 flex flex-col items-center text-center"
            >
              <div className="bg-[#005DF2]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <div className="text-[#005DF2]">{outcome.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{outcome.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <span className="inline-block bg-[#005DF2]/10 text-[#005DF2] font-medium px-4 py-2 rounded-full">
            Ranges reflect results from early customer and beta team usage;
            actual savings vary by process maturity.
          </span>
        </div>
      </div>
    </section>
  );
};
