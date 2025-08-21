"use client";

import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-700 mb-6">
              Procurement in higher education is often more complex than in the
              private sector. Universities, colleges, and school boards have to
              manage tight budgets, public accountability, and a wide range of
              procurement needs — from IT infrastructure and facility upgrades
              to academic program services and campus operations.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <span className="font-bold">The problem?</span> RFP creation and
              evaluation processes are still dominated by manual document
              assembly, fragmented stakeholder input, and time-consuming vendor
              evaluation.
            </p>
            <p className="text-lg font-medium text-[#005DF2]">
              Paperfly changes that. We help educational institutions create
              clear, compliant RFPs in English and French, collect vendor
              responses in a structured format, and instantly grade submissions
              as soon as they arrive — ensuring a fair, transparent process for
              every procurement project.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
