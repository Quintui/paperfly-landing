"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { DEMO_BOOKING_URL, DASHBOARD_URL } from "@/lib/constants";
import {
  ChevronRight,
  Clock,
  FileX,
  Users,
  AlertTriangle,
  Target,
  Zap,
  Timer,
  CheckCircle2,
  BarChart3,
  Lock,
  Shield,
  Brain,
  Sparkles,
  TrendingUp,
  Award,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

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
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                AI-Powered <span className="text-[#005DF2]">RFP Creation</span>{" "}
                Software
              </h1>
              <p className="text-2xl md:text-3xl font-semibold mb-6">
                AI That Assists You — Not Replaces You
              </p>
              <p className="text-lg md:text-xl mb-4 leading-relaxed text-gray-700">
                Procurement teams, project managers, and RFP writers know the
                struggle: creating RFPs from scratch is slow, manual, and full
                of bottlenecks. Outdated templates and endless revisions lead to
                vague requirements and vendor responses that don’t match your
                goals.
              </p>
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-700">
                Paperfly changes this by combining AI-powered efficiency with
                human control. Our platform speeds up RFP creation without
                removing your judgment. Every RFP you generate is professional,
                structured, and tailored to your needs — and you’re always in
                the driver’s seat.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    className="bg-[#005DF2] hover:bg-[#004acf] text-white text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl h-[50px]"
                    asChild
                  >
                    <a
                      href={DEMO_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Book a Demo
                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                      >
                        <ChevronRight className="ml-2" size={20} />
                      </motion.span>
                    </a>
                  </Button>
                </motion.div>
                <Button
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-lg h-[50px]"
                  asChild
                >
                  <a
                    href={DASHBOARD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started Today
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Traditional RFP Creation Fails
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Before diving into how Paperfly works, it’s important to
                understand why so many RFP processes break down.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Clock,
                  title: "Too much manual effort",
                  description:
                    "Teams spend weeks formatting documents and chasing stakeholder input.",
                },
                {
                  icon: FileX,
                  title: "Generic templates",
                  description:
                    "Copy-paste RFPs often produce unclear requirements and poor vendor responses.",
                },
                {
                  icon: Users,
                  title: "Unstructured feedback loops",
                  description:
                    "Multiple departments contribute inconsistently, delaying approvals.",
                },
                {
                  icon: AlertTriangle,
                  title: "Messy vendor responses",
                  description:
                    "Scattered submissions across spreadsheets, PDFs, and emails make evaluation a nightmare.",
                },
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{problem.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center text-gray-700 max-w-3xl mx-auto mt-10"
            >
              These inefficiencies cost organizations valuable time, lead to
              mismatched vendors, and create compliance risks.
            </motion.p>
          </div>
        </section>

        {/* Solution Steps Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How Paperfly Solves It
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Paperfly provides an AI-powered workflow designed for issuers,
                not vendors. Our platform handles the heavy lifting of document
                creation while keeping you in full control of content and
                decisions.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  icon: Brain,
                  title: "Smarter Drafting",
                  description:
                    "Upload notes, past documents, or project requirements. Paperfly instantly generates a professional draft, structured with sections, timelines, and evaluation criteria. Every part is fully editable.",
                },
                {
                  step: "2",
                  icon: FileText,
                  title: "Vendor-Ready Documents",
                  description:
                    "Instead of juggling multiple formats, Paperfly creates consistent, professional RFPs that can be exported to Word, PDF, or Google Docs — ready for distribution.",
                },
                {
                  step: "3",
                  icon: Target,
                  title: "Custom Q&A Portal",
                  description:
                    "Each RFP includes a secure, shareable link where vendors submit responses directly. No messy spreadsheets or inbox chaos — everything is centralized and structured.",
                },
                {
                  step: "4",
                  icon: BarChart3,
                  title: "Automated Scoring",
                  description:
                    "As responses come in, Paperfly grades them against tailored rubrics, providing a percentage score out of 100. You can review every detail while trusting AI to surface the strongest matches.",
                },
                {
                  step: "5",
                  icon: CheckCircle2,
                  title: "Faster Decisions",
                  description:
                    "When it’s time to notify vendors, bulk-update their status with a single click — advance them to the next round or send polite declines.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-[#005DF2]/20"></div>
                  )}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow h-full">
                    <div className="w-12 h-12 bg-[#005DF2] rounded-full flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="text-2xl font-bold text-[#005DF2] mr-3">
                        Step {step.step}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Benefits Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Benefits of AI for RFP Issuers
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Save time, improve accuracy, and standardize evaluation — all
                while staying in control.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Timer,
                  title: "Save Time Without Losing Control",
                  description:
                    "Paperfly speeds up the creation process by removing busywork like formatting and section drafting, while you remain in full control of what gets published.",
                  metric: "70% faster",
                },
                {
                  icon: TrendingUp,
                  title: "Improve Vendor Accuracy",
                  description:
                    "Well-structured RFPs lead to better vendor responses. By guiding vendors through a consistent Q&A form, you reduce back-and-forth and get responses that are easier to compare.",
                  metric: "40% fewer questions",
                },
                {
                  icon: BarChart3,
                  title: "Standardize Scoring and Evaluation",
                  description:
                    "With rubric-based scoring, every vendor is evaluated against the same criteria. This reduces bias, ensures compliance, and makes your decisions more defensible.",
                  metric: "100% consistent",
                },
                {
                  icon: Award,
                  title: "Scale Across Teams",
                  description:
                    "Whether you’re a small business running one RFP a year or an enterprise with hundreds of procurement cycles, Paperfly adapts to your needs. The process is scalable and repeatable, without losing flexibility.",
                  metric: "Any scale",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-[#005DF2]/20 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#005DF2]/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-[#005DF2]" />
                  </div>
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-[#005DF2] bg-[#005DF2]/10 px-2 py-1 rounded">
                      {benefit.metric}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built-In Trust and Security
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We know RFPs often contain sensitive information — from budgets
                and timelines to proprietary project requirements. Paperfly is
                designed with privacy and protection at its core.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Lock,
                  title: "End-to-End Encryption",
                  description:
                    "All RFP documents, vendor submissions, and communications are encrypted in transit and at rest.",
                },
                {
                  icon: Shield,
                  title: "Your Data, Your Control",
                  description:
                    "You decide who can access your RFPs and responses. Delete data at any time.",
                },
                {
                  icon: Sparkles,
                  title: "Vendor-Friendly but Secure",
                  description:
                    "Vendors submit responses through secure, private links. No logins required, no open directories.",
                },
                {
                  icon: Brain,
                  title: "Confidential by Design",
                  description:
                    "Your information is never shared with third parties or used to train external AI models.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl border border-[#005DF2]/20 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#005DF2]/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#005DF2]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Paperfly's AI is Different */}
        <section className="py-16 md:py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Paperfly's AI Is Different
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Unlike generic AI writing tools, Paperfly is purpose-built for
                RFPs. It’s not about generating random text — it’s about
                structuring requirements, aligning stakeholders, and creating
                vendor-ready documents that improve decision-making.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI tuned for RFPs",
                  description:
                    "Drafts are tailored to procurement language and industry-specific needs.",
                  highlight: "Industry-Specific",
                },
                {
                  title: "Workflow-first design",
                  description:
                    "Creation, Q&A, scoring, and vendor notifications are built into one process.",
                  highlight: "End-to-End",
                },
                {
                  title: "Assistive, not autonomous",
                  description:
                    "You’re always in control of the content and final decisions.",
                  highlight: "Human-Centered",
                },
              ].map((difference, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-8 rounded-xl border border-gray-700"
                >
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-[#005DF2] bg-[#005DF2]/20 px-3 py-1 rounded-full">
                      {difference.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{difference.title}</h3>
                  <p className="text-gray-300">{difference.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to See It in Action?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Paperfly isn’t about replacing your process — it’s about
                removing the friction. From the first draft to the final vendor
                decision, our platform gives you clarity, speed, and confidence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  className="bg-[#005DF2] hover:bg-[#004acf] text-white text-lg px-8 py-6 rounded-lg h-[50px]"
                  asChild
                >
                  <a
                    href={DEMO_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Demo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-lg h-[50px]"
                  asChild
                >
                  <a
                    href={DASHBOARD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started Today
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
