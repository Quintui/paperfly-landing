"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Globe,
  Shield,
  Users,
  Zap,
  FileText,
} from "lucide-react";

const benefits = [
  {
    icon: <Zap className="h-8 w-8 text-[#005DF2]" />,
    title: "Faster Vendor Selection",
    description: "Move quickly without compromising on evaluation rigor.",
  },
  {
    icon: <Globe className="h-8 w-8 text-[#005DF2]" />,
    title: "Bilingual Procurement",
    description:
      "Issue RFPs in English and French to engage a wider pool of vendors.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-[#005DF2]" />,
    title: "Consistent Scoring",
    description: "Standardized rubrics ensure fair, defensible vendor selection.",
  },
  {
    icon: <Shield className="h-8 w-8 text-[#005DF2]" />,
    title: "Integrated Security Considerations",
    description:
      "Include security compliance checks in every RFP to avoid costly post-selection surprises.",
  },
  {
    icon: <Users className="h-8 w-8 text-[#005DF2]" />,
    title: "Cross-Department Collaboration",
    description:
      "Bring together input from multiple functions without version control headaches.",
  },
  {
    icon: <FileText className="h-8 w-8 text-[#005DF2]" />,
    title: "Structured Vendor Data",
    description:
      "Vendor responses arrive in the same format, ready for direct comparison.",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Key Benefits for SaaS & Technology Procurement
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-[#005DF2]"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-transparent hover:border-[#005DF2] transition-colors">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#005DF2]/10">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-800">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
