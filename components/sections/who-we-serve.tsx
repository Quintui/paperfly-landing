"use client";

import { motion } from "framer-motion";
import {
  Building,
  Building2,
  Heart,
  Users,
  Briefcase,
  FileText,
} from "lucide-react";

export const WhoWeServe = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="who-we-serve" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We help anyone responsible for creating, issuing, or responding to
            RFPs—especially when time and clarity matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
          >
            <div className="h-2 bg-[#005DF2]"></div>
            <div className="p-8">
              <div className="bg-[#005DF2]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Building className="text-[#005DF2]" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Procurement Teams
              </h3>
              <p className="text-gray-700 text-center">
                Managing vendor selection and internal approvals with
                streamlined processes and consistent documentation.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.25 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
          >
            <div className="h-2 bg-[#005DF2]"></div>
            <div className="p-8">
              <div className="bg-[#005DF2]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Briefcase className="text-[#005DF2]" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Agencies & Consultants
              </h3>
              <p className="text-gray-700 text-center">
                Responding to multiple RFPs each month with professional,
                consistent proposals that win business.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
          >
            <div className="h-2 bg-[#005DF2]"></div>
            <div className="p-8">
              <div className="bg-[#005DF2]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Heart className="text-[#005DF2]" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Healthcare & Nonprofits
              </h3>
              <p className="text-gray-700 text-center">
                Meeting compliance and documentation requirements while
                streamlining procurement processes.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
          >
            <div className="h-2 bg-[#005DF2]"></div>
            <div className="p-8">
              <div className="bg-[#005DF2]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Building2 className="text-[#005DF2]" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Small Businesses & Startups
              </h3>
              <p className="text-gray-700 text-center">
                Creating professional-grade proposals without the resources of
                larger organizations.
              </p>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
          >
            <div className="h-2 bg-[#005DF2]"></div>
            <div className="p-8">
              <div className="bg-[#005DF2]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <FileText className="text-[#005DF2]" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                RFP Writers
              </h3>
              <p className="text-gray-700 text-center">
                Managing RFP creation on behalf of their clients with efficiency
                and professional results.
              </p>
            </div>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gradient-to-br from-[#005DF2] to-[#0040a0] rounded-xl overflow-hidden shadow-xl text-white"
          >
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <p className="text-white/90 text-lg italic mb-6 text-center">
                "Whether you're building one RFP a year or one every week,
                Paperfly helps you deliver better work in less time."
              </p>
              <div className="text-center">
                <p className="text-white font-bold">
                  With consistent formatting and vendor alignment built in.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
