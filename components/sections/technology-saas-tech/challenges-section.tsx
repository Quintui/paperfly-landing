"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Clock,
  FileText,
  Lock,
  TrendingUp,
  Users,
} from "lucide-react";

const challenges = [
  {
    icon: <Clock className="h-8 w-8 text-[#005DF2]" />,
    title: "Compressed Timelines",
    description:
      "Driven by product roadmaps and market launches, creating pressure to accelerate procurement without sacrificing quality.",
  },
  {
    icon: <FileText className="h-8 w-8 text-[#005DF2]" />,
    title: "Complex Technical Requirements",
    description:
      "Requires precise documentation to ensure vendors can meet intricate technical and integration needs.",
  },
  {
    icon: <Lock className="h-8 w-8 text-[#005DF2]" />,
    title: "Security and Compliance Concerns",
    description:
      "Data privacy, regulatory obligations, and integration integrity are critical and must be thoroughly vetted.",
  },
  {
    icon: <Users className="h-8 w-8 text-[#005DF2]" />,
    title: "Cross-Department Input",
    description:
      "Input from product, IT, legal, and operations must be consolidated, creating alignment challenges.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-[#005DF2]" />,
    title: "Vendor Scalability",
    description:
      "Ensuring providers can handle future growth and evolving needs is crucial for long-term success.",
  },
];

export function ChallengesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Why SaaS & Tech RFPs Are Challenging
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-[#005DF2]"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Without a structured process, these challenges often lead to unclear
            vendor expectations, proposal mismatches, and risky procurement
            decisions.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-[#005DF2] transition-colors">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#005DF2]/10">
                    {challenge.icon}
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
