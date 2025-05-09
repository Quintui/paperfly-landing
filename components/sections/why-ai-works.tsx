"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Zap, User } from "lucide-react";

export const WhyAIWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="why-ai-works"
      className="py-16 md:py-24 bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why AI with Paperfly Works
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Because AI should assist you—not replace you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.li variants={itemVariants} className="flex items-start">
                <div className="bg-[#005DF2] p-3 rounded-lg mr-5 flex-shrink-0">
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    You stay in full control of your content
                  </h3>
                  <p className="text-gray-300">
                    Our AI generates content based on your inputs, but you
                    always have the final say. Edit, add, or remove anything to
                    match your exact requirements.
                  </p>
                </div>
              </motion.li>

              <motion.li variants={itemVariants} className="flex items-start">
                <div className="bg-[#005DF2] p-3 rounded-lg mr-5 flex-shrink-0">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Every RFP and response form is editable and customizable
                  </h3>
                  <p className="text-gray-300">
                    Nothing is set in stone. Customize templates, add your
                    branding, and tailor every aspect to your organization's
                    needs.
                  </p>
                </div>
              </motion.li>

              <motion.li variants={itemVariants} className="flex items-start">
                <div className="bg-[#005DF2] p-3 rounded-lg mr-5 flex-shrink-0">
                  <Lock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Your data is private—never used to train external models
                  </h3>
                  <p className="text-gray-300">
                    We take data privacy seriously. Your documents and
                    information remain confidential and are never used to train
                    our AI models.
                  </p>
                </div>
              </motion.li>

              <motion.li variants={itemVariants} className="flex items-start">
                <div className="bg-[#005DF2] p-3 rounded-lg mr-5 flex-shrink-0">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    AI speeds up your workflow without compromising your
                    judgment
                  </h3>
                  <p className="text-gray-300">
                    Our AI handles the tedious parts of RFP creation, freeing
                    you to focus on strategic decisions and quality control.
                  </p>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <div className="relative h-full">
              {/* Background decorative elements */}
              <div className="absolute -z-10 top-1/4 right-1/4 w-32 h-32 bg-[#005DF2]/30 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-1/4 left-1/4 w-40 h-40 bg-[#005DF2]/20 rounded-full blur-3xl"></div>

              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-[#005DF2]">
                    Beyond Faster RFPs
                  </h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Our platform isn't just about faster RFPs. It's about:
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <div className="bg-gray-700/50 p-5 rounded-xl mb-4">
                    <h4 className="text-lg font-bold mb-2">
                      Smarter Decisions
                    </h4>
                    <p className="text-gray-300">
                      Structured data collection means better vendor comparisons
                      and more informed choices.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <div className="bg-gray-700/50 p-5 rounded-xl mb-4">
                    <h4 className="text-lg font-bold mb-2">
                      Clearer Comparisons
                    </h4>
                    <p className="text-gray-300">
                      Standardized response formats make it easy to evaluate
                      vendors side by side.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-700/50 p-5 rounded-xl">
                    <h4 className="text-lg font-bold mb-2">Better Outcomes</h4>
                    <p className="text-gray-300">
                      More thorough RFPs lead to better-aligned vendors and more
                      successful projects.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
