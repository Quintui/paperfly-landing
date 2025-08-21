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
  Cpu,
  Target,
  AlertTriangle,
  Rocket,
} from "lucide-react";
import Link from "next/link";

const AcceleratingTechProcurement = () => {
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
                  Tech Procurement
                </Badge>
                <div className="md:flex hidden  items-center space-x-2 text-slate-500">
                  <User className="w-4 h-4" />
                  <span className="font-medium">Paperfly Team</span>
                  <span>•</span>
                  <Calendar className="w-4 h-4" />
                  <span>June 2025</span>
                  <span>•</span>
                  <Clock className="w-4 h-4" />
                  <span>6 min read</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-slate-900">
                  Accelerating Tech Procurement
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#005DF2] to-[#0048C1] bg-clip-text text-transparent">
                  Fixing Common Mistakes
                </span>
                <br />
                <span className="text-slate-700 text-3xl md:text-4xl">
                  in RFP Creation
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                In the fast-paced world of technology and SaaS companies,
                procurement often feels rushed. RFP processes designed to move
                quickly frequently skip critical steps, leading to security
                risks, compliance gaps, and ultimately poor vendor selections.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 py-12">
          <article className="prose prose-lg lg:prose-xl max-w-none">
            <p>
              Tech teams need a streamlined approach that doesn't sacrifice
              thoroughness for speed. The pressure to move fast in technology
              companies often leads to rushed decisions that can have long-term
              consequences for security, compliance, and operational efficiency.
            </p>
            <p>
              Rapid growth and agile operations mean that tech companies often use
              rushed or informal RFPs, resulting in vendor mismatches and gaps in
              security or compliance checks. This approach puts critical
              operations at risk.
            </p>
            <blockquote>
              <p>Paperfly provides the speed and precision tech companies need.</p>
            </blockquote>

            <h2>Frequent Tech Procurement Challenges</h2>
            <p>The obstacles that slow down tech procurement teams.</p>

            <h3>Short Timelines with Poorly Defined Scoring Criteria</h3>
            <p>
              Tech companies often operate under tight deadlines, leading to
              rushed RFP processes with unclear evaluation criteria. This results
              in subjective decision-making and vendor selections that don't align
              with long-term business objectives.
            </p>

            <h3>Misalignment Between Cross-Functional Teams</h3>
            <p>
              Product, IT, security, and procurement teams often have different
              priorities and timelines. This misalignment leads to conflicting
              requirements, delayed decisions, and vendor selections that don't
              meet all stakeholders' needs.
            </p>

            <h3>Inconsistent or Incomplete RFP Documentation</h3>
            <p>
              Rushed processes often result in unclear requirements, missing
              security specifications, and incomplete vendor evaluation criteria.
              This leads to confusion, inconsistent responses, and poor vendor
              matches that don't meet technical or business needs.
            </p>

            <h2>Why Current Practices Fall Short</h2>
            <p>Rushed processes that compromise tech procurement quality.</p>
            <ul>
              <li>Rushed RFPs skip critical security and compliance checks</li>
              <li>
                Informal processes lead to vendor mismatches and poor selections
              </li>
              <li>
                Lack of standardized evaluation criteria results in subjective
                decisions
              </li>
              <li>
                Critical operations are put at risk due to inadequate vendor
                assessment
              </li>
              <li>Cross-functional misalignment delays procurement decisions</li>
              <li>
                Incomplete documentation leads to unclear vendor requirements
              </li>
            </ul>

            <h2>The Paperfly Solution</h2>
            <p>Fast, precise tools designed for tech procurement needs.</p>

            <h3>Quick-Start, Customizable Templates</h3>
            <p>
              Pre-built templates specifically designed for tech procurement that
              can be quickly customized and deployed. These templates include all
              necessary sections for security, compliance, scalability, and
              technical requirements while maintaining speed.
            </p>
            <blockquote>
              <p>
                <strong>Speed Without Sacrifice:</strong> Templates are designed
                for rapid deployment while ensuring comprehensive coverage.
              </p>
            </blockquote>

            <h3>Clear, Built-In Scoring Rubrics</h3>
            <p>
              Comprehensive evaluation frameworks that address security,
              compliance, scalability, and technical requirements. These rubrics
              ensure objective, consistent vendor assessment while maintaining the
              speed tech companies need.
            </p>
            <blockquote>
              <p>
                <strong>Objective Evaluation:</strong> Built-in criteria ensure
                consistent, thorough vendor assessment.
              </p>
            </blockquote>

            <h3>Integrated Collaboration Features</h3>
            <p>
              Real-time collaboration tools that bring product, IT, security, and
              procurement teams together in a unified workspace. This ensures
              alignment, speeds up decision-making, and maintains the quality
              standards tech companies require.
            </p>
            <blockquote>
              <p>
                <strong>Cross-Functional Alignment:</strong> Unified workspace
                ensures all teams work together efficiently.
              </p>
            </blockquote>

            <h2>Why This Matters for Tech Companies</h2>
            <p>
              Tech companies can effectively balance speed and quality in
              procurement by using Paperfly, ensuring that vendor selections are
              quick, precise, and secure. This approach directly impacts
              operational efficiency, security posture, and competitive advantage
              in the fast-moving technology landscape.
            </p>

            <h2>Conclusion</h2>
            <p>
              Technology companies don't have to choose between speed and quality
              in procurement. By embracing modern, streamlined tools like
              Paperfly, tech teams can accelerate their procurement processes
              while maintaining the thoroughness required for security,
              compliance, and optimal vendor selection.
            </p>
            <p>
              The key is moving away from rushed, informal processes and toward
              structured, automated solutions that prioritize both speed and
              precision. When tech procurement teams have the right tools, they
              can focus on what matters most: building competitive advantages
              through strategic vendor partnerships that support rapid growth and
              innovation.
            </p>

            <div className="not-prose text-center my-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to accelerate your tech procurement process?
              </h3>
              <p className="text-xl text-slate-600 mb-8">
                See how Paperfly can help you balance speed and quality
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

export default AcceleratingTechProcurement;
