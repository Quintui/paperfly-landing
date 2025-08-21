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
    question: "Is Paperfly HIPAA-compliant?",
    answer:
      "Paperfly supports HIPAA and other healthcare data privacy requirements by using secure encryption, controlled access, and audit logs.",
  },
  {
    question: "Can I create different rubrics for different healthcare projects?",
    answer:
      "Yes. Rubrics are fully customizable for each RFP to match your specific evaluation criteria.",
  },
  {
    question: "How do vendors respond to my RFP?",
    answer:
      "They use a structured online Q&A form linked directly from your RFP, ensuring all responses are consistent and easy to compare.",
  },
  {
    question: "Can I still manually review each proposal?",
    answer:
      "Yes. Auto-grading speeds up the evaluation process, but you always have the ability to manually review and adjust scores before making a final selection.",
  },
  {
    question: "Does Paperfly integrate with our current procurement systems?",
    answer:
      "Yes. You can export RFPs and scores for seamless integration with your existing procurement portals and systems.",
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
            Frequently Asked Questions — Healthcare Use
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
