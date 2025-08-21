"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Languages,
  ClipboardList,
  Calculator,
  Send,
} from "lucide-react";

const solutions = [
  {
    icon: <Users className="w-7 h-7 text-[#005DF2]" />,
    title: "Centralize Input Across Departments",
    description:
      "Collect requirements from operations, culinary teams, event planners, finance, and marketing — all in one shared workspace.",
  },
  {
    icon: <Languages className="w-7 h-7 text-[#005DF2]" />,
    title: "Create Bilingual RFPs in Minutes",
    description:
      "Generate English, French, or dual-language documents without doubling the effort.",
  },
  {
    icon: <ClipboardList className="w-7 h-7 text-[#005DF2]" />,
    title: "Give Vendors a Clear Playbook",
    description:
      "Each RFP comes with an auto-generated Q&A form so vendors submit in the same format — making side-by-side comparison easy.",
  },
  {
    icon: <Calculator className="w-7 h-7 text-[#005DF2]" />,
    title: "Score Proposals as They Arrive",
    description:
      "Our auto-grading system ranks proposals instantly based on your criteria — from cost per unit to quality certifications to service flexibility.",
  },
  {
    icon: <Send className="w-7 h-7 text-[#005DF2]" />,
    title: "Bulk Notify Vendors",
    description:
      "Inform selected and non-selected vendors in one step, keeping communication professional and consistent.",
  },
];

export function PaperflySolutionsSection() {
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
            How Paperfly Works for Hospitality & Food Services
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="p-3 bg-[#005DF2]/10 rounded-lg">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
