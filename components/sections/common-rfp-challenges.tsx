"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export const CommonRFPChallenges = () => {
  const challenges = [
    "Inconsistent formatting that leads to messy vendor submissions",
    "Multi-department bottlenecks slowing down finalization of requirements",
    "Compliance oversights in bilingual or regulated environments",
    "Time wasted manually organizing and scoring vendor responses",
    "Subjective evaluations without standardized scoring rubrics",
  ];

  return (
    <section id="common-challenges" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Common RFP Challenges We Solve</h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Across industries, procurement teams face the same frustrations. Paperfly addresses all of these challenges by combining document creation, structured vendor response collection, instant grading, and bulk vendor notifications in one platform.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0">
                    <XCircle className="w-6 h-6 text-red-500 mr-3 mt-1" />
                  </div>
                  <span className="text-gray-700 text-lg">{challenge}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
