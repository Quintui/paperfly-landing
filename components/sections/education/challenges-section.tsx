"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, FileText, Users, CheckSquare, Clock } from "lucide-react";

const challenges = [
  {
    icon: <Layers className="w-8 h-8 text-red-500" />,
    text: "Multiple approval layers — procurement, academic departments, IT, facilities, and finance",
  },
  {
    icon: <FileText className="w-8 h-8 text-red-500" />,
    text: "Bilingual documentation requirements in many regions",
  },
  {
    icon: <Users className="w-8 h-8 text-red-500" />,
    text: "Variety of procurement needs, from highly technical IT systems to construction and service contracts",
  },
  {
    icon: <CheckSquare className="w-8 h-8 text-red-500" />,
    text: "Compliance with public procurement rules and internal policies",
  },
  {
    icon: <Clock className="w-8 h-8 text-red-500" />,
    text: "Manual vendor evaluation that eats up staff time and delays decision-making",
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Higher Education RFPs Are Challenging
          </h2>
          <p className="text-lg text-gray-700">
            Colleges, universities, and school boards face unique obstacles in
            their RFP processes:
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
              <Card className="h-full bg-white shadow-md border border-gray-100 p-6 text-center">
                <div className="flex justify-center mb-4">{challenge.icon}</div>
                <p className="text-gray-700">{challenge.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-700 bg-red-50 border border-red-200 p-6 rounded-lg">
            When these challenges pile up, procurement teams risk issuing RFPs
            that are inconsistent, unclear, or incomplete — leading to weak
            vendor responses and longer project timelines.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
