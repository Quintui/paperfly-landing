"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const WhyPaperfly = () => {
  const features = [
    {
      title: "Bilingual Generation",
      description: "Instantly produce RFPs in English, French, or both for bilingual compliance.",
    },
    {
      title: "Auto-Generated Vendor Q&A Link",
      description: "Each RFP includes a secure, structured Q&A form for vendors to submit responses.",
    },
    {
      title: "Instant Grading & Scoring",
      description: "Vendor responses are auto-graded on submission, with percentage scores out of 100.",
    },
    {
      title: "Team Collaboration",
      description: "Share drafts for feedback and edits; sequential editing now, live editing coming soon.",
    },
  ];

  return (
    <section id="why-paperfly" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Paperfly</h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Procurement projects often stall when RFP creation becomes a time-consuming, inconsistent process. Paperfly replaces the blank page with a guided, AI-assisted workflow that ensures every document is clear, compliant, and tailored to your needs — and gives vendors a structured way to respond right away.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#005DF2]/10 rounded-full mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#005DF2]" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
