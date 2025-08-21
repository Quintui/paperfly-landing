"use client";

import {
  Clock,
  Languages,
  ClipboardCheck,
  Users,
  Archive,
  ThumbsUp,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Faster RFP Turnaround",
    description: "Shorten sourcing cycles and keep production schedules on track.",
  },
  {
    icon: Languages,
    title: "Bilingual Supplier Communication",
    description:
      "Eliminate translation delays by generating RFPs in English and French instantly.",
  },
  {
    icon: ClipboardCheck,
    title: "Consistent Supplier Evaluation",
    description:
      "Structured scoring ensures fair and objective comparisons across vendors.",
  },
  {
    icon: Users,
    title: "Multi-Department Input",
    description:
      "Consolidate requirements from multiple teams without document chaos.",
  },
  {
    icon: Archive,
    title: "Audit-Ready Process",
    description:
      "Maintain secure, complete records for compliance and supplier performance tracking.",
  },
  {
    icon: ThumbsUp,
    title: "Reduced Supplier Disputes",
    description:
      "Clear evaluation criteria and transparent scoring reduce pushback from vendors.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Benefits for Manufacturing Procurement
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#005DF2] transition-all"
            >
              <div className="w-12 h-12 bg-[#005DF2]/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="text-[#005DF2]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
