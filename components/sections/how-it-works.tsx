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
      transition: { duration: 0.6 },
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
          transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
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
          transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
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
      transition: { duration: 0.6 },
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
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Start anywhere—we'll help you finish strong.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#005DF2] transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16 md:space-y-24 relative">
            {/* Step 1 */}

            <Step
              number={1}
              title="Choose Your Template"
              description="Log in, select 'Create RFP' or 'Create RFI,' and enter your project basics."
              detailText="Choose from industry-specific templates designed for your needs, or start with a blank canvas."
              icon={<FileText size={24} />}
            />

            {/* Step 2 */}
            <Step
              number={2}
              title="Extract Key Details"
              description="Upload your notes or past documents. Paperfly intelligently pulls relevant content and pre-fills your draft."
              detailText="Our AI intelligently analyzes your documents and extracts the most relevant information to pre-populate your draft."
              icon={<Upload size={24} />}
              isReversed={true}
            />

            {/* Step 3 */}
            <Step
              number={3}
              title="Generate & Polish"
              description="Receive a complete, editable draft you can customize as needed."
              detailText="Our AI generates a comprehensive draft that you can review, edit, and refine to match your exact requirements."
              icon={<Edit size={24} />}
            />

            {/* Step 4 */}
            <Step
              number={4}
              title="Export & Automate"
              description="Download your document and instantly generate a vendor-ready response form that matches your RFP structure."
              detailText="Export your finalized document and automatically generate a vendor-ready response form that mirrors your RFP structure."
              icon={<Download size={24} />}
              isReversed={true}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
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
