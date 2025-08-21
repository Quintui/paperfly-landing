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
    question: "Can Paperfly be used for IT security assessments?",
    answer:
      "Yes. Our RFP templates and scoring rubrics can be tailored to focus on security compliance and vendor risk.",
  },
  {
    question: "Can we weight scoring criteria by risk?",
    answer:
      "Absolutely. You can assign weight to criteria like compliance readiness, data security, and financial stability.",
  },
  {
    question: "Does Paperfly integrate with vendor management systems?",
    answer:
      "Yes. You can export structured RFPs and scoring reports for integration into your existing systems.",
  },
  {
    question: "Is vendor data secure in Paperfly?",
    answer:
      "Yes. We use encryption, secure hosting, and access controls to protect sensitive procurement data.",
  },
  {
    question:
      "Can we run bilingual RFPs without managing two separate documents?",
    answer:
      "Yes. Paperfly generates both language versions from a single draft.",
  },
];

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions — Financial Services Use
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
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
