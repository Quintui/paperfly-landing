"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, ClipboardCheck, TrendingUp, Award } from "lucide-react";

const steps = [
  {
    icon: <Users className="w-6 h-6 text-[#005DF2]" />,
    title: "Unified Input",
    description:
      "Facilities, IT, and administration input requirements into a single shared draft.",
  },
  {
    icon: <FileText className="w-6 h-6 text-[#005DF2]" />,
    title: "Bilingual RFP Generation",
    description:
      "The system generates a bilingual RFP, ready for posting to public procurement boards.",
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 text-[#005DF2]" />,
    title: "Structured Submissions",
    description:
      "Vendors submit via a structured form that ensures complete answers.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#005DF2]" />,
    title: "Instant Auto-Grading",
    description:
      "Auto-grading ranks vendors as proposals come in, surfacing the top matches instantly.",
  },
];

export function UniversityExampleSection() {
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
            A Real Example: Selecting Campus Security Technology
          </h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-full flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Challenge
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                A university is upgrading its campus security system. Facilities
                needs durability and maintenance guarantees. IT demands
                integration with existing networks. Administration wants budget
                adherence and vendor stability.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                The Old Way
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                <li>Multiple Word documents circulating across departments.</li>
                <li>Vendor proposals in incompatible formats.</li>
                <li>Manual scoring on spreadsheets, often inconsistent.</li>
              </ul>
            </div>
            <Card className="bg-[#005DF2] text-white border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Award className="w-6 h-6" />
                  <span>Result</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-white/90">
                <p>
                  A shortlist ready for final review in <strong>days</strong> — not
                  weeks — with every decision fully documented for compliance.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              With Paperfly
            </h3>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
              >
                <Card className="bg-white shadow-md border border-gray-100 hover:border-[#005DF2] transition-colors duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1 p-2 bg-blue-100 rounded-full">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
