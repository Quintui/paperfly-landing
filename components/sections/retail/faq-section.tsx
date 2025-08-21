"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can Paperfly handle both product sourcing and service procurement?",
    answer: "Yes. Our templates can be customized for physical products, technology systems, or retail services.",
  },
  {
    question: "Can we add brand compliance requirements to our RFP?",
    answer: "Absolutely. You can include brand standards, quality requirements, and sustainability criteria.",
  },
  {
    question: "Does Paperfly support vendor scoring for cost and quality together?",
    answer: "Yes. Our scoring rubrics allow weighted criteria so you can balance cost against quality, delivery time, and other factors.",
  },
  {
    question: "Can Paperfly integrate with our procurement or ERP system?",
    answer: "Yes. You can export structured RFPs and scoring reports for integration with existing systems.",
  },
  {
    question: "How secure is vendor data in Paperfly?",
    answer: "All data is encrypted and stored on secure infrastructure to protect sensitive procurement information.",
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions — Retail Use
          </h2>
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
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base">
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
