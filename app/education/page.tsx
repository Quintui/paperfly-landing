"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  GraduationCap,
  FileText,
  Lock,
  Users,
  ClipboardCheck,
  BookOpen,
  ChevronRight,
  Clock,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  School,
  DollarSign,
  Building,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";
import { DEMO_BOOKING_URL, DASHBOARD_URL } from "@/lib/constants";

export default function EducationPage() {
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
                  Education Solutions
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              >
                Campus-Wide Procurement Without Committee Gridlock
              </motion.h1>
              <motion.p
                className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Simplify vendor management, procurement, and strategic planning
                for educational institutions. From LMS platforms to lab
                equipment, get stakeholders aligned and decisions documented
                efficiently.
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
                Why Educational Institutions Choose Paperfly
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Paperfly simplifies vendor management, procurement, and
                strategic planning for educational institutions, freeing
                educators and administrators to focus on academic excellence.
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
                      Faster Committee Reviews
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Achieve 30–40% faster committee reviews through structured
                      scoring rounds and streamlined decision-making.
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
                      <Lock className="text-[#005DF2]" size={24} />
                    </div>
                    <CardTitle className="text-xl text-[#005DF2]">
                      Student Data Privacy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Student-data privacy baked in with FERPA prompts and GDPR
                      minor-data flags to ensure compliance.
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
                      <DollarSign className="text-[#005DF2]" size={24} />
                    </div>
                    <CardTitle className="text-xl text-[#005DF2]">
                      Budget Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Grant & budget tagging to track allowable spend and
                      optimize resource allocation across departments.
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
                      <Users className="text-[#005DF2]" size={24} />
                    </div>
                    <CardTitle className="text-xl text-[#005DF2]">
                      Stakeholder Alignment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Faculty, IT, and Facilities work in one structured
                      document—no email chains or version confusion.
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
                      <BookOpen className="text-[#005DF2]" size={24} />
                    </div>
                    <CardTitle className="text-xl text-[#005DF2]">
                      Ready-to-Use Templates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Template library for LMS, campus Wi-Fi, research
                      instruments, foodservice, and other common campus needs.
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
                      <Lightbulb className="text-[#005DF2]" size={24} />
                    </div>
                    <CardTitle className="text-xl text-[#005DF2]">
                      Focus on Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Automate tedious administrative tasks so educators can
                      focus on what matters most—student success.
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
                Proven Educational Results
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
                  <h3 className="text-xl font-semibold mb-2">Faster Reviews</h3>
                  <p className="text-gray-700">
                    Through structured scoring rounds
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
                    FERPA Compliant
                  </h3>
                  <p className="text-gray-700">Student-data privacy built in</p>
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
                    Full
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Budget Tracking
                  </h3>
                  <p className="text-gray-700">
                    Grant & budget tagging included
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
                Built for Educational Institutions
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
                        Collaborative Workflows
                      </h3>
                      <p className="text-gray-700">
                        Faculty, IT, and Facilities work together in one
                        structured document with clear ownership and
                        accountability.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#005DF2] rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Education-Specific Templates
                      </h3>
                      <p className="text-gray-700">
                        Pre-built templates for common campus needs: LMS
                        platforms, Wi-Fi infrastructure, research equipment, and
                        foodservice contracts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#005DF2] rounded-lg flex items-center justify-center flex-shrink-0">
                      <ClipboardCheck className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Board-Ready Reports
                      </h3>
                      <p className="text-gray-700">
                        Export bid comparisons for trustees, provosts, or
                        district boards in minutes with comprehensive
                        documentation.
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
                    <School className="text-white" size={24} />
                    <span className="text-lg font-semibold">
                      Learning Management Systems
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="text-white" size={24} />
                    <span className="text-lg font-semibold">
                      Campus Infrastructure
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Lock className="text-white" size={24} />
                    <span className="text-lg font-semibold">
                      FERPA Compliance
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="text-white" size={24} />
                    <span className="text-lg font-semibold">
                      Grant Management
                    </span>
                  </div>
                  <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <p className="text-sm opacity-90">
                      "Paperfly transformed our campus procurement process. We
                      reduced committee review time by 35% while ensuring full
                      compliance with educational regulations."
                    </p>
                    <p className="text-xs mt-2 opacity-75">
                      - Procurement Director, State University System
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
                Real Educational Use Cases
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
                        <GraduationCap className="text-[#005DF2]" size={20} />
                      </div>
                      <CardTitle className="text-xl text-[#005DF2]">
                        State College Wi-Fi Modernization
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      A state college must modernize campus Wi-Fi across dorms,
                      lecture halls, and stadiums. Facilities loads floor plans,
                      IT sets SLA uptime requirements, Student Affairs adds
                      accessibility needs.
                    </p>
                    <div className="flex items-center text-sm text-[#005DF2] font-semibold">
                      <ArrowRight size={16} className="mr-2" />
                      Paperfly's rubric narrowed six bids to two finalists in
                      half the normal review window
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
                        <School className="text-[#005DF2]" size={20} />
                      </div>
                      <CardTitle className="text-xl text-[#005DF2]">
                        K-12 District LMS Selection
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      School district needs new learning management system for
                      15,000 students. Teachers define pedagogical requirements,
                      IT specifies integration needs, Administration sets budget
                      constraints.
                    </p>
                    <div className="flex items-center text-sm text-[#005DF2] font-semibold">
                      <ArrowRight size={16} className="mr-2" />
                      Implementation completed before start of school year with
                      full FERPA compliance
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
                      Ready to Streamline Campus Procurement?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                      Join educational institutions that have reduced committee
                      review time by 30-40% while maintaining full compliance
                      and transparency.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
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
                          Book a Demo
                          <ChevronRight className="ml-2" size={20} />
                        </a>
                      </Button>
                      <Button
                        className="bg-transparent border border-white text-white hover:bg-white hover:text-[#005DF2] text-lg px-8 py-6 rounded-lg transition-all duration-300"
                        variant="outline"
                        asChild
                      >
                        <a href={DASHBOARD_URL} className="flex items-center">
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
                        Faster committee reviews
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                      <Lock className="text-white" size={24} />
                      <span className="text-white text-lg font-semibold">
                        Student-data privacy
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <BookOpen className="text-white" size={24} />
                      <span className="text-white text-lg font-semibold">
                        Grant & budget tagging
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
