"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  Users2,
  Target,
  Sparkles,
  Lightbulb,
  Rocket,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DEMO_BOOKING_URL } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import { CallToAction } from "@/components/sections/call-to-action";

export default function AboutPage() {
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
                About Paperfly
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                We're transforming how organizations create, manage, and respond
                to RFPs and RFIs with AI-powered solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are Section (Expanded from landing page) */}
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
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#005DF2]/10 rounded-full"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#005DF2]/10 rounded-full"></div>
                  <div className="relative bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 text-[#005DF2]">
                      We're Paperfly
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                      An AI-powered RFP creation platform built to simplify how
                      organizations write and manage proposals.
                    </p>
                    <p className="text-gray-700 mb-6">
                      RFPs are essential for vendor selection and
                      procurement—but too often, they're a mess of spreadsheets,
                      inconsistent documents, and email threads. We created
                      Paperfly to solve that.
                    </p>
                    <p className="text-gray-700">
                      Whether you're a procurement lead, an agency, a small
                      business, or a professional RFP writer, our platform helps
                      you create structured, professional RFPs with speed and
                      clarity.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2"
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-[#005DF2]/5 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <div className="flex justify-center items-center h-48 rounded-lg bg-[#005DF2]/5">
                      <Users2
                        className="w-24 h-24 text-[#005DF2]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                      <p className="text-gray-700">
                        To transform the RFP process from a dreaded paperwork
                        exercise into a strategic advantage for businesses of
                        all sizes.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
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
                Our Values
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                The principles that guide everything we do at Paperfly.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value 1 */}
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
                <h3 className="text-xl font-bold mb-4">Simplicity</h3>
                <p className="text-gray-700">
                  We believe complex processes should have simple solutions. Our
                  platform cuts through the complexity to deliver clarity and
                  ease of use.
                </p>
              </motion.div>

              {/* Value 2 */}
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
                <h3 className="text-xl font-bold mb-4">Transparency</h3>
                <p className="text-gray-700">
                  We're committed to clear communication, fair pricing, and
                  honest relationships with our customers and partners.
                </p>
              </motion.div>

              {/* Value 3 */}
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
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-700">
                  We continuously push the boundaries of what's possible with AI
                  to deliver smarter, faster solutions for procurement
                  professionals.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <CallToAction />

        <Footer />
      </div>
    </div>
  );
}
