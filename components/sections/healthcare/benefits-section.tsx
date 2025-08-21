"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Zap,
  Users,
  Languages,
  Calculator,
  Database,
  Archive,
} from "lucide-react";

const benefits = [
  {
    icon: <Zap className="w-7 h-7 text-[#005DF2]" />,
    title: "Speed Without Risk",
    description:
      "Issue RFPs faster while ensuring technical and compliance accuracy.",
  },
  {
    icon: <Users className="w-7 h-7 text-[#005DF2]" />,
    title: "Multi-Department Alignment",
    description:
      "Bring legal, clinical, IT, and finance teams into one platform for sequential review.",
  },
  {
    icon: <Languages className="w-7 h-7 text-[#005DF2]" />,
    title: "Bilingual Compliance",
    description:
      "Generate English and French versions of your RFP without duplicate work.",
  },
  {
    icon: <Calculator className="w-7 h-7 text-[#005DF2]" />,
    title: "Objective Vendor Scoring",
    description:
      "Use industry-appropriate rubrics to score responses fairly and transparently.",
  },
  {
    icon: <Database className="w-7 h-7 text-[#005DF2]" />,
    title: "Structured Vendor Data",
    description:
      "Collect responses in a format that makes comparison quick and easy.",
  },
  {
    icon: <Archive className="w-7 h-7 text-[#005DF2]" />,
    title: "Audit-Friendly Process",
    description:
      "Maintain secure, complete records for compliance and accreditation requirements.",
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
            Key Benefits for Healthcare Procurement
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
