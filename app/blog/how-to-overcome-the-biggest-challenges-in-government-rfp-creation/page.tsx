import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { DEMO_BOOKING_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  User,
  Users,
  Zap,
  Shield,
  FileText,
  MessageSquare,
  Award,
} from "lucide-react";
import Link from "next/link";

const HowToOvercomeGovernmentRfpChallenges = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Sticky Header */}
      <Header />
      <div className="pt-[72px]">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005DF2]/5 to-transparent"></div>
          <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Badge
                  variant="secondary"
                  className="bg-[#005DF2]/10 text-[#005DF2] border-[#005DF2]/20"
                >
                  Government Procurement
                </Badge>
                <div className="md:flex hidden  items-center space-x-2 text-slate-500">
                  <User className="w-4 h-4" />
                  <span className="font-medium">Paperfly Team</span>
                  <span>•</span>
                  <Calendar className="w-4 h-4" />
                  <span>January 2025</span>
                  <span>•</span>
                  <Clock className="w-4 h-4" />
                  <span>6 min read</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-slate-900">How to Overcome the</span>
                <br />
                <span className="bg-gradient-to-r from-[#005DF2] to-[#0048C1] bg-clip-text text-transparent">
                  Biggest Challenges
                </span>
                <br />
                <span className="text-slate-700 text-3xl md:text-4xl">
                  in Government RFP Creation
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                Government procurement is critical for delivering public
                services effectively, yet the RFP creation process often becomes
                a major obstacle for procurement teams.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Introduction */}
          <div className="prose prose-xl max-w-none mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60">
              <p className="text-slate-700 leading-relaxed mb-6">
                Lengthy documents, rigid requirements, and inefficient
                collaboration result in unclear proposals, reduced vendor
                participation, and longer project timelines. For procurement
                teams, these obstacles mean more administrative burden and fewer
                successful vendor matches.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                The traditional approach to government RFP creation is broken.
                Outdated practices like manually editing Word documents,
                circulating email chains, and using unstructured spreadsheets
                slow down the procurement process and compromise clarity and
                transparency.
              </p>
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-[#005DF2]/5 to-[#0048C1]/5 rounded-xl border-l-4 border-[#005DF2]">
                <Shield className="w-5 h-5 text-[#005DF2]" />
                <p className="font-semibold text-[#005DF2] m-0">
                  Paperfly provides the solution government procurement teams
                  need.
                </p>
              </div>
            </div>
          </div>

          {/* Key Challenges Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Key Challenges in Government RFPs
              </h2>
              <p className="text-xl text-slate-600">
                The obstacles that slow down public procurement
              </p>
            </div>

            <div className="grid gap-8">
              {/* Challenge 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#005DF2]/5 to-transparent rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-200"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#005DF2] to-[#0048C1] rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Extensive Compliance and Formatting Requirements
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Government RFPs must adhere to strict compliance
                        standards, formatting requirements, and regulatory
                        guidelines. This creates a complex web of requirements
                        that procurement teams must navigate while ensuring
                        transparency and fairness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenge 2 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#005DF2]/5 to-transparent rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-200"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#005DF2] to-[#0048C1] rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Difficulty Coordinating Input from Multiple Stakeholders
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Government procurement involves multiple departments,
                        legal teams, technical experts, and budget officers.
                        Coordinating input from all stakeholders while
                        maintaining document consistency and meeting deadlines
                        is a significant challenge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenge 3 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#005DF2]/5 to-transparent rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-200"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#005DF2] to-[#0048C1] rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Inefficient Vendor Communications
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Poor communication with vendors leads to confusion,
                        delays, and inconsistent responses. When vendors don't
                        understand requirements clearly, they submit proposals
                        that don't align with government needs, wasting time and
                        resources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Traditional Methods Fail */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-12 border border-red-200/50">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  Why Traditional Methods Fail
                </h2>
                <p className="text-xl text-slate-600">
                  Outdated practices that compromise government procurement
                  goals
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      Manually editing Word documents creates version control
                      issues and formatting inconsistencies
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      Email chains for collaboration lead to lost feedback and
                      delayed responses
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      Unstructured spreadsheets make it difficult to track
                      requirements and compliance
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      Manual processes slow down procurement timelines and
                      increase administrative costs
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      Lack of standardization results in unclear requirements
                      and poor vendor responses
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      Subjective evaluation methods undermine transparency and
                      fairness requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Paperfly Solution */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                The Paperfly Solution
              </h2>
              <p className="text-xl text-slate-600">
                Modern tools designed specifically for government procurement
                needs
              </p>
            </div>

            <div className="grid gap-8">
              {/* Solution 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-200"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-emerald-200/60 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Specialized Government Templates
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Pre-built templates that meet strict compliance and
                        transparency standards, ensuring your RFPs adhere to
                        government requirements while maintaining clarity and
                        consistency across all documents.
                      </p>
                      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-xl border border-emerald-200/50">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span className="font-semibold text-emerald-800">
                            Compliance Built-In
                          </span>
                        </div>
                        <p className="text-slate-700 text-sm">
                          Templates automatically include required sections,
                          formatting, and compliance language
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution 2 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-200"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-emerald-200/60 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Intelligent Q&A Tools
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        AI-powered tools that generate consistent, shareable
                        forms for vendors, ensuring clear communication and
                        standardized responses that make evaluation
                        straightforward and objective.
                      </p>
                      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-xl border border-emerald-200/50">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span className="font-semibold text-emerald-800">
                            Clear Communication
                          </span>
                        </div>
                        <p className="text-slate-700 text-sm">
                          Structured Q&A format eliminates confusion and ensures
                          consistent vendor responses
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution 3 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-200"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-emerald-200/60 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Automated Scoring Rubrics
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Built-in evaluation models that provide transparent and
                        fair assessments, helping procurement teams make
                        objective decisions while maintaining the accountability
                        required in government procurement.
                      </p>
                      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-xl border border-emerald-200/50">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span className="font-semibold text-emerald-800">
                            Transparent Evaluation
                          </span>
                        </div>
                        <p className="text-slate-700 text-sm">
                          Objective scoring criteria ensure fair evaluation and
                          reduce procurement risks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why It Matters */}
          <section className="mb-16">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#005DF2] via-[#0048C1] to-[#003A9B] rounded-3xl p-12 text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
              <div className="relative">
                <div className="flex items-center space-x-3 mb-6">
                  <BarChart3 className="w-8 h-8" />
                  <h3 className="text-3xl font-bold">
                    Why This Matters for Government
                  </h3>
                </div>
                <p className="text-xl leading-relaxed text-blue-100">
                  Government procurement can benefit greatly by adopting
                  Paperfly's structured, automated, and intuitive RFP platform.
                  This approach saves time, enhances vendor outcomes, and
                  ensures taxpayer dollars are spent efficiently while
                  maintaining the transparency and accountability that citizens
                  expect.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-200/60">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Conclusion
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The challenges in government RFP creation are real and
                significant, but they don't have to be insurmountable. By
                embracing modern, AI-powered tools like Paperfly, government
                procurement teams can overcome these obstacles and create better
                outcomes for both agencies and vendors.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                The key is moving away from manual, outdated processes and
                toward structured, automated solutions that prioritize clarity,
                compliance, and efficiency. When government procurement teams
                have the right tools, they can focus on what matters most:
                delivering value to citizens through effective public services.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="text-center bg-white rounded-3xl p-12 shadow-sm border border-slate-200/60">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to transform your government procurement process?
              </h3>
              <p className="text-xl text-slate-600 mb-8">
                See how Paperfly can help you overcome RFP creation challenges
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "border-2 border-[#005DF2] text-[#005DF2] hover:bg-[#005DF2] hover:text-white px-8 py-4 text-lg transition-all duration-200 bg-transparent"
                  )}
                  href={DEMO_BOOKING_URL}
                  target="_blank"
                >
                  Book a demo today
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HowToOvercomeGovernmentRfpChallenges;
