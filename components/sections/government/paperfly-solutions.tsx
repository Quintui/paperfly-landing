"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Languages,
  FileCheck2,
  Calculator,
  Archive,
  Users,
  Bell,
} from "lucide-react";

const solutions = [
  {
    icon: Languages,
    title: "Bilingual Document Generation",
    description:
      "Instantly create your RFP in English, French, or both — without manually duplicating and translating each section.",
  },
  {
    icon: FileCheck2,
    title: "Structured Vendor Q&A Forms",
    description:
      "Each RFP includes an auto-generated, secure form link for vendors to submit responses. The form matches your RFP’s structure exactly, eliminating unformatted, hard-to-compare submissions.",
  },
  {
    icon: Calculator,
    title: "Instant Scoring & Ranking",
    description:
      "As soon as a vendor submits, Paperfly grades the proposal against your chosen rubric, assigning a percentage score out of 100.",
  },
  {
    icon: Archive,
    title: "Audit-Friendly Records",
    description:
      "Every RFP, vendor submission, and score is stored in an organized, searchable archive for easy compliance checks.",
  },
  {
    icon: Users,
    title: "Collaboration Across Departments",
    description:
      "Share drafts for feedback and edits with other departments. Sequential editing is available now, with simultaneous editing coming soon.",
  },
  {
    icon: Bell,
    title: "Bulk Notifications",
    description:
      'Notify all vendors of their status — “Not Selected” or “Advanced to Next Stage” — directly from the Paperfly platform.',
  },
];

export function PaperflySolutions() {
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
            Paperfly was built with public sector procurement in mind. Here’s how
            we address government RFP challenges:
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
