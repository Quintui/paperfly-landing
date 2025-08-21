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
    question:
      "Can Paperfly handle sourcing for both raw materials and capital equipment?",
    answer:
      "Yes. Our templates and rubrics are fully customizable for different procurement categories.",
  },
  {
    question: "Can we include supplier performance history in scoring?",
    answer:
      "Absolutely. You can add performance-based weighting to your scoring rubric.",
  },
  {
    question:
      "Does Paperfly support multi-language RFPs beyond English and French?",
    answer:
      "Currently, we support English and French. Additional languages are in future development.",
  },
  {
    question:
      "Can suppliers submit responses through our existing procurement portal?",
    answer:
      "Yes. You can export structured RFPs and scoring data for integration into your existing procurement system.",
  },
  {
    question: "How secure is supplier data?",
    answer:
      "Paperfly uses encryption and secure hosting to protect all procurement records.",
  },
];

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left">
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
