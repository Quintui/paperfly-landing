"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Package, DollarSign, Languages, ClipboardX } from "lucide-react";

const challenges = [
  {
    icon: <Clock className="w-8 h-8 text-[#005DF2]" />,
    title: "Seasonal Purchasing Cycles",
    description: "Require fast turnarounds to meet market demand without delays.",
  },
  {
    icon: <Package className="w-8 h-8 text-[#005DF2]" />,
    title: "Multiple Procurement Categories",
    description: "From products and packaging to IT systems and marketing services.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-[#005DF2]" />,
    title: "Tight Margins",
    description: "Leave no room for costly procurement delays or inefficiencies.",
  },
  {
    icon: <Languages className="w-8 h-8 text-[#005DF2]" />,
    title: "Bilingual Requirements",
    description: "For vendors in certain regions or markets, adding complexity.",
  },
  {
    icon: <ClipboardX className="w-8 h-8 text-[#005DF2]" />,
    title: "Inconsistent Vendor Evaluation",
    description: "When scoring is done manually by different departments.",
  },
];

export function ChallengesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Retail RFPs Are Challenging
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            When retail RFPs lack structure, vendors submit responses in inconsistent formats, making comparisons slow and prone to error — which can cause missed opportunities or delayed launches.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-[#005DF2]/10 rounded-full p-4 w-fit">
                    {challenge.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
