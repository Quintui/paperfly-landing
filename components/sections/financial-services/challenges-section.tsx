"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Shield,  Lock,
  Users,
  FileText,
  Globe,
} from "lucide-react";

const challenges = [
  {
    icon: Shield,
    title: "Complex Compliance Requirements",
    description:
      "Navigating a web of regulations (OSFI, SEC, FINRA, GDPR, PIPEDA, etc.) is a constant challenge.",
  },
  {
    icon: Lock,
    title: "Vendor Security Assessments",
    description:
      "Protecting sensitive client and transaction data is paramount, requiring rigorous vendor security checks.",
  },
  {
    icon: Users,
    title: "High-Risk Contracts",
    description:
      "Vendor failure can result in significant financial losses and reputational damage.",
  },
  {
    icon: FileText,
    title: "Multiple Stakeholder Involvement",
    description:
      "Coordinating input from legal, compliance, IT security, and procurement teams is a complex task.",
  },
  {
    icon: Globe,
    title: "International Vendor Coordination",
    description:
      "Managing international vendors often requires bilingual documentation and navigating different legal frameworks.",
  },
];

export function ChallengesSection() {
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
            Why Financial Services RFPs Are Challenging
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Financial institutions face procurement hurdles that are unlike any
            other industry. These challenges can turn RFP creation into a slow,
            high-friction process that frustrates both procurement teams and
            vendors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-[#005DF2] transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#005DF2]/10 rounded-lg flex items-center justify-center mb-4">
                    <challenge.icon className="text-[#005DF2]" size={24} />
                  </div>
                  <CardTitle className="text-xl text-[#005DF2]">
                    {challenge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{challenge.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
