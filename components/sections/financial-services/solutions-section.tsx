"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  FileText,
  Languages,
  MessageSquare,
  CheckSquare,
  Users,
  Archive,
  Send,
} from "lucide-react";

const solutions = [
  {
    icon: FileText,
    title: "Finance-Specific Templates",
    description:
      "Start with RFP templates tailored for financial services procurement — from technology solutions to outsourced services.",
  },
  {
    icon: Languages,
    title: "Bilingual Document Creation",
    description:
      "Instantly create RFPs in English, French, or both to meet regulatory and regional language requirements.",
  },
  {
    icon: MessageSquare,
    title: "Structured Vendor Q&A Forms",
    description:
      "Every RFP includes a vendor-facing Q&A form that mirrors your RFP’s structure, ensuring responses are consistent and easy to compare.",
  },
  {
    icon: CheckSquare,
    title: "Automatic Grading & Ranking",
    description:
      "Vendor submissions are scored instantly against your chosen rubric, producing a ranked list based on security, compliance, cost, and capability.",
  },
  {
    icon: Users,
    title: "Multi-Department Collaboration",
    description:
      "Gather input from compliance, IT security, legal, and procurement into a single draft. Sequential editing is available now; live editing is in development.",
  },
  {
    icon: Archive,
    title: "Audit-Ready Records",
    description:
      "Store all RFPs, responses, scores, and vendor communications in a secure, searchable archive for compliance audits.",
  },
  {
    icon: Send,
    title: "Bulk Vendor Notifications",
    description:
      "Notify vendors of their selection status directly from the Paperfly platform — no more time-consuming email chains.",
  },
];

export function SolutionsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
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
            Paperfly was built to help financial services procurement teams move
            faster while staying compliant.
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
              <Card className="h-full border-2 hover:border-[#005DF2] transition-colors">
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
}
