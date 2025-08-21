"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Languages,
  ClipboardList,
  Calculator,
  Users,
  Archive,
  Send,
} from "lucide-react";

const solutions = [
  {
    icon: FileText,
    title: "Non-Profit-Specific Templates",
    description:
      "Start with RFP templates tailored for technology, events, facility management, and more.",
  },
  {
    icon: Languages,
    title: "Bilingual Document Creation",
    description:
      "Instantly generate RFPs in English, French, or both to reach a wider vendor pool.",
  },
  {
    icon: ClipboardList,
    title: "Structured Vendor Q&A Forms",
    description:
      "Ensure all vendors provide comparable answers with auto-generated forms.",
  },
  {
    icon: Calculator,
    title: "Automatic Grading & Ranking",
    description:
      "Vendor submissions are scored against your criteria as they arrive.",
  },
  {
    icon: Users,
    title: "Multi-Stakeholder Collaboration",
    description:
      "Consolidate input from all team members in one draft, with live editing in development.",
  },
  {
    icon: Archive,
    title: "Audit-Ready Procurement Records",
    description:
      "Keep a secure archive of all RFPs, responses, and scoring for compliance.",
  },
  {
    icon: Send,
    title: "Bulk Vendor Notifications",
    description:
      "Inform vendors of their selection status in a single step, saving time.",
  },
];

export const SolutionsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Paperfly Solves These Problems
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Paperfly was designed to help mission-driven organizations run
            procurement processes that are faster, fairer, and more transparent.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-[#005DF2] transition-colors bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#005DF2]/10 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="text-[#005DF2]" size={24} />
                  </div>
                  <CardTitle className="text-xl text-[#005DF2]">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
