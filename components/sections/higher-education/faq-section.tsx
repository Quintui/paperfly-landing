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
    question:
      "How does Paperfly handle the committee-based review process common in universities?",
    answer:
      "Paperfly allows you to create sequential or parallel review workflows. Committee members from different departments (e.g., IT, facilities, finance) can be invited to review and comment on specific sections of an RFP draft or vendor proposal, all within a single platform. This keeps the process organized and transparent.",
  },
  {
    question:
      "Our university receives a lot of public funding. Can Paperfly help with compliance?",
    answer:
      "Absolutely. Every action—from initial draft comments to final scoring—is logged, creating a complete, auditable trail. This ensures your procurement process stands up to scrutiny from both internal and external auditors, including those overseeing public or grant funds.",
  },
  {
    question:
      "We have a legal requirement to post RFPs in both English and French. Can the platform do that?",
    answer:
      "Yes, our bilingual RFP generation is a core feature. You can create and manage your RFP in one language, and Paperfly will generate a mirrored version in the other, ensuring consistency and saving significant time and effort.",
  },
  {
    question: "Can we use our own evaluation rubrics?",
    answer:
      "Yes. You can use our templates based on public sector best practices or create your own custom rubrics from scratch for each project. This flexibility ensures your scoring criteria perfectly match the procurement needs, whether for a new LMS or a campus security overhaul.",
  },
  {
    question: "How does Paperfly simplify vendor management?",
    answer:
      "By standardizing how vendors submit proposals, Paperfly makes it easy to compare apples to apples. The platform also automates vendor notifications, manages Q&A periods, and keeps all communication in one place, reducing the administrative burden on your procurement team.",
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
            FAQ: Paperfly in Higher Education
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
