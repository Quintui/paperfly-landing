"use client";
import { HeroSection } from "@/components/pricing/hero-section";
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
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DASHBOARD_URL } from "@/lib/constants";
import { DEMO_BOOKING_URL } from "@/lib/constants";
import { CallToAction } from "@/components/sections/call-to-action";

const plan = {
  name: "Complete RFP/RFI Solution",
  badge: {
    text: "Everything Included",
    variant: "popular" as const,
  },
  description:
    "Professional RFP and RFI creation and vendor management in minutes.",
  price: 299,
  period: "per RFP/RFI project",
  buttonText: "Get Started",
  buttonVariant: "primary" as const,
  buttonLink: DASHBOARD_URL,
  features: [
    { name: "2-minute RFP/RFI generation with built-in editor", icon: Clock },
    { name: "Smart vendor response forms", icon: FileText },
    { name: "Automated scoring & AI recommendations", icon: BarChart3 },
    { name: "Bilingual documents (English & French)", icon: Globe },
    { name: "Vendor distribution system built-in", icon: Users },
    { name: "Customer success consultation included", icon: CheckCircle },
  ],
  footer: {
    text: "No setup fees • No monthly subscriptions • Unlimited vendor responses",
  },
};

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
      "No limits. Our flat $299 fee covers unlimited vendor responses, so you can reach as many potential vendors as needed.",
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
      "Yes, customer success consultation is included with every RFP/RFI project to ensure you get the best results from our platform.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Sticky Header */}
      <Header />
      <div className="pt-[72px] min-h-screen bg-white text-gray-900">
        <main className="relative">
          {/* <HeroSection /> */}

          <div className="container mx-auto px-4 space-y-16 py-16">
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Simple Pricing
              </h2>
              <div className="max-w-md mx-auto">
                <PricingCard plan={plan} />
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

            <CallToAction />
            {/*             <section className="text-center bg-gray-50 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your RFP/RFI Process in Minutes
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Join organizations worldwide who have streamlined their vendor
                selection process with our AI-powered solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#005DF2] text-white hover:bg-[#0052d4]"
                  asChild
                >
                  <a href={DASHBOARD_URL}>
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <a
                  href={DEMO_BOOKING_URL}
                  className={buttonVariants({
                    size: "lg",
                    variant: "outline",
                    className:
                      "border-gray-300 text-gray-900 hover:bg-gray-100 bg-white",
                  })}
                >
                  Book a Demo
                </a>
              </div>
            </section> */}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
