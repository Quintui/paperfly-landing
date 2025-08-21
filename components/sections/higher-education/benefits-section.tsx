"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  School,
  Languages,
  Landmark,
  Zap,
  Target,
} from "lucide-react";

const benefits = [
  {
    icon: <School className="w-7 h-7 text-[#005DF2]" />,
    title: "Speaks the Language of Higher Ed",
    description:
      "Designed with academic procurement workflows in mind, from committee reviews to board approvals.",
  },
  {
    icon: <Languages className="w-7 h-7 text-[#005DF2]" />,
    title: "Handles Bilingual Compliance Easily",
    description:
      "Eliminates the bottleneck of dual-language requirements in provinces, states, or regions where it’s mandatory.",
  },
  {
    icon: <Landmark className="w-7 h-7 text-[#005DF2]" />,
    title: "Fits Grant and Public Funding Rules",
    description:
      "Creates audit-ready records to satisfy both government and grant auditors.",
  },
  {
    icon: <Zap className="w-7 h-7 text-[#005DF2]" />,
    title: "Cuts Evaluation Time Dramatically",
    description:
      "Standardized vendor responses + auto-scoring = faster decision cycles.",
  },
  {
    icon: <Target className="w-7 h-7 text-[#005DF2]" />,
    title: "Reduces Vendor Misalignment",
    description:
      "Clear, structured RFPs prevent proposals that miss the mark entirely.",
  },
];

export function BenefitsSection() {
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
            Why Universities and Colleges Choose Paperfly
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full border-2 hover:border-[#005DF2] transition-colors duration-300 shadow-sm hover:shadow-md">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {benefit.icon}
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
