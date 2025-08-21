"use client";

import {
  FileText,
  Languages,
  MessageSquareQuote,
  GraduationCap,
  Users,
  Archive,
  Bell,
} from "lucide-react";

const solutions = [
  {
    icon: FileText,
    title: "Manufacturing-Specific Templates",
    description:
      "Start with RFP templates designed for supplier sourcing, equipment procurement, logistics services, and more.",
  },
  {
    icon: Languages,
    title: "Bilingual Document Creation",
    description:
      "Instantly create RFPs in English, French, or both, streamlining communication with domestic and international suppliers.",
  },
  {
    icon: MessageSquareQuote,
    title: "Structured Supplier Q&A Forms",
    description:
      "Every RFP includes an auto-generated form that mirrors your RFP structure, ensuring all suppliers provide comparable answers.",
  },
  {
    icon: GraduationCap,
    title: "Automatic Grading & Ranking",
    description:
      "Supplier submissions are graded against your scoring rubric as soon as they’re received, producing a ranked list by percentage score.",
  },
  {
    icon: Users,
    title: "Multi-Department Collaboration",
    description:
      "Gather input from engineering, operations, quality control, and finance in a single draft.",
  },
  {
    icon: Archive,
    title: "Audit-Ready Procurement Records",
    description:
      "Keep a secure, searchable archive of all RFPs, responses, and scoring for compliance and supplier performance tracking.",
  },
  {
    icon: Bell,
    title: "Bulk Supplier Notifications",
    description:
      "Notify suppliers whether they’ve been shortlisted or not — all from the Paperfly platform.",
  },
];

export function SolutionsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Paperfly Solves These Problems
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Paperfly was built for high-volume, high-precision procurement like
            manufacturing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#005DF2] transition-all"
            >
              <div className="w-12 h-12 bg-[#005DF2]/10 rounded-lg flex items-center justify-center mb-4">
                <solution.icon className="text-[#005DF2]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-700">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
