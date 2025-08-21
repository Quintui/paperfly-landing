"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { motion } from "framer-motion";
import { CtaSection } from "@/components/sections/cta-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <div className="pt-[72px]">
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-20 right-[10%] w-64 h-64 bg-[#005DF2] rounded-full blur-3xl"
          />
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Paperfly
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-4 text-[#005DF2]">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Paperfly, we believe the way organizations create RFPs is broken. For decades, procurement teams, agencies, and project managers have relied on a patchwork of Word docs, email chains, and outdated templates to run one of the most important steps in vendor selection. The result? Confusing documents, mismatched proposals, and wasted weeks.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We built Paperfly to fix that.
              </p>
              <p className="text-lg text-gray-700">
                Paperfly is an AI-powered RFP creation platform designed specifically for issuers. Our mission is simple: to make RFPs faster, clearer, and more consistent — while keeping you fully in control of the content and the decisions. Whether you’re a procurement lead at a large enterprise, a project manager at a growing mid-market company, or an independent RFP writer, Paperfly helps you create structured, professional RFPs in minutes instead of weeks.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-4">The Problem We Solve</h2>
              <p className="text-lg text-gray-700 mb-6">
                Traditional RFPs are essential for vendor selection, but the process is broken:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
                <li><strong>Too manual</strong> – Collecting requirements from emails and meetings eats up hours.</li>
                <li><strong>Too inconsistent</strong> – Generic templates and siloed contributions result in vague, unclear documents.</li>
                <li><strong>Too fragmented</strong> – Vendor responses arrive in mismatched formats, making evaluation slow and error-prone.</li>
              </ul>
              <p className="text-lg text-gray-700">
                Paperfly brings order to the chaos. By combining automation with human oversight, we make it possible to generate professional, structured RFPs that vendors can actually respond to — and issuers can actually compare.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-4 text-[#005DF2]">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To transform the RFP process from a dreaded paperwork exercise into a strategic advantage for organizations of all sizes.
              </p>
              <p className="text-lg text-gray-700">
                We don’t believe in replacing procurement professionals. Instead, we believe in equipping them with better tools — so they can spend less time formatting documents and more time making confident vendor decisions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-4">What We Deliver</h2>
              <p className="text-lg text-gray-700 mb-6">
                Paperfly isn’t just about speeding up RFP creation — it’s about improving the entire lifecycle:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
                <li><strong>AI-assisted document drafting</strong> – Turn notes, past RFPs, and project requirements into a polished first draft.</li>
                <li><strong>Custom vendor Q&A portals</strong> – Provide vendors with a structured, secure way to submit responses.</li>
                <li><strong>Automated grading</strong> – Responses are scored as they arrive, giving issuers instant comparisons.</li>
                <li><strong>Bulk notifications</strong> – Accept, advance, or decline vendors with one click.</li>
              </ul>
              <p className="text-lg text-gray-700">
                By combining these features, Paperfly reduces confusion, improves vendor accuracy, and gives organizations faster, more confident procurement outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-4 text-[#005DF2]">Our Values</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Simplicity</h3>
                  <p className="text-lg text-gray-700">Procurement is already complex. We believe the tools shouldn’t be. Paperfly cuts through complexity by providing a structured, intuitive workflow that anyone can use.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Transparency</h3>
                  <p className="text-lg text-gray-700">We’re committed to clear communication, fair pricing, and honest relationships. That means no hidden fees, no vendor lock-in, and no confusion.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
                  <p className="text-lg text-gray-700">Procurement technology has been stagnant for too long. Paperfly pushes the boundaries of what’s possible with AI, while ensuring our tools always serve people — not the other way around.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose Paperfly</h2>
              <p className="text-lg text-gray-700 mb-6">
                At the end of the day, Paperfly isn’t about flashy tech or buzzwords. It’s about results:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
                <li>RFPs created faster so projects move forward without delay.</li>
                <li>Vendor responses that are clearer and easier to compare.</li>
                <li>Procurement teams empowered to focus on strategy, not busywork.</li>
              </ul>
              <p className="text-lg text-gray-700">
                That’s why organizations across industries — from government to healthcare to technology — are turning to Paperfly to streamline their RFP process.
              </p>
            </motion.div>
          </div>
        </section>

        <CtaSection />
        <Footer />
      </div>
    </div>
  );
}
