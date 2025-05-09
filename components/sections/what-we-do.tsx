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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Paperfly turns ideas, outlines, and old templates into complete,
            professional RFPs—plus the tools to manage responses with precision.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
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
                  With Paperfly, you can:
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
                    className="flex items-start"
                  >
                    <div className="bg-[#005DF2]/10 p-2 rounded-full mr-4 flex-shrink-0">
                      <Upload className="text-[#005DF2]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">
                        Upload notes, past documents, or just start from scratch
                      </p>
                    </div>
                  </motion.li>

                  <motion.li
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="bg-[#005DF2]/10 p-2 rounded-full mr-4 flex-shrink-0">
                      <Zap className="text-[#005DF2]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">
                        Use AI to generate RFPs tailored to your industry and
                        project type
                      </p>
                    </div>
                  </motion.li>

                  <motion.li
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="bg-[#005DF2]/10 p-2 rounded-full mr-4 flex-shrink-0">
                      <Pen className="text-[#005DF2]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">
                        Customize with editable templates, section builders, and
                        collaboration tools
                      </p>
                    </div>
                  </motion.li>

                  <motion.li
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="bg-[#005DF2]/10 p-2 rounded-full mr-4 flex-shrink-0">
                      <FileText className="text-[#005DF2]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">
                        Export in clean formats like Word, PDF, or Google Docs
                      </p>
                    </div>
                  </motion.li>

                  <motion.li
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="bg-[#005DF2]/10 p-2 rounded-full mr-4 flex-shrink-0">
                      <Check className="text-[#005DF2]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">
                        Automatically generate a custom Q&A form that matches
                        your RFP structure
                      </p>
                    </div>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 flex items-center"
          >
            <div className="bg-gradient-to-br from-[#005DF2] to-[#0040a0] p-10 rounded-2xl shadow-xl text-white h-full w-full">
              <h3 className="text-2xl font-bold mb-6">
                You're not just writing faster.
              </h3>
              <h3 className="text-3xl font-bold mb-8">
                You're evaluating smarter.
              </h3>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8"
              >
                <p className="text-white/90 text-lg">
                  Our platform streamlines the entire RFP lifecycle—from
                  creation to vendor selection—saving you time while improving
                  decision quality.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-between"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">85%</div>
                  <p className="text-white/80 text-sm">Time Saved</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">3x</div>
                  <p className="text-white/80 text-sm">Faster Decisions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-white/80 text-sm">Consistency</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
