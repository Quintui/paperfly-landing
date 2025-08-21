"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const WhoUsesPaperfly = () => {
  const users = [
    "Government agencies with bilingual and compliance needs",
    "Healthcare organizations with regulated procurement requirements",
    "Educational institutions needing consistent, clear RFPs",
    "Private companies seeking speed and standardization",
    "Procurement consultants managing RFPs for multiple clients",
  ];

  return (
    <section id="who-uses-paperfly" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who Uses Paperfly
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {users.map((user, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex items-center bg-white p-4 rounded-lg shadow-md border border-gray-100"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center mr-4">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-lg text-gray-800">{user}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mt-12"
          >
            <Button asChild className="bg-[#005DF2] text-white hover:bg-[#004abf] text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <Link href="/who-we-serve">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
