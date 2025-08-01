"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  Factory,
  FileText,
  ClipboardCheck,
  Globe,
  Truck,
  Wrench,
  DollarSign,
  ChevronRight,
  Clock,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  Settings,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { DEMO_BOOKING_URL, DASHBOARD_URL } from "@/lib/constants";

export default function ManufacturingPage() {
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
                  Manufacturing Solutions
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              >
                Streamline Manufacturing Procurement & Supply Chain
              </motion.h1>
              <motion.p
                className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Reduce downtime and accelerate operations with automated
                procurement processes. From raw materials to equipment
                specifications, ensure precision and minimize production delays.
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
                Why Manufacturers Choose Paperfly
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Paperfly streamlines procurement and supply chain processes for
                manufacturers, reducing downtime and accelerating operations
                with precision documentation and AI-enhanced vendor scoring.
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
                      Reduce Downtime
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Minimize production delays through precise documentation
                      and automated vendor evaluation processes.
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
                      <Settings className="text-[#005DF2]" size={24} />
                    </div>
                    <CardTitle className="text-xl text-[#005DF2]">
                      Complex Equipment Specs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Automate complex equipment specifications and raw
                      materials sourcing with industry-specific templates.
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
                      AI-Enhanced Scoring
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      AI-enhanced vendor scoring promotes transparency and
                      data-driven decisions, enhancing operational efficiency.
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
                      <DollarSign className="text-[#005DF2]" size={24} />
                    </div>
                    <CardTitle className="text-xl text-[#005DF2]">
                      Cost Savings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Achieve significant cost savings through standardized
                      procurement processes and optimized vendor relationships.
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
                      <Truck className="text-[#005DF2]" size={24} />
                    </div>
                    <CardTitle className="text-xl text-[#005DF2]">
                      Supply Chain Optimization
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Streamline supply chain processes and vendor management
                      for faster project execution and improved productivity.
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
                      <TrendingUp className="text-[#005DF2]" size={24} />
                    </div>
                    <CardTitle className="text-xl text-[#005DF2]">
                      Productivity Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Significantly impact productivity and profitability
                      through faster project execution and reduced operational
                      friction.
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
                Manufacturing Results
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
                    40%
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Faster Execution
                  </h3>
                  <p className="text-gray-700">
                    Standardized procurement processes
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
                    25%
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
                  <p className="text-gray-700">
                    Through optimized vendor relationships
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
                    Zero
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Documentation Errors
                  </h3>
                  <p className="text-gray-700">Precision in specifications</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* USE CASES SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Real Manufacturing Use Cases
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
                        <Factory className="text-[#005DF2]" size={20} />
                      </div>
                      <CardTitle className="text-xl text-[#005DF2]">
                        Automotive Parts Sourcing
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Auto manufacturer needs specialized components for new
                      vehicle line. Engineering defines technical specs, Quality
                      sets testing requirements, Procurement manages vendor
                      relationships.
                    </p>
                    <div className="flex items-center text-sm text-[#005DF2] font-semibold">
                      <ArrowRight size={16} className="mr-2" />
                      Production timeline met with 20% cost savings through
                      optimized vendor selection
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
                        <Wrench className="text-[#005DF2]" size={20} />
                      </div>
                      <CardTitle className="text-xl text-[#005DF2]">
                        Equipment Replacement
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Electronics manufacturer must replace aging production
                      equipment. Operations defines capacity requirements,
                      Maintenance specifies reliability needs, Finance sets
                      budget parameters.
                    </p>
                    <div className="flex items-center text-sm text-[#005DF2] font-semibold">
                      <ArrowRight size={16} className="mr-2" />
                      Installation completed with zero production downtime
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
                      Ready to Optimize Manufacturing Procurement?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                      Join manufacturers who've reduced costs by 25% and
                      accelerated project execution by 40% through standardized
                      procurement processes.
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
                        40% faster execution
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                      <DollarSign className="text-white" size={24} />
                      <span className="text-white text-lg font-semibold">
                        25% cost reduction
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <CheckCircle className="text-white" size={24} />
                      <span className="text-white text-lg font-semibold">
                        Zero documentation errors
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
