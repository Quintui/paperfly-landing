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
} from "lucide-react";
import Link from "next/link";

const WhyRfpCreationIsStillBrokenIn2025AndHowToFixIt = () => {
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
                  //   variant="secondary"
                  variant="secondary"
                  className="bg-[#005DF2]/10 text-[#005DF2] border-[#005DF2]/20"
                >
                  Procurement
                </Badge>
                <div className="md:flex hidden  items-center space-x-2 text-slate-500">
                  <User className="w-4 h-4" />
                  <span className="font-medium">Paperfly Team</span>
                  <span>•</span>
                  <Calendar className="w-4 h-4" />
                  <span>January 2025</span>
                  <span>•</span>
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-slate-900">Why RFP Creation Is</span>
                <br />
                <span className="bg-gradient-to-r from-[#005DF2] to-[#0048C1] bg-clip-text text-transparent">
                  Still Broken in 2025
                </span>
                <br />
                <span className="text-slate-700 text-3xl md:text-4xl">
                  (And How to Fix It)
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                Despite all the technological progress in procurement, RFP
                creation remains one of the most painful, manual, and
                inefficient parts of the vendor selection process.
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
                Teams juggle outdated templates, cross-departmental
                misalignment, unclear scopes, and time-consuming formatting—all
                before they even receive a single proposal.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                The result? Confusing RFPs that deter quality vendors, delayed
                timelines, and inconsistent evaluation outcomes. If your
                organization still relies on Word docs and email threads, you're
                not alone.
              </p>
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-[#005DF2]/5 to-[#0048C1]/5 rounded-xl border-l-4 border-[#005DF2]">
                <Zap className="w-5 h-5 text-[#005DF2]" />
                <p className="font-semibold text-[#005DF2] m-0">
                  At Paperfly, we set out to solve this.
                </p>
              </div>
            </div>
          </div>

          {/* Problems Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                5 Common RFP Creation Problems
              </h2>
              <p className="text-xl text-slate-600">(And How We Solve Them)</p>
            </div>

            <div className="grid gap-8">
              {/* Problem 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#005DF2]/5 to-transparent rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-200"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#005DF2] to-[#0048C1] rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Unclear Scope and Structure
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Most RFPs start with a blank page or a legacy template
                        that doesn't quite fit. This leads to vague requirements
                        and incomplete sections.
                      </p>
                      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-200/50">
                        <div className="flex items-center space-x-2 mb-3">
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                          <span className="font-semibold text-emerald-800">
                            Paperfly Fix
                          </span>
                        </div>
                        <p className="text-slate-700">
                          We use AI to turn your meeting notes, past documents,
                          or rough ideas into structured, editable RFPs tailored
                          to your project and industry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#005DF2]/5 to-transparent rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-200"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#005DF2] to-[#0048C1] rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Stakeholder Chaos
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Procurement often requires input from legal, IT,
                        operations, and more. But coordinating everyone slows
                        things down.
                      </p>
                      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-200/50">
                        <div className="flex items-center space-x-2 mb-3">
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                          <span className="font-semibold text-emerald-800">
                            Paperfly Fix
                          </span>
                        </div>
                        <p className="text-slate-700">
                          Our shared RFP workspace captures comments, merges
                          feedback, and helps teams align faster—no version
                          chaos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#005DF2]/5 to-transparent rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-200"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#005DF2] to-[#0048C1] rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Manual Document Assembly
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Formatting a clean, professional RFP with consistent
                        language takes hours.
                      </p>
                      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-200/50">
                        <div className="flex items-center space-x-2 mb-3">
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                          <span className="font-semibold text-emerald-800">
                            Paperfly Fix
                          </span>
                        </div>
                        <p className="text-slate-700">
                          Paperfly generates ready-to-export RFPs in Word, PDF,
                          or Google Docs in minutes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Problem 4 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#005DF2]/5 to-transparent rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-200"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#005DF2] to-[#0048C1] rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Inconsistent Vendor Responses
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        When questions are unclear or unstructured, vendors
                        submit wildly different proposals, making them
                        impossible to compare.
                      </p>
                      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-200/50">
                        <div className="flex items-center space-x-2 mb-3">
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                          <span className="font-semibold text-emerald-800">
                            Paperfly Fix
                          </span>
                        </div>
                        <p className="text-slate-700">
                          Our RFP builder generates a mirrored Q&A form for
                          vendors, ensuring responses are easy to review.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Problem 5 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#005DF2]/5 to-transparent rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-200"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#005DF2] to-[#0048C1] rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">5</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        No Scoring Logic
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Many teams still evaluate proposals subjectively because
                        there's no shared rubric.
                      </p>
                      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-200/50">
                        <div className="flex items-center space-x-2 mb-3">
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                          <span className="font-semibold text-emerald-800">
                            Paperfly Fix
                          </span>
                        </div>
                        <p className="text-slate-700">
                          We provide built-in evaluation models that align with
                          your industry and goals.
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
                  <h3 className="text-3xl font-bold">Why It Matters</h3>
                </div>
                <p className="text-xl leading-relaxed text-blue-100">
                  A Strong RFP isn't just about compliance. It's your first
                  opportunity to attract the right vendors, set clear
                  expectations, and streamline decision-making. Paperfly brings
                  structure, intelligence, and speed to that process.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="text-center bg-white rounded-3xl p-12 shadow-sm border border-slate-200/60">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Want to see it in action?
              </h3>
              <p className="text-xl text-slate-600 mb-8">
                Transform your RFP process from painful to powerful
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#005DF2] to-[#0048C1] hover:from-[#0048C1] hover:to-[#003A9B] text-white shadow-lg shadow-blue-500/25 px-8 py-4 text-lg"
                >
                  Try your first RFP with Paperfly
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button> */}
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

export default WhyRfpCreationIsStillBrokenIn2025AndHowToFixIt;
