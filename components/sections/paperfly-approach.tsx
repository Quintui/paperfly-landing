"use client";

import { motion } from "framer-motion";
import { FilePlus2, UploadCloud, Bot, Link2, CheckSquare, Bell } from "lucide-react";

type StepProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  isReversed?: boolean;
};

const Step = ({ title, description, icon, isReversed = false }: StepProps) => {
  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      className={`flex flex-col md:flex-row justify-center items-center ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="relative z-10 mb-6 md:mb-0 md:hidden flex justify-center w-full">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          className="w-20 h-20 bg-[#005DF2] rounded-full flex items-center justify-center text-white relative z-20"
        >
          {icon}
        </motion.div>
      </div>

      <motion.div
        variants={stepVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center md:text-left mb-6 md:hidden w-full"
      >
        <h3 className="text-2xl font-bold mb-3 text-[#005DF2]">{title}</h3>
        <p className="text-gray-700 px-4">{description}</p>
      </motion.div>

      <motion.div
        variants={stepVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`hidden md:block md:w-5/12 mb-8 md:mb-0 ${
          isReversed ? "md:pl-12" : "md:pr-12 md:text-right"
        }`}
      >
        <h3 className="text-2xl font-bold mb-4 text-[#005DF2]">{title}</h3>
      </motion.div>

      <div className="relative z-10 mb-8 md:mb-0 hidden md:block">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          className="w-16 h-16 bg-[#005DF2] rounded-full flex items-center justify-center text-white relative z-20"
        >
          {icon}
        </motion.div>
      </div>

      <motion.div
        variants={stepVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`w-full md:w-5/12 ${
          isReversed ? "md:pr-12 md:text-right" : "md:pl-12"
        }`}
      >
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <p className="text-gray-700">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const steps = [
  {
    icon: <FilePlus2 size={24} />,
    title: "Start Your Draft",
    description:
      "Begin with an industry-specific template or a blank slate. Every RFP is customized to your project’s needs.",
  },
  {
    icon: <UploadCloud size={24} />,
    title: "Collect Context",
    description:
      "Upload notes, presentations, or previous RFPs. Paperfly extracts requirements so nothing gets missed.",
  },
  {
    icon: <Bot size={24} />,
    title: "Generate & Refine",
    description:
      "Instantly create a complete draft with editable sections, scope, timelines, and evaluation criteria.",
  },
  {
    icon: <Link2 size={24} />,
    title: "Publish with a Vendor Q&A Link",
    description:
      "Alongside your RFP, Paperfly generates a secure vendor Q&A form — no vendor account needed.",
  },
  {
    icon: <CheckSquare size={24} />,
    title: "Auto-Grade Vendor Responses",
    description:
      "As responses come in, they’re scored instantly against your chosen criteria. You still have full control to review details.",
  },
  {
    icon: <Bell size={24} />,
    title: "Notify Vendors in Bulk",
    description:
      "Inform selected and non-selected vendors with one click — professional, consistent, and timely.",
  },
];

export const PaperflyApproach = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Paperfly Approach
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Paperfly transforms the RFP process with an intelligent, guided
            workflow:
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#005DF2] transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16 md:space-y-24 relative">
            {steps.map((step, index) => (
              <Step
                key={index}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

