"use client";

import { motion } from "framer-motion";

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
            <p className="text-lg text-gray-700 mb-4">
              At most universities and colleges, procurement is a balancing act.
              Faculty want the best tools and services for teaching and research.
              Facilities teams push for cost efficiency and durability. IT worries
              about security and integration. And the finance office? They need
              compliance and clear documentation for every dollar spent.
            </p>
            <p className="text-lg text-gray-700">
              The result is often slow, committee-driven procurement processes
              where well-meaning teams struggle to get from requirements to
              vendor selection — especially when dealing with multiple campuses,
              bilingual communications, and strict funding rules. Paperfly
              changes this dynamic by making the RFP process as structured as
              your course catalog. We help higher education institutions gather
              input across departments, produce bilingual RFPs that vendors can
              actually respond to clearly, and evaluate submissions in a way that
              speeds up — not slows down — decision-making.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-100"
          >
            <img
              src="/images/higher-education-illustration.svg"
              alt="Illustration of a university campus with connected nodes representing procurement collaboration"
              className="w-full h-auto rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              From Committee Rooms to Clear Decisions
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
