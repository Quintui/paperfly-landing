"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  Shield,
  Lock,
  Users,
  FileText,
  Briefcase,
  HeartPulse,
  ClipboardCheck,
  FileCheck2,
  ChevronRight,
  Clock,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Activity,
  Heart,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { DEMO_BOOKING_URL, DASHBOARD_URL } from "@/lib/constants";

export default function HealthcarePage() {
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <Badge
                  variant="outline"
                  className="text-[#005DF2] border-[#005DF2] mb-4"
                >
                  Healthcare Solutions
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              >
                Compliant Healthcare Procurement Made Simple
              </motion.h1>
              <motion.p
                className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Streamline procurement, compliance, and vendor evaluations for
                healthcare organizations. Ensure patient safety while
                accelerating decision-making with built-in regulatory
                compliance.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
                <Button
                  variant="outline"
                  className="border-[#005DF2] text-[#005DF2] hover:bg-[#005DF2] hover:text-white text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                  asChild
                >
                  <a href={DASHBOARD_URL} className="flex items-center">
                    Get Started
                    <ChevronRight className="ml-2" size={20} />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Healthcare Organizations Choose Paperfly
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Paperfly simplifies procurement, compliance, and vendor
                evaluations for healthcare organizations, ensuring patient
                safety and regulatory compliance while accelerating
                decision-making.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-2 hover:border-[#005DF2] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#005DF2]/10 rounded-lg flex items-center justify-center mb-4">
                      <Clock className="text-[#005DF2]" size={24} />
                    </div>
                    <CardTitle className="text-xl text-[#005DF2]">
                      Faster Procurement Cycles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Cut procurement cycle time by 30–40% through structured
                      multi-department input and automated workflows.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card className="h-full border-2 hover:border-[#005DF2] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#005DF2]/10 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="text-[#005DF2]" size={24} />
                    </div>
                    <CardTitle className="text-xl text-[#005DF2]">
                      Regulatory Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Built-in compliance checks ensure every proposal adheres
                      to healthcare regulations, safeguarding patient safety and
                      confidentiality.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Card className="h-full border-2 hover:border-[#005DF2] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#005DF2]/10 rounded-lg flex items-center justify-center mb-4">
                      <Target className="text-[#005DF2]" size={24} />
                    </div>
                    <CardTitle className="text-xl text-[#005DF2]">
                      Unbiased Vendor Evaluation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      AI-driven scoring delivers unbiased vendor evaluations,
                      helping hospitals and clinics quickly identify optimal
                      solutions.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Card className="h-full border-2 hover:border-[#005DF2] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#005DF2]/10 rounded-lg flex items-center justify-center mb-4">
                      <Lock className="text-[#005DF2]" size={24} />
                    </div>
                    <CardTitle className="text-xl text-[#005DF2]">
                      Protected Data Handling
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Protected-data aware system avoids exposing PHI in shared
                      documents while maintaining transparency.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Card className="h-full border-2 hover:border-[#005DF2] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#005DF2]/10 rounded-lg flex items-center justify-center mb-4">
                      <Heart className="text-[#005DF2]" size={24} />
                    </div>
                    <CardTitle className="text-xl text-[#005DF2]">
                      Focus on Patient Care
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Automate manual processes so healthcare providers can
                      focus on patient care and clinical innovation.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Card className="h-full border-2 hover:border-[#005DF2] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#005DF2]/10 rounded-lg flex items-center justify-center mb-4">
                      <FileCheck2 className="text-[#005DF2]" size={24} />
                    </div>
                    <CardTitle className="text-xl text-[#005DF2]">
                      Audit-Ready Documentation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Regulation-ready exports with HIPAA BAA prompts and FDA
                      510(k) evidence fields for complete audit trails.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* KEY METRICS SECTION */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Proven Healthcare Results
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold text-[#005DF2] mb-2">
                    30-40%
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Faster Procurement
                  </h3>
                  <p className="text-gray-700">
                    Through structured multi-department input
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold text-[#005DF2] mb-2">
                    100%
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    HIPAA Compliant
                  </h3>
                  <p className="text-gray-700">
                    Protected-data aware workflows
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold text-[#005DF2] mb-2">
                    FDA
                  </div>
                  <h3 className="text-xl font-semibold mb-2">510(k) Ready</h3>
                  <p className="text-gray-700">
                    Built-in evidence fields for compliance
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURES SHOWCASE SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built for Healthcare Organizations
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#005DF2] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Multi-Department Collaboration
                      </h3>
                      <p className="text-gray-700">
                        Clinical Ops, IT, Compliance, and Finance can each own
                        required sections with role-based access controls.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#005DF2] rounded-lg flex items-center justify-center flex-shrink-0">
                      <ClipboardCheck className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Built-in Compliance Checklists
                      </h3>
                      <p className="text-gray-700">
                        Pre-configured checklists for device certifications,
                        interoperability (HL7 / FHIR), and privacy requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#005DF2] rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileCheck2 className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Audit Trail Management
                      </h3>
                      <p className="text-gray-700">
                        Vendor portal timestamps submissions for complete audit
                        trails and accreditation reviews.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gradient-to-br from-[#005DF2] to-[#004acf] rounded-2xl p-8 text-white"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Stethoscope className="text-white" size={24} />
                    <span className="text-lg font-semibold">
                      Medical Equipment
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Activity className="text-white" size={24} />
                    <span className="text-lg font-semibold">EHR Systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="text-white" size={24} />
                    <span className="text-lg font-semibold">
                      HIPAA Compliance
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileCheck2 className="text-white" size={24} />
                    <span className="text-lg font-semibold">
                      FDA Documentation
                    </span>
                  </div>
                  <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <p className="text-sm opacity-90">
                      "Paperfly helped us streamline our medical equipment
                      procurement while ensuring full HIPAA compliance. Our
                      procurement cycle is now 40% faster."
                    </p>
                    <p className="text-xs mt-2 opacity-75">
                      - Chief Procurement Officer, Regional Health Network
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* USE CASES SECTION */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Real Healthcare Use Cases
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-[#005DF2]/10 rounded-lg flex items-center justify-center">
                        <HeartPulse className="text-[#005DF2]" size={20} />
                      </div>
                      <CardTitle className="text-xl text-[#005DF2]">
                        Regional Health Network Equipment
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      A regional health network must replace bedside monitors
                      across four hospitals. Nursing input, Biomedical specs,
                      and Privacy requirements converge in one Paperfly RFP.
                    </p>
                    <div className="flex items-center text-sm text-[#005DF2] font-semibold">
                      <ArrowRight size={16} className="mr-2" />
                      Vendors lacking FDA 510(k) clearance auto-flagged, saving
                      weeks of manual vetting
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-[#005DF2]/10 rounded-lg flex items-center justify-center">
                        <UserCheck className="text-[#005DF2]" size={20} />
                      </div>
                      <CardTitle className="text-xl text-[#005DF2]">
                        EHR System Upgrade
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Mid-size hospital needs to upgrade their EHR system. IT
                      defines technical requirements, Clinical staff adds
                      workflow needs, Compliance ensures HIPAA adherence.
                    </p>
                    <div className="flex items-center text-sm text-[#005DF2] font-semibold">
                      <ArrowRight size={16} className="mr-2" />
                      Implementation completed 6 weeks ahead of schedule with
                      full compliance
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
                      Ready to Streamline Healthcare Procurement?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                      Join healthcare organizations that have reduced
                      procurement cycles by 30-40% while maintaining full
                      regulatory compliance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        className="bg-white text-[#005DF2] hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl h-[50px]"
                        asChild
                      >
                        <a
                          href={DEMO_BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          Book a Demo
                          <ChevronRight className="ml-2" size={20} />
                        </a>
                      </Button>
                      <Button
                        className="bg-transparent border border-white text-white hover:bg-white hover:text-[#005DF2] text-lg px-8 py-6 rounded-lg transition-all duration-300 h-[50px]"
                        asChild
                      >
                        <a
                          href={DEMO_BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          Get Started
                          <ChevronRight className="ml-2" size={20} />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-[#004acf] p-8 md:p-12 flex items-center justify-center">
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm w-full">
                    <div className="flex items-center space-x-4 mb-6">
                      <Zap className="text-white" size={24} />
                      <span className="text-white text-lg font-semibold">
                        30–40% faster procurement cycle
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                      <Lock className="text-white" size={24} />
                      <span className="text-white text-lg font-semibold">
                        Protected-data aware
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <ClipboardCheck className="text-white" size={24} />
                      <span className="text-white text-lg font-semibold">
                        Regulation-ready exports
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
