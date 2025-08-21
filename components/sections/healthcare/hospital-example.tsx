"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilePlus, Link, CheckSquare, Bell, Award } from "lucide-react";

const steps = [
  {
    icon: <FilePlus className="w-6 h-6 text-[#005DF2]" />,
    title: "Step 1 – Gathering Requirements",
    description: "Each department’s requirements are uploaded into Paperfly.",
  },
  {
    icon: <FilePlus className="w-6 h-6 text-[#005DF2]" />,
    title: "Step 2 – RFP Drafting",
    description:
      "Paperfly generates a bilingual, structured RFP that includes all sections.",
  },
  {
    icon: <Link className="w-6 h-6 text-[#005DF2]" />,
    title: "Step 3 – Vendor Q&A Link",
    description:
      "Vendors receive a link to a structured form, ensuring mapped answers.",
  },
  {
    icon: <CheckSquare className="w-6 h-6 text-[#005DF2]" />,
    title: "Step 4 – Auto-Grading Responses",
    description:
      "Paperfly instantly scores submissions based on the hospital’s rubric.",
  },
  {
    icon: <Bell className="w-6 h-6 text-[#005DF2]" />,
    title: "Step 5 – Decision & Notification",
    description:
      "Top vendors are identified, and bulk notifications inform all participants.",
  },
];

export function HospitalExampleSection() {
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
            Example: Hospital Technology Procurement
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
                Scenario
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                A regional hospital network needs to purchase a new electronic
                medical record (EMR) system. The procurement team must gather
                requirements from clinical leadership, IT security, compliance
                officers, and finance.
              </p>
            </div>
            <Card className="bg-[#005DF2] text-white border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Award className="w-6 h-6" />
                  <span>Outcome</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-white/90">
                <p>
                  RFP issued in <strong>2 days</strong> instead of 3 weeks
                </p>
                <p>All responses in a standardized, comparable format</p>
                <p>Compliance documentation ready for audits</p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-6">
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
