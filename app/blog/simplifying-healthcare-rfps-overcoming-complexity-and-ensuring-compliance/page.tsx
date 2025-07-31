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
  Heart,
  Lock,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

const SimplifyingHealthcareRfps = () => {
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
                  Healthcare Procurement
                </Badge>
                <div className="md:flex hidden  items-center space-x-2 text-slate-500">
                  <User className="w-4 h-4" />
                  <span className="font-medium">Paperfly Team</span>
                  <span>•</span>
                  <Calendar className="w-4 h-4" />
                  <span>January 2025</span>
                  <span>•</span>
                  <Clock className="w-4 h-4" />
                  <span>7 min read</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-slate-900">
                  Simplifying Healthcare RFPs
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#005DF2] to-[#0048C1] bg-clip-text text-transparent">
                  Overcoming Complexity
                </span>
                <br />
                <span className="text-slate-700 text-3xl md:text-4xl">
                  and Ensuring Compliance
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                The healthcare sector faces some of the most complex procurement
                requirements of any industry. Every RFP issued by healthcare
                organizations carries immense responsibility, involving clinical
                standards, data privacy (HIPAA), and intricate regulatory
                compliance.
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
                Yet, many organizations still rely on outdated methods, which
                amplify risks and confusion. The stakes are incredibly high in
                healthcare procurement—every decision impacts patient care, data
                security, and regulatory compliance.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                Healthcare organizations often rely on fragmented processes and
                outdated tools, causing stakeholder misalignment and potential
                regulatory oversights. These outdated workflows lead to
                inefficiencies, compliance risks, and poor vendor selection.
              </p>
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-[#005DF2]/5 to-[#0048C1]/5 rounded-xl border-l-4 border-[#005DF2]">
                <Heart className="w-5 h-5 text-[#005DF2]" />
                <p className="font-semibold text-[#005DF2] m-0">
                  Paperfly provides the specialized solution healthcare
                  organizations need.
                </p>
              </div>
            </div>
          </div>

          {/* Critical Challenges Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Critical Healthcare RFP Challenges
              </h2>
              <p className="text-xl text-slate-600">
                The unique obstacles that healthcare procurement teams face
              </p>
            </div>

            <div className="grid gap-8">
              {/* Challenge 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#005DF2]/5 to-transparent rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-200"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#005DF2] to-[#0048C1] rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Diverse Stakeholders from Multiple Teams
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Healthcare procurement involves clinical teams, IT
                        departments, legal counsel, and compliance officers—each
                        with different priorities, timelines, and requirements.
                        Coordinating input from all these stakeholders while
                        maintaining clinical standards and regulatory compliance
                        is a significant challenge.
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
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Heavy Burden of HIPAA Compliance and Documentation
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Every healthcare RFP must address HIPAA compliance, data
                        security requirements, and meticulous documentation
                        standards. The complexity of these requirements often
                        leads to incomplete or unclear specifications that fail
                        to protect patient data and meet regulatory standards.
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
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Unclear or Incomplete RFP Scopes
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        When healthcare RFPs lack clarity or completeness, they
                        result in suboptimal vendor matches that don't meet
                        clinical needs or compliance requirements. This leads to
                        costly rework, delayed implementations, and potential
                        risks to patient care and data security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Root of the Problem */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-12 border border-red-200/50">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  The Root of the Problem
                </h2>
                <p className="text-xl text-slate-600">
                  Fragmented processes that compromise healthcare procurement
                  goals
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      Fragmented processes create misalignment between clinical,
                      IT, and compliance teams
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      Outdated tools fail to address the unique complexity of
                      healthcare requirements
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      Manual processes increase the risk of regulatory
                      oversights and compliance violations
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      Inefficient workflows delay critical procurement decisions
                      and vendor implementations
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      Poor vendor selection compromises patient care quality and
                      data security
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      Lack of standardization results in inconsistent evaluation
                      and selection processes
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
                Specialized tools designed for healthcare procurement complexity
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
                        Tailored, HIPAA-Compliant Templates
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Pre-built templates specifically designed for healthcare
                        procurement that capture comprehensive requirements
                        while ensuring HIPAA compliance and regulatory
                        adherence. These templates include all necessary
                        sections for clinical, technical, and compliance needs.
                      </p>
                      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-xl border border-emerald-200/50">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span className="font-semibold text-emerald-800">
                            HIPAA Compliance Built-In
                          </span>
                        </div>
                        <p className="text-slate-700 text-sm">
                          Templates automatically include required HIPAA
                          language, data security requirements, and compliance
                          sections
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
                        Centralized, Collaborative Workspace
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        A unified platform that brings clinical, IT, and
                        compliance teams together in real-time collaboration.
                        This eliminates silos, ensures all stakeholders are
                        aligned, and maintains the integrity of healthcare
                        requirements throughout the process.
                      </p>
                      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-xl border border-emerald-200/50">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span className="font-semibold text-emerald-800">
                            Team Alignment
                          </span>
                        </div>
                        <p className="text-slate-700 text-sm">
                          Real-time collaboration ensures clinical, IT, and
                          compliance teams work together seamlessly
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
                        Automated Vendor Q&A and Evaluation Rubrics
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Intelligent forms that ensure vendors provide
                        consistent, comparable responses, along with
                        customizable evaluation rubrics that enable thorough,
                        objective assessment of healthcare-specific requirements
                        and capabilities.
                      </p>
                      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-xl border border-emerald-200/50">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span className="font-semibold text-emerald-800">
                            Comprehensive Assessment
                          </span>
                        </div>
                        <p className="text-slate-700 text-sm">
                          Customizable rubrics ensure thorough evaluation of
                          clinical, technical, and compliance requirements
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
                  <Heart className="w-8 h-8" />
                  <h3 className="text-3xl font-bold">
                    Why This Matters for Healthcare
                  </h3>
                </div>
                <p className="text-xl leading-relaxed text-blue-100">
                  With Paperfly, healthcare organizations can dramatically
                  streamline their RFP process, ensuring clarity, regulatory
                  compliance, and optimal vendor selection. This approach
                  directly impacts patient care quality, data security, and
                  operational efficiency—critical factors in healthcare
                  delivery.
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
                Healthcare procurement is uniquely complex, but it doesn't have
                to be overwhelming. By embracing modern, specialized tools like
                Paperfly, healthcare organizations can overcome the challenges
                of stakeholder coordination, HIPAA compliance, and vendor
                selection while maintaining the highest standards of patient
                care and data security.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                The key is moving away from fragmented, manual processes and
                toward integrated, automated solutions that prioritize clinical
                needs, regulatory compliance, and operational efficiency. When
                healthcare procurement teams have the right tools, they can
                focus on what matters most: delivering exceptional care to
                patients through effective partnerships with the right vendors.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="text-center bg-white rounded-3xl p-12 shadow-sm border border-slate-200/60">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to transform your healthcare procurement process?
              </h3>
              <p className="text-xl text-slate-600 mb-8">
                See how Paperfly can help you overcome healthcare RFP challenges
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

export default SimplifyingHealthcareRfps;
