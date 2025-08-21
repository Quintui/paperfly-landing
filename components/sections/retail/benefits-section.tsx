"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Languages, CheckCircle, Users, Archive, AlertTriangle } from "lucide-react";

const benefits = [
  {
    icon: <Rocket className="w-8 h-8 text-[#005DF2]" />,
    title: "Faster Time-to-Market",
    description: "Shorten procurement cycles to support seasonal launches and store openings.",
  },
  {
    icon: <Languages className="w-8 h-8 text-[#005DF2]" />,
    title: "Bilingual Communication",
    description: "Eliminate translation delays by generating English and French RFPs instantly.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-[#005DF2]" />,
    title: "Consistent Vendor Scoring",
    description: "Structured rubrics make vendor evaluation faster and more objective.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#005DF2]" />,
    title: "Cross-Department Collaboration",
    description: "Capture input from multiple retail functions without document chaos.",
  },
  {
    icon: <Archive className="w-8 h-8 text-[#005DF2]" />,
    title: "Secure Vendor History",
    description: "Maintain an organized record of all procurement activity and vendor performance.",
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-[#005DF2]" />,
    title: "Reduced Risk of Vendor Mismatch",
    description: "Clear, standardized RFPs lead to better vendor alignment.",
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Benefits for Retail Procurement
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-[#005DF2] transition-colors duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#005DF2]/10 rounded-lg flex items-center justify-center mb-4">
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
