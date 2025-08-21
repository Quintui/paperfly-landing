"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Shield, Users, Languages } from "lucide-react";

const challenges = [
  {
    icon: DollarSign,
    title: "Tight Budgets",
    description:
      "Requires cost-effective vendor solutions without sacrificing quality.",
  },
  {
    icon: Shield,
    title: "Donor and Grant Compliance",
    description: "Ensures funds are spent transparently and accountably.",
  },
  {
    icon: Users,
    title: "Multiple Stakeholder Involvement",
    description:
      "Often includes program directors, operations staff, and board members.",
  },
  {
    icon: Languages,
    title: "Bilingual Communication Needs",
    description: "For community-facing projects and diverse vendor outreach.",
  },
];

export const ChallengesSection = () => {
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
            Why Non-Profit RFPs Are Challenging
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            When the RFP process is inconsistent, non-profits risk misaligned
            vendor partnerships, delayed program rollouts, and difficulties
            meeting donor reporting requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
};
