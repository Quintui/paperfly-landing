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
  // Features data for easy management
  const features = [
    {
      icon: <Upload size={24} />,
      title: "AI-Powered Prefill",
      description:
        "Upload meeting notes or documents — our AI extracts key details to auto-fill your RFP or RFI.",
    },
    {
      icon: <Zap size={24} />,
      title: "Documents in Seconds",
      description: "Generate a complete, professional draft in under a minute.",
    },
    {
      icon: <PenTool size={24} />,
      title: "Edit, Don't Write",
      description:
        "Review, customize, or delete sections — no need to start from scratch.",
    },
    {
      icon: <FileText size={24} />,
      title: "Instant Vendor Forms",
      description:
        "Automatically turn your final document into a vendor-ready questionnaire.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-[#005DF2] mx-auto mb-8"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Accelerate Procurement — Not Paperwork. Smart tools built to
            eliminate busywork and boost compliance.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Additional highlight */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <span className="inline-block bg-[#005DF2]/10 text-[#005DF2] font-medium px-4 py-2 rounded-full">
            Trusted by procurement teams across industries
          </span>
        </motion.div> */}
      </div>
    </section>
  );
};
