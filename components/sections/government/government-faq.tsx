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
    question: "Is Paperfly compliant with public procurement rules?",
    answer:
      "Yes. Paperfly’s structured approach supports transparency, fair scoring, and audit-ready documentation, all critical to public procurement compliance.",
  },
  {
    question: "Can we customize the scoring rubric for different RFPs?",
    answer:
      "Absolutely. You can create or modify rubrics to fit the specific criteria for each project.",
  },
  {
    question: "Does Paperfly work with public procurement portals?",
    answer:
      "Yes. You can export the finalized RFP in multiple formats (PDF, Word) to post on your existing tender portal, while still using Paperfly for grading and vendor management.",
  },
  {
    question: "How secure is vendor data?",
    answer:
      "Paperfly uses encryption and secure data storage to protect all RFPs and vendor responses.",
  },
  {
    question: "Can we still manually review every vendor response?",
    answer:
      "Yes. Auto-grading speeds up evaluation, but you can still review and adjust scores as needed before finalizing selections.",
  },
];

export function GovernmentFaq() {
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
            Frequently Asked Questions — Government Use
          </h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-lg text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
