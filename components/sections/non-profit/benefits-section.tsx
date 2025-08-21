"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Clock,
  Languages,
  Eye,
  Users,
  Archive,
  Heart,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Faster Procurement Cycles",
    description: "Spend less time on paperwork and more time delivering on your mission.",
  },
  {
    icon: Languages,
    title: "Bilingual Communication",
    description: "Expand your vendor pool and improve accessibility by issuing RFPs in English and French.",
  },
  {
    icon: Eye,
    title: "Transparent Vendor Evaluation",
    description: "Objective scoring builds trust with donors, grantors, and stakeholders.",
  },
  {
    icon: Users,
    title: "Consolidated Collaboration",
    description: "Capture input from multiple stakeholders without document chaos.",
  },
  {
    icon: Archive,
    title: "Secure Record-Keeping",
    description: "Maintain organized, audit-ready archives for compliance and reporting.",
  },
  {
    icon: Heart,
    title: "Mission-Aligned Decisions",
    description: "Ensure procurement supports program goals and community impact.",
  },
];

export const BenefitsSection = () => {
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
            Key Benefits for Non-Profit Procurement
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
};
