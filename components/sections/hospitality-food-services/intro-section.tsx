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
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            In hospitality and food services, your vendors are part of your guest
            experience. Whether it’s sourcing a catering partner for a major
            conference, upgrading point-of-sale systems for a hotel chain, or
            finding a facilities provider for a stadium concession area —
            procurement decisions directly affect customer satisfaction, revenue,
            and brand reputation.
          </p>
          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            Yet in an industry built on service and speed, the RFP process is
            often slow, fragmented, and unnecessarily complicated. Vendor
            requirements live in scattered emails. Proposals arrive in every
            format imaginable. And decision-making drags on while competitors
            move faster.
          </p>
          <p className="mt-6 text-lg md:text-xl font-semibold text-gray-900 leading-relaxed">
            Paperfly streamlines hospitality and food service procurement by
            making it easy to create structured, bilingual RFPs, collect
            comparable vendor proposals, and evaluate them instantly with
            automated scoring.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
