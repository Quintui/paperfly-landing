"use client";

import { motion } from "framer-motion";
import { FileText, Upload, Edit, Download } from "lucide-react";

// Step component with consistent styling and animations
type StepProps = {
  number: number;
  title: string;
  description: string;
  detailText: string;
  icon: React.ReactNode;
  isReversed?: boolean;
};

const Step = ({
  number,
  title,
  description,
  detailText,
  icon,
  isReversed = false,
}: StepProps) => {
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
      {/* Mobile version has a cleaner layout with icon at top */}
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

      {/* Mobile version title and description */}
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

      {/* Desktop version left column */}
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
        <p className="text-gray-700">{description}</p>
      </motion.div>

      {/* Desktop version center icon */}
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

      {/* Desktop version right column / Mobile version detail card */}
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
          <p className="text-gray-700">{detailText}</p>
        </div>
      </motion.div>
    </div>
  );
};

export const HowItWorks = () => {
  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
            HOW IT WORKS
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Start anywhere—finish strong.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#005DF2] transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16 md:space-y-24 relative">
            {/* Step 1 */}
            <Step
              number={1}
              title="Kick-Off"
              description="Start from an industry template or blank slate."
              detailText="Choose an industry-specific template or begin with a blank canvas to kick off your RFP process."
              icon={<FileText size={24} />}
            />

            {/* Step 2 */}
            <Step
              number={2}
              title="Upload Context"
              description="Drop in notes, slide decks, or legacy RFPs; Paperfly extracts key requirements."
              detailText="Upload your notes, presentations, or previous RFPs—Paperfly's AI extracts the key requirements and context for you."
              icon={<Upload size={24} />}
              isReversed={true}
            />

            {/* Step 3 */}
            <Step
              number={3}
              title="Generate & Refine"
              description="Auto-drafted sections + suggestions for scope, timelines, evaluation criteria."
              detailText="Receive an auto-drafted RFP with suggested sections, scope, timelines, and evaluation criteria—ready for your review and edits."
              icon={<Edit size={24} />}
            />

            {/* Step 4 */}
            <Step
              number={4}
              title="Publish & Share"
              description="Export a polished RFP and spin up a matching vendor Q&A portal."
              detailText="Export your finalized RFP and instantly create a vendor Q&A portal that matches your document structure."
              icon={<Download size={24} />}
              isReversed={true}
            />

            {/* Step 5 */}
            <Step
              number={5}
              title="Score & Decide"
              description="Centralized rubric scoring speeds consensus and audit-ready documentation."
              detailText="Use a centralized scoring rubric to drive consensus and generate audit-ready documentation for your decision process."
              icon={<FileText size={24} />}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-24"
        >
          <p className="text-xl font-medium text-[#005DF2]">
            No messy spreadsheets. No mismatched documents. Just organized,
            actionable proposals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
