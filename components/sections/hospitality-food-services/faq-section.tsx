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
    question: "Can Paperfly be used for one-off event sourcing?",
    answer:
      "Yes. It’s ideal for large, high-stakes events where you need multiple vendor quotes quickly.",
  },
  {
    question: "How does Paperfly handle perishable supply sourcing?",
    answer:
      "You can define delivery schedules, freshness requirements, and certifications in your RFP and scoring criteria.",
  },
  {
    question: "Can Paperfly handle multiple simultaneous RFPs?",
    answer:
      "Yes. You can manage several RFPs at once, each with its own scoring rubric.",
  },
  {
    question: "Does Paperfly integrate with our vendor management system?",
    answer:
      "While Paperfly focuses on RFP creation, scoring, and notifications, you can export results into any VMS.",
  },
];

export function FaqSection() {
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
            Frequently Asked Questions — Hospitality Use
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="p-6 text-lg font-semibold text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-gray-700 text-base">
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
