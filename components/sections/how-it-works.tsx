"use client";

import { motion } from "framer-motion";
import { FileText, Upload, Edit, Download } from "lucide-react";

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
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#005DF2]/20 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16 md:space-y-24 relative">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="md:w-5/12 mb-8 md:mb-0 md:pr-12 md:text-right"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#005DF2]">
                  Choose Your Template
                </h3>
                <p className="text-gray-700">
                  Log in, select "Create RFP" or "Create RFI," and enter your
                  project basics.
                </p>
              </motion.div>

              <div className="relative z-10 mb-8 md:mb-0">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-[#005DF2] rounded-full flex items-center justify-center text-white"
                >
                  <FileText size={24} />
                </motion.div>
              </div>

              <motion.div
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="md:w-5/12 md:pl-12"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <p className="text-gray-700">
                    Choose from industry-specific templates designed for your
                    needs, or start with a blank canvas.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="md:w-5/12 mb-8 md:mb-0 md:pr-12 md:text-right order-1 md:order-1"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <p className="text-gray-700">
                    Our AI intelligently analyzes your documents and extracts
                    the most relevant information to pre-populate your draft.
                  </p>
                </div>
              </motion.div>

              <div className="relative z-10 mb-8 md:mb-0 order-2 md:order-2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-[#005DF2] rounded-full flex items-center justify-center text-white"
                >
                  <Upload size={24} />
                </motion.div>
              </div>

              <motion.div
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="md:w-5/12 md:pl-12 order-3 md:order-3"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#005DF2]">
                  Extract Key Details
                </h3>
                <p className="text-gray-700">
                  Upload your notes or past documents. Paperfly intelligently
                  pulls relevant content and pre-fills your draft.
                </p>
              </motion.div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="md:w-5/12 mb-8 md:mb-0 md:pr-12 md:text-right"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#005DF2]">
                  Generate & Polish
                </h3>
                <p className="text-gray-700">
                  Receive a complete, editable draft you can customize as
                  needed.
                </p>
              </motion.div>

              <div className="relative z-10 mb-8 md:mb-0">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-[#005DF2] rounded-full flex items-center justify-center text-white"
                >
                  <Edit size={24} />
                </motion.div>
              </div>

              <motion.div
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="md:w-5/12 md:pl-12"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <p className="text-gray-700">
                    Our AI generates a comprehensive draft that you can review,
                    edit, and refine to match your exact requirements.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="md:w-5/12 mb-8 md:mb-0 md:pr-12 md:text-right order-1 md:order-1"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <p className="text-gray-700">
                    Export your finalized document and automatically generate a
                    vendor-ready response form that mirrors your RFP structure.
                  </p>
                </div>
              </motion.div>

              <div className="relative z-10 mb-8 md:mb-0 order-2 md:order-2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-[#005DF2] rounded-full flex items-center justify-center text-white"
                >
                  <Download size={24} />
                </motion.div>
              </div>

              <motion.div
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="md:w-5/12 md:pl-12 order-3 md:order-3"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#005DF2]">
                  Export & Automate
                </h3>
                <p className="text-gray-700">
                  Download your document and instantly generate a vendor-ready
                  response form that matches your RFP structure.
                </p>
              </motion.div>
            </div>
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
