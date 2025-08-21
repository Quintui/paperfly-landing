"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Languages,
  MessageSquareQuote,
  Calculator,
  Send,
} from "lucide-react";

const solutions = [
  {
    icon: <Users className="w-7 h-7 text-white" />,
    title: "Capture Department Input Without Chaos",
    description:
      "Gather requirements from IT, facilities, academic departments, and finance in one centralized workspace — no more buried email threads.",
  },
  {
    icon: <Languages className="w-7 h-7 text-white" />,
    title: "Bilingual RFP Creation in Minutes",
    description:
      "Generate English, French, or dual-language RFPs without doubling the work.",
  },
  {
    icon: <MessageSquareQuote className="w-7 h-7 text-white" />,
    title: "Structured Vendor Q&A",
    description:
      "Every RFP includes a live link to a structured response form so vendors submit in the same format — making comparisons straightforward.",
  },
  {
    icon: <Calculator className="w-7 h-7 text-white" />,
    title: "Automatic Scoring the Moment Responses Arrive",
    description:
      "Vendor proposals are scored instantly against your predefined criteria (security, accessibility, technical fit, cost, etc.). You still have full control to review every detail.",
  },
  {
    icon: <Send className="w-7 h-7 text-white" />,
    title: "Bulk Notifications Without the Admin Overhead",
    description:
      "Notify all vendors of their status in one click — shortlisted, not selected, or moving to the next round.",
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
            Paperfly for Higher Education: How It Works Differently
          </h2>
          <p className="text-lg text-gray-600">
            Instead of starting from scratch every time, Paperfly gives you a
            repeatable, compliant framework for RFP creation and vendor
            evaluation that’s tailored to education.
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
