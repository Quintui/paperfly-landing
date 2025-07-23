"use client";

import { motion } from "framer-motion";
import { Check, FileText, Pen, Upload, Zap } from "lucide-react";

export const WhatWeDo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section id="what-we-do" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">WHY PAPERFLY</h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Clarity over complexity. Outcomes over paperwork.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: The Pain */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <div className="relative h-full">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#005DF2]/5 rounded-full blur-3xl"></div>
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl h-full">
                <h3 className="text-2xl font-bold mb-6 text-[#005DF2]">
                  The Pain
                </h3>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="space-y-6"
                >
                  <motion.li
                    variants={itemVariants}
                    className="flex items-center"
                  >
                    <div className="bg-[#005DF2]/10 p-2 rounded-full mr-4 flex-shrink-0">
                      <FileText className="text-[#005DF2]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">
                        Messy notes & outdated docs
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-center"
                  >
                    <div className="bg-[#005DF2]/10 p-2 rounded-full mr-4 flex-shrink-0">
                      <Pen className="text-[#005DF2]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">
                        Vague vendor instructions
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-center"
                  >
                    <div className="bg-[#005DF2]/10 p-2 rounded-full mr-4 flex-shrink-0">
                      <Upload className="text-[#005DF2]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">
                        Spreadsheet scoring chaos
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-center"
                  >
                    <div className="bg-[#005DF2]/10 p-2 rounded-full mr-4 flex-shrink-0">
                      <Zap className="text-[#005DF2]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">
                        Low vendor response rates
                      </p>
                    </div>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </motion.div>

          {/* Right: Paperfly Fix */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 flex items-center"
          >
            <div className="bg-gradient-to-br from-[#005DF2] to-[#0040a0] p-10 rounded-2xl shadow-xl text-white h-full w-full">
              <h3 className="text-2xl font-bold mb-6">Paperfly Fix</h3>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <motion.li
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <div className="bg-white/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <Upload className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium">
                      Guided, AI-assisted RFP creation flow
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <div className="bg-white/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <Zap className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium">
                      Auto-generated, project-specific Q&A form
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <div className="bg-white/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <Pen className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium">
                      Rubric-based scoring workspace (weights, criteria,
                      stakeholders)
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <div className="bg-white/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <FileText className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium">
                      Clean, shareable submission link—no account required
                    </p>
                  </div>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
