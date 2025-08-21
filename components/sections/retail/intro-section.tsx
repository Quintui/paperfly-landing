"use client";

import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Unfortunately, many retailers still manage RFPs using outdated templates, email chains, and unstructured vendor submissions — slowing down decision-making and increasing the risk of poor vendor fits.
          </p>
          <p className="text-lg md:text-xl text-gray-900 font-semibold leading-relaxed">
            Paperfly changes that. Our platform enables retailers to create clear, bilingual RFPs, collect supplier responses in a consistent format, and automatically score submissions — giving you the speed you need without sacrificing decision quality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
