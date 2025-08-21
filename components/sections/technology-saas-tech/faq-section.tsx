"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Can Paperfly handle highly technical RFPs?",
    answer:
      "Yes. Our templates can be customized for technical depth, including API specs, data compliance, and integration requirements.",
  },
  {
    question: "Can we add scalability and future-proofing as scoring criteria?",
    answer:
      "Absolutely. You can define criteria to ensure vendors can grow with your needs.",
  },
  {
    question: "Does Paperfly help with security compliance checks?",
    answer:
      "Yes. You can include industry-specific security standards (ISO, SOC 2, HIPAA, etc.) in your scoring rubrics.",
  },
  {
    question: "Can we run parallel bilingual RFPs without creating separate documents?",
    answer: "Yes. One draft can generate both language versions instantly.",
  },
  {
    question: "Does Paperfly integrate with our project management tools?",
    answer:
      "Yes. You can export RFPs and scoring data to integrate with your existing systems.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            SaaS & Technology Use
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
