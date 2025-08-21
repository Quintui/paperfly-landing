"use client";

import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Yet many financial institutions still manage RFP creation and vendor
            evaluation through fragmented systems, manual processes, and
            unstructured vendor submissions — introducing unnecessary risk and
            slowing decision-making.
            <br />
            <br />
            <span className="font-semibold text-[#005DF2]">
              Paperfly changes that.
            </span>{" "}
            Our platform helps financial institutions create compliant, bilingual
            RFPs, collect vendor responses in a standardized format, and
            instantly score submissions to make vendor selection faster, clearer,
            and more defensible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
