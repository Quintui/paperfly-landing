"use client";

import { motion } from "framer-motion";
import { AlertCircle, Bot, MailQuestion, Scale } from "lucide-react";

const problems = [
  {
    icon: <MailQuestion className="w-6 h-6 text-red-500" />,
    title: "Scattered Requirements",
    description: "Hours lost chasing details across emails and meetings.",
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-red-500" />,
    title: "Vague Requests",
    description: "Generic templates lead to unclear vendor answers.",
  },
  {
    icon: <Scale className="w-6 h-6 text-red-500" />,
    title: "Spreadsheet Scoring",
    description: "Inconsistent evaluations and drawn-out decisions.",
  },
  {
    icon: <Bot className="w-6 h-6 text-red-500" />,
    title: "Feedback Bottlenecks",
    description: "Multiple stakeholders slow approvals.",
  },
];

export const ProcurementProblem = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Procurement Problem
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Manual RFP creation wastes time and increases risk:
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-full mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
