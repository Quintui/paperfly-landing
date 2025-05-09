"use client";

import { motion } from "framer-motion";

export const WhoWeAre = () => {
  return (
    <section
      id="who-we-are"
      className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#005DF2]/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#005DF2]/10 rounded-full"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-[#005DF2]">
                  We're Paperfly
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  An AI-powered RFP creation platform built to simplify how
                  organizations write and manage proposals.
                </p>
                <p className="text-gray-700 mb-6">
                  RFPs are essential for vendor selection and procurement—but
                  too often, they're a mess of spreadsheets, inconsistent
                  documents, and email threads. We created Paperfly to solve
                  that.
                </p>
                <p className="text-gray-700">
                  Whether you're a procurement lead, an agency, a small
                  business, or a professional RFP writer, our platform helps you
                  create structured, professional RFPs with speed and clarity.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <div className="bg-[#005DF2] p-8 rounded-xl shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-xl mb-6">
                Eliminate the chaos of RFPs and replace it with control,
                consistency, and smarter workflows.
              </p>
              <div className="flex items-center space-x-4 mt-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                >
                  <span className="text-[#005DF2] font-bold text-xl">1</span>
                </motion.div>
                <p className="text-white/90">Simplify RFP creation</p>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                >
                  <span className="text-[#005DF2] font-bold text-xl">2</span>
                </motion.div>
                <p className="text-white/90">
                  Standardize procurement processes
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                >
                  <span className="text-[#005DF2] font-bold text-xl">3</span>
                </motion.div>
                <p className="text-white/90">Save time and reduce errors</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
