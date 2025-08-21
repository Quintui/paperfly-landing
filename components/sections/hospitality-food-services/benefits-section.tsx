"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Clock,
  ShieldCheck,
  Languages,
  Users,
  Star,
} from "lucide-react";

const benefits = [
  {
    icon: <Clock className="w-7 h-7 text-[#005DF2]" />,
    title: "Faster Turnaround for Seasonal & Event Needs",
    description:
      "Shorten procurement cycles to match your busiest seasons.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#005DF2]" />,
    title: "Ensure Food Safety Compliance",
    description:
      "Incorporate HACCP, FSMA, or regional safety requirements into vendor scoring.",
  },
  {
    icon: <Languages className="w-7 h-7 text-[#005DF2]" />,
    title: "Bilingual Capabilities",
    description:
      "Easily work with vendors in English and French without hiring translators.",
  },
  {
    icon: <Users className="w-7 h-7 text-[#005DF2]" />,
    title: "Better Vendor Alignment",
    description:
      "Structured RFPs help avoid proposals that don’t meet operational needs.",
  },
  {
    icon: <Star className="w-7 h-7 text-[#005DF2]" />,
    title: "Consistent Brand Experience",
    description:
      "Select suppliers that align with your brand’s quality and service standards.",
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
            Benefits for Hospitality & Food Service Procurement
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
