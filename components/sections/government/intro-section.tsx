"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, BarChart3 } from "lucide-react";

export function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Modernizing Public Sector Procurement
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Public sector procurement has unique pressures — tight budgets,
              strict compliance rules, bilingual requirements, and the need for
              full transparency. Unfortunately, the RFP creation process is often
              slow, inconsistent, and bogged down by outdated tools like Word
              docs, email chains, and shared drives.
            </p>
            <p className="text-lg text-gray-700">
              Paperfly changes that. We help government agencies create clear,
              compliant RFPs in English and French, collect vendor responses in a
              structured format, and automatically grade each proposal as soon as
              it’s submitted.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-lg space-y-6"
          >
            <h3 className="text-2xl font-bold text-center mb-4 text-[#005DF2]">
              The Result:
            </h3>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#005DF2]/10 rounded-full flex-shrink-0 flex items-center justify-center">
                <Zap className="text-[#005DF2]" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Faster</h4>
                <p className="text-gray-600">
                  A streamlined process from start to finish.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#005DF2]/10 rounded-full flex-shrink-0 flex items-center justify-center">
                <ShieldCheck className="text-[#005DF2]" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">More Transparent</h4>
                <p className="text-gray-600">
                  Clear, consistent data for fair evaluations.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#005DF2]/10 rounded-full flex-shrink-0 flex items-center justify-center">
                <BarChart3 className="text-[#005DF2]" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Easier to Audit</h4>
                <p className="text-gray-600">
                  An organized, accessible record of every step.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
