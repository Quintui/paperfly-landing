"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  FileText,
  Languages,
  MessageSquare,
  Star,
  Users,
  Archive,
  Bell,
} from "lucide-react";

const solutions = [
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Education-Specific Templates",
    description:
      "Start with RFP templates tailored for academic institutions — whether you’re sourcing new campus security systems, learning management platforms, or food service vendors.",
  },
  {
    icon: <Languages className="w-6 h-6 text-white" />,
    title: "Bilingual Document Creation",
    description:
      "Generate your RFP in English, French, or both, without duplicating work.",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    title: "Structured Vendor Q&A Forms",
    description:
      "Each RFP includes an auto-generated vendor Q&A form link. Responses match your RFP structure, making vendor comparisons straightforward.",
  },
  {
    icon: <Star className="w-6 h-6 text-white" />,
    title: "Automatic Grading & Ranking",
    description:
      "Submissions are graded against your chosen rubric immediately upon arrival, giving you an instant ranked list of vendors.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Multi-Department Collaboration",
    description:
      "Share RFP drafts with department heads and stakeholders for sequential review. Live simultaneous editing is coming soon.",
  },
  {
    icon: <Archive className="w-6 h-6 text-white" />,
    title: "Audit-Ready Record Keeping",
    description:
      "All RFPs, vendor responses, and scores are stored securely for compliance with public procurement requirements.",
  },
  {
    icon: <Bell className="w-6 h-6 text-white" />,
    title: "Bulk Vendor Notifications",
    description:
      "Notify vendors of their selection status in one step, directly from the Paperfly platform.",
  },
];

export function SolutionsSection() {
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
            How Paperfly Solves These Problems
          </h2>
          <p className="text-lg text-gray-700">
            Paperfly was designed to bring clarity and speed to the higher
            education procurement process.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full bg-[#005DF2] text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                    {solution.icon}
                  </div>
                  <CardTitle>{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
