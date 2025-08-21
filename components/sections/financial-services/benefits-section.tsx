"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Shield,
  Languages,
  CheckSquare,
  Users,
  Archive,
  FileText,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Regulatory Alignment",
    description:
      "Create RFPs that meet the specific compliance needs of banking, insurance, and investment sectors.",
  },
  {
    icon: Languages,
    title: "Bilingual Compliance",
    description:
      "Generate English and French RFPs instantly to meet Canadian or regional language laws.",
  },
  {
    icon: CheckSquare,
    title: "Objective Vendor Scoring",
    description:
      "Transparent, criteria-based scoring reduces bias and strengthens decision defensibility.",
  },
  {
    icon: Users,
    title: "Cross-Department Coordination",
    description:
      "Collect and consolidate input from compliance, IT, legal, and procurement without document chaos.",
  },
  {
    icon: FileText,
    title: "Structured Vendor Data",
    description:
      "Responses are easy to compare side-by-side, saving evaluation time.",
  },
  {
    icon: Archive,
    title: "Audit-Ready Records",
    description:
      "Maintain secure archives for regulatory audits and board reporting.",
  },
];

export function BenefitsSection() {
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
            Key Benefits for Financial Services Procurement
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
              <Card className="h-full border-2 hover:border-[#005DF2] transition-colors">
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
