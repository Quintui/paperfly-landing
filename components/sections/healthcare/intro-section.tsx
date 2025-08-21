"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Challenge of High-Stakes Healthcare Procurement
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Healthcare procurement is critical. Every RFP can impact patient
              care, from securing medical equipment to implementing life-saving
              technology. Yet, the process is often slow, fragmented, and
              riddled with compliance risks from disjointed multi-department
              requirements.
            </p>
            <p className="text-lg text-gray-700">
              Paperfly streamlines this by helping healthcare organizations
              create structured, compliant RFPs, standardize vendor responses,
              and automate grading for faster, clearer, and safer procurement
              decisions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Result?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#005DF2] mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-800">
                  <span className="font-semibold">Faster Decisions:</span> Reduce
                  procurement timelines significantly.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#005DF2] mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-800">
                  <span className="font-semibold">Clearer Responses:</span> Get
                  standardized, easy-to-compare vendor submissions.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#005DF2] mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-800">
                  <span className="font-semibold">Reduced Risk:</span> Enhance
                  compliance and create audit-ready documentation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
