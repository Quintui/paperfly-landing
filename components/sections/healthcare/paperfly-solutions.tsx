"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Languages,
  MessageSquareQuote,
  Calculator,
  Users,
  Archive,
  Send,
} from "lucide-react";

const solutions = [
  {
    icon: <FileText className="w-7 h-7 text-white" />,
    title: "Healthcare-Specific Templates",
    description:
      "Start with RFP structures designed for medical devices, technology platforms, and clinical services.",
  },
  {
    icon: <Languages className="w-7 h-7 text-white" />,
    title: "Bilingual Document Creation",
    description:
      "Instantly generate RFPs in English and French to meet compliance requirements.",
  },
  {
    icon: <MessageSquareQuote className="w-7 h-7 text-white" />,
    title: "Structured Vendor Q&A Forms",
    description:
      "Vendors submit responses in a consistent, scorable format that mirrors your RFP.",
  },
  {
    icon: <Calculator className="w-7 h-7 text-white" />,
    title: "Automatic Grading & Ranking",
    description:
      "Submissions are graded against your rubric the moment they arrive.",
  },
  {
    icon: <Users className="w-7 h-7 text-white" />,
    title: "Collaborative Drafting",
    description:
      "Share drafts with multiple departments for input and edits sequentially.",
  },
  {
    icon: <Archive className="w-7 h-7 text-white" />,
    title: "Audit-Ready Documentation",
    description:
      "All RFPs, responses, and scores are stored securely for compliance checks.",
  },
  {
    icon: <Send className="w-7 h-7 text-white" />,
    title: "Bulk Vendor Notifications",
    description:
      "Quickly notify vendors whether they’ve been shortlisted or not, saving hours.",
  },
];

export function PaperflySolutionsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Paperfly Solves These Problems
          </h2>
          <p className="text-lg text-gray-600">
            Paperfly was designed to make healthcare RFPs faster, clearer, and
            more compliant.
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
              className="h-full"
            >
              <Card className="h-full bg-[#005DF2] text-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
