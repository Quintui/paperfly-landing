"use client";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  Gavel,
  FileText,
  Lock,
  Users,
  ClipboardCheck,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { DEMO_BOOKING_URL } from "@/lib/constants";

export default function GovernmentPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Sticky Header */}
      <Header />
      <div className="pt-[72px]">
        {/* HERO SECTION */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-20 right-[10%] w-64 h-64 bg-[#005DF2] rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute bottom-20 left-[10%] w-80 h-80 bg-[#005DF2] rounded-full blur-3xl"
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              >
                Transparency and fairness—baked into every RFP.
              </motion.h1>
              <motion.p
                className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Meet statutory procurement rules and public disclosure mandates
                without slowing delivery.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Button
                  className="bg-[#005DF2] hover:bg-[#004acf] text-white text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                  asChild
                >
                  <a
                    href={DEMO_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    See a Government Template
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* KEY WINS SECTION */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">KEY WINS</h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-2 text-[#005DF2]">
                  Policy-aligned formats
                </h3>
                <p className="text-gray-700">
                  for FAR, state / provincial acts, and EU-style directive
                  language.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-2 text-[#005DF2]">
                  Immutable audit trail
                </h3>
                <p className="text-gray-700">—every change, timestamped.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-2 text-[#005DF2]">
                  Equal-access vendor Q&A archive
                </h3>
                <p className="text-gray-700">to reduce protests.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHY PAPERFLY FOR GOVERNMENT SECTION */}
        <section className="py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Paperfly for Government
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
            </motion.div>
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Public-Sector Challenge */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:w-1/2"
              >
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl h-full">
                  <h3 className="text-2xl font-bold mb-6 text-[#60a5fa]">
                    Public-Sector Challenge
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <Users className="text-[#60a5fa] mt-1 mr-3" size={20} />
                      <span>Complex, multi-layer approvals</span>
                    </li>
                    <li className="flex items-start">
                      <ClipboardCheck
                        className="text-[#60a5fa] mt-1 mr-3"
                        size={20}
                      />
                      <span>Mandatory scoring transparency</span>
                    </li>
                    <li className="flex items-start">
                      <FileText
                        className="text-[#60a5fa] mt-1 mr-3"
                        size={20}
                      />
                      <span>Vendor questions overwhelm staff</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              {/* Paperfly Response */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="lg:w-1/2"
              >
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl h-full">
                  <h3 className="text-2xl font-bold mb-6 text-[#34d399]">
                    Paperfly Response
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <Lock className="text-[#34d399] mt-1 mr-3" size={20} />
                      <span>Sequential approvals & e-sign capture.</span>
                    </li>
                    <li className="flex items-start">
                      <ClipboardCheck
                        className="text-[#34d399] mt-1 mr-3"
                        size={20}
                      />
                      <span>
                        Locked weighted rubrics and auto-generated award
                        reports.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FileText
                        className="text-[#34d399] mt-1 mr-3"
                        size={20}
                      />
                      <span>
                        Central forum publishes answers to all registered
                        bidders equally.
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* USE-CASE SNAPSHOT SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Use-Case Snapshot
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
            </motion.div>
            <div className="max-w-6xl mx-auto bg-blue-50 border border-blue-100 rounded-2xl p-0 md:p-0 shadow-lg flex flex-col md:flex-row items-center md:items-stretch">
              {/* Left: Text */}
              <div className="flex-1 p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#005DF2] mb-4">
                  Transit Authority Example
                </h3>
                <p className="text-lg text-gray-800 mb-0">
                  A transit authority seeks an e-ticketing system. Paperfly
                  enforces pre-published scoring weights, publishes all vendor
                  Q&A publicly, and generates an award rationale packet ready
                  for FOIA / ATIP requests—minimizing bid protests.
                </p>
              </div>
              {/* Right: Big Icon */}
              <div className="flex-1 flex items-center justify-center bg-[#005DF2] rounded-b-2xl md:rounded-b-none md:rounded-r-2xl p-10">
                <Gavel className="text-white" size={120} />
              </div>
            </div>
          </div>
        </section>
        {/* CALL TO ACTION SECTION */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#005DF2] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 md:p-12 flex items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      See a Government Template
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                      Want to see how Paperfly supports transparency, fairness,
                      and compliance? Explore a government RFP template now.
                    </p>
                    <div className="inline-block">
                      <Button
                        className="bg-white text-[#005DF2] hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                        asChild
                      >
                        <a
                          href={DEMO_BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          See a Government Template
                          <ChevronRight className="ml-2" size={20} />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-[#004acf] p-8 md:p-12 flex items-center justify-center">
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm w-full">
                    <div className="flex items-center space-x-4 mb-6">
                      <FileText className="text-white" size={24} />
                      <span className="text-white text-lg font-semibold">
                        Policy-aligned formats
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                      <Lock className="text-white" size={24} />
                      <span className="text-white text-lg font-semibold">
                        Immutable audit trail
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Users className="text-white" size={24} />
                      <span className="text-white text-lg font-semibold">
                        Equal-access Q&A archive
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
