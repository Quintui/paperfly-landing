"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const features = [
  "Less time chasing stakeholder input",
  "Fewer compliance risks",
  "Higher quality vendor responses",
  "Documented, defensible selection processes",
];

export function WhyPaperflySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="text-[#005DF2] border-[#005DF2] mb-4 text-sm"
            >
              Why Choose Paperfly?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Focus on the Front End of Procurement
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Most procurement tools focus on tracking documents or contracts.
              Paperfly focuses on creating better RFPs, structuring vendor
              responses, and making evaluation faster and more accurate.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              For healthcare organizations, this means:
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#005DF2] text-white rounded-full flex items-center justify-center mt-1">
                    <Check size={16} />
                  </div>
                  <p className="text-lg text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
