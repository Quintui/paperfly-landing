"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  const faqs = [
    {
      question: "Can Paperfly create RFPs in both English and French automatically?",
      answer: "Yes. You can generate your entire RFP in English, French, or both — ensuring bilingual compliance from the start.",
    },
    {
      question: "Do I still have control over the final RFP?",
      answer: "Absolutely. Every draft is fully editable before publishing.",
    },
    {
      question: "What is an RFP scoring rubric?",
      answer: "A rubric is a standardized set of criteria used to evaluate vendor responses objectively. Paperfly includes built-in rubrics tailored to your industry.",
    },
    {
      question: "Can multiple people work on an RFP at the same time?",
      answer: "Currently, team members can edit sequentially, with each contributor’s changes saved securely. A live simultaneous editing feature is coming soon.",
    },
    {
      question: "How are vendor responses scored?",
      answer: "Each vendor submission is automatically graded against your selected rubric, generating a percentage score out of 100 for easy comparison.",
    },
    {
      question: "Can I notify vendors directly from Paperfly?",
      answer: "Yes. You can bulk notify vendors of their selection or rejection right from our platform.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
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
