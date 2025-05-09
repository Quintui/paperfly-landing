"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { DEMO_BOOKING_URL } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  Sparkles,
  Zap,
  Timer,
  CheckCircle2,
  BarChart3,
  Lock,
  ShieldCheck,
  FileCheck,
  Network,
  Database,
} from "lucide-react";
import { CallToAction } from "@/components/sections/call-to-action";

export default function WhyAIPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Sticky Header */}
      <Header />

      {/* Add padding to account for fixed header */}
      <div className="pt-[72px]">
        {/* Hero Section */}
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
                Why AI with Paperfly Works
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Our advanced AI technology transforms how organizations create
                and manage RFPs, delivering unmatched efficiency and quality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AI Technology Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Cutting-Edge AI Technology
                </h2>
                <div className="w-20 h-1 bg-[#005DF2] mb-8"></div>
                <p className="text-lg text-gray-700 mb-6">
                  Paperfly leverages state-of-the-art natural language
                  processing and machine learning algorithms specifically
                  trained on procurement documents and industry best practices.
                </p>
                <p className="text-gray-700 mb-6">
                  Our AI doesn't just generate generic content—it understands
                  the nuances of RFPs across different industries and creates
                  tailored, professional documents that meet your specific
                  requirements.
                </p>
                <Button className="mt-4 bg-[#005DF2] hover:bg-[#0045B5]">
                  <a
                    href={DEMO_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    See AI in action <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2"
              >
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#005DF2]/10 rounded-full"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#005DF2]/10 rounded-full"></div>
                  <div className="relative bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                    <div className="flex justify-center items-center h-48 mb-6 rounded-lg bg-[#005DF2]/5">
                      <Brain
                        className="w-24 h-24 text-[#005DF2]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[#005DF2]">
                      Intelligent Document Processing
                    </h3>
                    <p className="text-gray-700">
                      Our AI analyzes thousands of successful RFPs to identify
                      patterns, best practices, and effective structures,
                      applying these insights to your documents.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Paperfly AI Advantage
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our AI-powered platform delivers measurable benefits that
                transform your RFP process.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#005DF2]/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#005DF2] text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">70% Time Savings</h3>
                <p className="text-gray-700">
                  Reduce RFP creation time from weeks to days with AI-generated
                  first drafts and intelligent templates that adapt to your
                  needs.
                </p>
              </motion.div>

              {/* Benefit 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#005DF2]/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#005DF2] text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Enhanced Quality</h3>
                <p className="text-gray-700">
                  Our AI ensures comprehensive, clear, and consistent RFPs that
                  follow industry best practices and reduce vendor questions by
                  40%.
                </p>
              </motion.div>

              {/* Benefit 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#005DF2]/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#005DF2] text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Better Responses</h3>
                <p className="text-gray-700">
                  Clear, well-structured RFPs lead to more accurate vendor
                  responses and a 35% increase in proposal quality.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Enterprise-Grade Security
                </h2>
                <div className="w-20 h-1 bg-[#005DF2] mb-8"></div>
                <p className="text-lg text-gray-700 mb-6">
                  We understand that RFPs often contain sensitive information.
                  That's why we've built Paperfly with security as a
                  foundational principle.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-[#005DF2]">✓</div>
                    <p className="text-gray-700">
                      End-to-end encryption for all documents and communications
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-[#005DF2]">✓</div>
                    <p className="text-gray-700">
                      SOC 2 Type II compliant infrastructure
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-[#005DF2]">✓</div>
                    <p className="text-gray-700">
                      Regular security audits and penetration testing
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-[#005DF2]">✓</div>
                    <p className="text-gray-700">
                      Data residency options for regulatory compliance
                    </p>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2"
              >
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#005DF2]/10 rounded-full"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#005DF2]/10 rounded-full"></div>
                  <div className="relative bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                    <div className="flex justify-center items-center h-48 mb-6 rounded-lg bg-[#005DF2]/5">
                      <Shield
                        className="w-24 h-24 text-[#005DF2]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[#005DF2]">
                      Your Data, Your Control
                    </h3>
                    <p className="text-gray-700">
                      Paperfly gives you complete control over your data with
                      granular permission settings, audit logs, and the ability
                      to delete your data at any time.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CallToAction />

        <Footer />
      </div>
    </div>
  );
}
