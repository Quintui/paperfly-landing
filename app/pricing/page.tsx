"use client";
import { useState } from "react";
import { PricingCard } from "@/components/pricing/pricing-card";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  FileText,
  Users,
  BarChart3,
  Globe,
  Zap,
  Target,
  TrendingUp,
  Building2,
  CheckCircle,
  ArrowRight,
  Shield,
  Headphones,
  Lock,
  FormInput,
  Link,
  MessageSquare,
  Mail,
  FileCheck,
  UserPlus,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DASHBOARD_URL } from "@/lib/constants";
import { DEMO_BOOKING_URL } from "@/lib/constants";
import { CtaSection } from "@/components/sections/cta-section";
import { cn } from "@/lib/utils";

const howItWorks = [
  {
    step: "1",
    title: "Describe Your Project",
    description: "Input your project requirements and specifications",
    icon: FileText,
  },
  {
    step: "2",
    title: "Get Professional RFP/RFI",
    description: "AI generates a comprehensive RFP or RFI in under 2 minutes",
    icon: Zap,
  },
  {
    step: "3",
    title: "Distribute to Vendors",
    description: "Send to vendors through our integrated platform",
    icon: Users,
  },
  {
    step: "4",
    title: "Get AI Recommendations",
    description: "Automatic evaluation scores and detailed analysis",
    icon: Target,
  },
];

const perfectFor = [
  {
    title: "Procurement Teams",
    description: "Seeking efficiency in vendor selection processes",
    icon: Building2,
  },
  {
    title: "Project Managers",
    description: "Handling vendor selection for various projects",
    icon: Users,
  },
  {
    title: "Organizations",
    description: "From startups to enterprise-level companies",
    icon: TrendingUp,
  },
  {
    title: "Industry Sectors",
    description: "Government, healthcare, tech, manufacturing",
    icon: Globe,
  },
];

const benefits = [
  {
    title: "10x Faster",
    description: "Than traditional RFP/RFI creation methods",
    icon: Zap,
  },
  {
    title: "Objective Selection",
    description: "AI-powered vendor evaluation and scoring",
    icon: Target,
  },
  {
    title: "60% Better Quality",
    description: "Structured forms improve response quality",
    icon: BarChart3,
  },
  {
    title: "Expand Reach",
    description: "Bilingual capabilities for broader vendor pool",
    icon: Globe,
  },
];

const faqs = [
  {
    question: "How quickly can I create an RFP or RFI?",
    answer:
      "Under 2 minutes with our AI-powered generator, then customize with our built-in editor to match your specific requirements.",
  },
  {
    question: "Are there any limits on vendor responses?",
    answer:
      "No limits. Your subscription covers unlimited vendor responses, so you can reach as many potential vendors as needed.",
  },
  {
    question: "Can I customize evaluation criteria?",
    answer:
      "Yes, you can adjust scoring weights and add custom parameters to match your specific evaluation needs and organizational requirements.",
  },
  {
    question: "What industries do you support?",
    answer:
      "We support all industries including government, healthcare, technology, manufacturing, and more. Our platform adapts to various sector requirements.",
  },
  {
    question: "Is there ongoing support included?",
    answer:
      "Yes, customer success consultation is included with every subscription to ensure you get the best results from our platform.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. If you're on a yearly plan, you'll continue to have access until the end of your billing period.",
  },
];

export default function Page() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "yearly",
  );

  const proPlanMonthly = {
    name: "Complete RFP/RFI Solution",
    badge: {
      text: "Everything Included",
      variant: "popular" as const,
    },
    description:
      "Professional RFP and RFI creation and vendor management in minutes.",
    price: 499,
    period: "per month",
    buttonText: "Get Started",
    buttonVariant: "primary" as const,
    buttonLink: DASHBOARD_URL,
    features: [
      {
        name: "Unlimited RFP/RFI generation with built-in editor",
        icon: Clock,
      },
      { name: "Smart vendor response forms", icon: FileText },
      { name: "Automated scoring & AI recommendations", icon: BarChart3 },
      { name: "Bilingual documents (English & French)", icon: Globe },
      { name: "Vendor distribution system built-in", icon: Users },
      { name: "Team collaboration & workspace sharing", icon: UserPlus },
      { name: "Customer success consultation included", icon: CheckCircle },
    ],
    footer: {
      text: "No setup fees • Unlimited RFP/RFI projects • Unlimited vendor responses",
    },
  };

  const proPlanYearly = {
    name: "Complete RFP/RFI Solution",
    badge: {
      text: "Save 2 months",
      variant: "popular" as const,
    },
    description:
      "Professional RFP and RFI creation and vendor management in minutes.",
    price: 416,
    period: "per month",
    yearlyTotal: "Billed $4,990 yearly",
    buttonText: "Get Started",
    buttonVariant: "primary" as const,
    buttonLink: DASHBOARD_URL,
    features: [
      {
        name: "Unlimited RFP/RFI generation with built-in editor",
        icon: Clock,
      },
      { name: "Smart vendor response forms", icon: FileText },
      { name: "Automated scoring & AI recommendations", icon: BarChart3 },
      { name: "Bilingual documents (English & French)", icon: Globe },
      { name: "Vendor distribution system built-in", icon: Users },
      { name: "Team collaboration & workspace sharing", icon: UserPlus },
      { name: "Customer success consultation included", icon: CheckCircle },
    ],
    footer: {
      text: "No setup fees • Unlimited RFP/RFI projects • Unlimited vendor responses",
    },
  };

  const enterprisePlan = {
    name: "Enterprise",
    badge: {
      text: "Custom Solution",
      variant: "new" as const,
    },
    description:
      "Tailored solutions for organizations with advanced requirements and high-volume needs.",
    price: "Custom",
    period: "Contact us for pricing",
    buttonText: "Contact Us",
    buttonVariant: "outline" as const,
    buttonLink: DEMO_BOOKING_URL,
    features: [
      { name: "Everything in Complete Solution", icon: CheckCircle },
      { name: "Volume Discounts", icon: Target },
      { name: "Private knowledge base", icon: FileText },
      { name: "Dedicated account manager", icon: Headphones },
      { name: "Priority support & onboarding", icon: Shield },
      { name: "Custom integrations & workflows", icon: Zap },
      { name: "Advanced security & compliance", icon: Lock },
    ],
    footer: {
      text: "Volume discounts • SLA agreements available • Custom features",
    },
  };

  const currentProPlan =
    billingPeriod === "monthly" ? proPlanMonthly : proPlanYearly;

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Sticky Header */}
      <Header />
      <div className="pt-[72px] min-h-screen bg-white text-gray-900">
        <main className="relative">
          <div className="container mx-auto px-4 space-y-16 py-16">
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Simple Pricing
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Choose the plan that works best for your organization
              </p>

              {/* Billing Toggle */}
              <div className="flex justify-center mb-12">
                <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
                  <button
                    onClick={() => setBillingPeriod("monthly")}
                    className={cn(
                      "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
                      billingPeriod === "monthly"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900",
                    )}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingPeriod("yearly")}
                    className={cn(
                      "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2",
                      billingPeriod === "yearly"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900",
                    )}
                  >
                    Yearly
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                      Save 2 months
                    </span>
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Pro Plan Card */}
                <div className="relative overflow-hidden rounded-[12px] border border-gray-200 bg-white shadow-lg">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,93,242,0.02),rgba(0,93,242,0))]" />
                  <div className="relative z-10 p-6">
                    <div className="space-y-4">
                      <div className="flex justify-end w-full">
                        <span
                          className={cn(
                            "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
                            billingPeriod === "yearly"
                              ? "border-green-200 bg-green-50 text-green-700"
                              : "bg-[#005DF2]/10 border-[#005DF2]/20 text-[#005DF2]",
                          )}
                        >
                          {currentProPlan.badge?.text}
                        </span>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-[24px] font-semibold tracking-tight text-gray-900">
                          {currentProPlan.name}
                        </h3>
                        <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
                          {currentProPlan.description}
                        </p>
                      </div>

                      <div className="pt-4">
                        <div className="flex items-baseline">
                          <span className="text-[48px] font-semibold tracking-tight text-gray-900">
                            ${currentProPlan.price}
                          </span>
                          <span className="ml-1 text-[14px] text-gray-600">
                            USD
                          </span>
                        </div>
                        <p className="mt-1 text-[14px] text-gray-600">
                          {currentProPlan.period}
                        </p>
                        {billingPeriod === "yearly" && (
                          <p className="mt-1 text-[14px] font-medium text-[#005DF2]">
                            Billed $4,990 yearly
                          </p>
                        )}
                      </div>

                      <ul className="space-y-3 py-4">
                        {currentProPlan.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <feature.icon className="w-5 h-5 mr-3 text-[#005DF2]" />
                            <span className="text-[14px] text-gray-700">
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div>
                        <a
                          href={currentProPlan.buttonLink}
                          className={cn(
                            buttonVariants({ variant: "default" }),
                            "w-full transition-all duration-200 bg-[#005DF2] text-white hover:bg-[#0052d4]",
                          )}
                        >
                          {currentProPlan.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 px-6 py-4 border-t border-gray-100">
                    <p className="text-[14px] text-gray-600">
                      {currentProPlan.footer?.text}
                    </p>
                  </div>
                </div>

                {/* Enterprise Card */}
                <PricingCard plan={enterprisePlan} />
              </div>
            </section>

            <section className="bg-gray-50 rounded-3xl p-4 pt-12 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                How It Works
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {howItWorks.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-[#005DF2]/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-[#005DF2]" />
                    </div>
                    <div className="bg-[#005DF2] text-white rounded-full w-8 h-8 mx-auto mb-4 flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Perfect For
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {perfectFor.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl"
                  >
                    <div className="bg-[#005DF2]/10 p-3 rounded-lg">
                      <item.icon className="w-6 h-6 text-[#005DF2]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-50 rounded-3xl p-4 pt-12 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose Us?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center bg-white p-8 rounded-xl shadow-sm"
                  >
                    <benefit.icon className="w-12 h-12 text-[#005DF2] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-gray-200"
                  >
                    <AccordionTrigger className="text-left hover:text-[#005DF2] text-gray-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            <CtaSection />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
