"use client";

import { motion } from "framer-motion";
import { Building, HeartPulse, School, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const IndustrySpecificProblems = () => {
  const industries = [
    {
      name: "Government",
      description: "Public tenders require transparency, accessibility, and strict compliance. Paperfly ensures documents meet bilingual mandates, follow public procurement guidelines, and store vendor responses in an auditable format.",
      icon: <Building className="w-8 h-8 text-[#005DF2]" />,
    },
    {
      name: "Healthcare",
      description: "Procurement in healthcare involves legal, IT, and clinical teams, each with unique needs. Paperfly organizes inputs, ensures clarity, and evaluates vendors against compliance and risk factors instantly.",
      icon: <HeartPulse className="w-8 h-8 text-[#005DF2]" />,
    },
    {
      name: "Education",
      description: "Educational institutions often face tight timelines and multiple approval layers. Paperfly brings everything into one workspace, with structured responses that make vendor evaluation far faster.",
      icon: <School className="w-8 h-8 text-[#005DF2]" />,
    },
    {
      name: "Private Sector",
      description: "Corporate procurement benefits from speed and consistency without adopting an overly complex procurement suite. Paperfly offers a lightweight but powerful alternative.",
      icon: <Briefcase className="w-8 h-8 text-[#005DF2]" />,
    },
  ];

  return (
    <section id="industry-problems" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific RFP Problems We Solve</h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-start"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#005DF2]/10 rounded-full mb-6">
                {industry.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{industry.name}</h3>
              <p className="text-gray-600 text-lg">{industry.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-16"
        >
          <Button asChild className="bg-[#005DF2] text-white hover:bg-[#004abf] text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Link href="/who-we-serve">
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
