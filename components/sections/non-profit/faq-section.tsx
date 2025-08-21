"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can Paperfly help with grant-funded procurement?",
    answer:
      "Yes. Our structured RFPs and audit-ready archives make it easy to show donors and grantors exactly how funds were allocated.",
  },
  {
    question: "Can we include social impact criteria in scoring?",
    answer:
      "Absolutely. You can add mission-related criteria to your scoring rubric to prioritize vendors that align with your values.",
  },
  {
    question: "Does Paperfly support vendor outreach in multiple languages?",
    answer:
      "Yes. You can issue bilingual RFPs from a single draft, ensuring vendors in different regions have equal access.",
  },
  {
    question: "Is the platform affordable for small non-profits?",
    answer:
      "Yes. Our pricing model is designed to fit the budgets of organizations of all sizes.",
  },
  {
    question: "How secure is vendor and project data?",
    answer:
      "Paperfly uses encryption and secure hosting to protect sensitive procurement records.",
  },
];

export const FaqSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
