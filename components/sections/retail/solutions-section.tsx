"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText, Languages, Sliders, Users, Archive, Bell } from "lucide-react";

const solutions = [
  {
    icon: <FileText className="w-7 h-7 text-white" />,
    title: "Retail-Specific Templates",
    description: "Start with RFP templates built for retail categories like merchandising, logistics, store operations, and technology.",
  },
  {
    icon: <Languages className="w-7 h-7 text-white" />,
    title: "Bilingual Document Creation",
    description: "Create RFPs in English, French, or both without duplicating work.",
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-white" />,
    title: "Structured Vendor Q&A Forms",
    description: "Each RFP includes an auto-generated vendor form that matches your RFP’s structure, ensuring comparable responses.",
  },
  {
    icon: <Sliders className="w-7 h-7 text-white" />,
    title: "Automatic Grading & Ranking",
    description: "Vendor submissions are scored immediately against your criteria — producing a ranked shortlist by percentage score.",
  },
  {
    icon: <Users className="w-7 h-7 text-white" />,
    title: "Multi-Department Collaboration",
    description: "Gather input from merchandising, operations, marketing, and IT into a single RFP draft.",
  },
  {
    icon: <Archive className="w-7 h-7 text-white" />,
    title: "Audit-Ready Records",
    description: "Maintain a secure record of all RFPs, responses, and scoring for accountability and vendor history.",
  },
  {
    icon: <Bell className="w-7 h-7 text-white" />,
    title: "Bulk Vendor Notifications",
    description: "Notify vendors whether they’ve been shortlisted or not — directly from the Paperfly interface.",
  },
];

export function SolutionsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Paperfly Solves These Problems
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Paperfly streamlines procurement for retail by delivering speed, structure, and vendor clarity.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-[#005DF2] p-8 rounded-xl text-white shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 bg-white/20 rounded-full p-3 w-fit">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
              <p className="text-white/90">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
