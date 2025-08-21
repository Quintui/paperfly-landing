"use client";

import { Globe, Boxes, CalendarOff, Languages, Scale } from "lucide-react";

const challenges = [
  {
    icon: Globe,
    title: "Global Supply Chains",
    description:
      "Require precise vendor specifications and delivery timelines.",
  },
  {
    icon: Boxes,
    title: "Multiple Procurement Categories",
    description: "From raw materials to equipment and logistics.",
  },
  {
    icon: CalendarOff,
    title: "Tight Production Schedules",
    description: "Leave little room for procurement delays.",
  },
  {
    icon: Languages,
    title: "Bilingual Requirements",
    description: "For international suppliers.",
  },
  {
    icon: Scale,
    title: "Inconsistent Vendor Evaluations",
    description: "When multiple departments score separately.",
  },
];

export function ChallengesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Manufacturing RFPs Are Challenging
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Manufacturers deal with procurement complexity on multiple fronts.
            When procurement workflows break down, delays ripple through
            production, impacting deadlines, budgets, and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#005DF2] transition-all"
            >
              <div className="w-12 h-12 bg-[#005DF2]/10 rounded-lg flex items-center justify-center mb-4">
                <challenge.icon className="text-[#005DF2]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {challenge.title}
              </h3>
              <p className="text-gray-700">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
