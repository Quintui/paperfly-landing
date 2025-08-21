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
    question: "Is Paperfly compliant with public procurement regulations?",
    answer:
      "Yes, Paperfly is designed to help you meet public sector procurement requirements by ensuring a fair, transparent, and well-documented process.",
  },
  {
    question: "Can we customize the RFP templates?",
    answer:
      "Absolutely. Our templates provide a starting point, but you can customize every section to fit the specific needs of your procurement project.",
  },
  {
    question: "How secure is our data?",
    answer:
      "We use industry-standard security protocols to protect your data. All information is encrypted and stored securely in the cloud.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer comprehensive support to all our clients, including onboarding, training, and ongoing technical assistance to ensure you get the most out of Paperfly.",
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
            Frequently Asked Questions
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
                className="bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <AccordionTrigger className="p-6 text-lg font-medium text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-gray-700">
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
