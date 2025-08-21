"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FastForward,
  Languages,
  Database,
  CheckSquare,
  MessageSquare,
  FileText,
} from "lucide-react";

const benefits = [
  {
    icon: FastForward,
    title: "Faster RFP Cycles",
    description:
      "Cut days or weeks off your procurement timelines while improving accuracy.",
  },
  {
    icon: Languages,
    title: "Bilingual Compliance",
    description: "Meet language requirements without manual duplication.",
  },
  {
    icon: Database,
    title: "Structured Vendor Data",
    description:
      "Eliminate inconsistent responses by using structured Q&A forms.",
  },
  {
    icon: CheckSquare,
    title: "Objective Scoring",
    description: "Standardized rubrics ensure fairness and transparency.",
  },
  {
    icon: MessageSquare,
    title: "Better Vendor Communication",
    description:
      "Bulk notifications save hours of manual email work and reduce disputes.",
  },
  {
    icon: FileText,
    title: "Audit-Ready Documentation",
    description:
      "Maintain detailed records for compliance checks and public transparency.",
  },
];

export function GovernmentBenefits() {
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
            Key Benefits for Government Agencies
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-[#005DF2] transition-colors bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#005DF2]/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="text-[#005DF2]" size={24} />
                  </div>
                  <CardTitle className="text-xl text-[#005DF2]">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
