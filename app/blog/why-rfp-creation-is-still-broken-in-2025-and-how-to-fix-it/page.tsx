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
                  <span>June 2025</span>
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
          <article className="prose prose-lg lg:prose-xl max-w-none">
            <p>
              Teams juggle outdated templates, cross-departmental misalignment,
              unclear scopes, and time-consuming formatting—all before they even
              receive a single proposal.
            </p>
            <p>
              The result? Confusing RFPs that deter quality vendors, delayed
              timelines, and inconsistent evaluation outcomes. If your
              organization still relies on Word docs and email threads, you're not
              alone.
            </p>
            <blockquote>
              <p>At Paperfly, we set out to solve this.</p>
            </blockquote>

            <h2>5 Common RFP Creation Problems (And How We Solve Them)</h2>

            <h3>1. Unclear Scope and Structure</h3>
            <p>
              Most RFPs start with a blank page or a legacy template that doesn't
              quite fit. This leads to vague requirements and incomplete
              sections.
            </p>
            <blockquote>
              <p>
                <strong>Paperfly Fix:</strong> We use AI to turn your meeting
                notes, past documents, or rough ideas into structured, editable
                RFPs tailored to your project and industry.
              </p>
            </blockquote>

            <h3>2. Stakeholder Chaos</h3>
            <p>
              Procurement often requires input from legal, IT, operations, and
              more. But coordinating everyone slows things down.
            </p>
            <blockquote>
              <p>
                <strong>Paperfly Fix:</strong> Our shared RFP workspace captures
                comments, merges feedback, and helps teams align faster—no
                version chaos.
              </p>
            </blockquote>

            <h3>3. Manual Document Assembly</h3>
            <p>
              Formatting a clean, professional RFP with consistent language takes
              hours.
            </p>
            <blockquote>
              <p>
                <strong>Paperfly Fix:</strong> Paperfly generates ready-to-export
                RFPs in Word, PDF, or Google Docs in minutes.
              </p>
            </blockquote>

            <h3>4. Inconsistent Vendor Responses</h3>
            <p>
              When questions are unclear or unstructured, vendors submit wildly
              different proposals, making them impossible to compare.
            </p>
            <blockquote>
              <p>
                <strong>Paperfly Fix:</strong> Our RFP builder generates a
                mirrored Q&A form for vendors, ensuring responses are easy to
                review.
              </p>
            </blockquote>

            <h3>5. No Scoring Logic</h3>
            <p>
              Many teams still evaluate proposals subjectively because there's no
              shared rubric.
            </p>
            <blockquote>
              <p>
                <strong>Paperfly Fix:</strong> We provide built-in evaluation
                models that align with your industry and goals.
              </p>
            </blockquote>

            <h2>Why It Matters</h2>
            <p>
              A Strong RFP isn't just about compliance. It's your first
              opportunity to attract the right vendors, set clear expectations,
              and streamline decision-making. Paperfly brings structure,
              intelligence, and speed to that process.
            </p>

            <div className="not-prose text-center my-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Want to see it in action?
              </h3>
              <p className="text-xl text-slate-600 mb-8">
                Transform your RFP process from painful to powerful
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
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default WhyRfpCreationIsStillBrokenIn2025AndHowToFixIt;
