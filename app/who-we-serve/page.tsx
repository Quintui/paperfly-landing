"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { DEMO_BOOKING_URL } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Building2,
  Building,
  Store,
  Users,
  Briefcase,
  Hospital,
  Factory,
  Landmark,
  GraduationCap,
  BadgeDollarSign,
  ShoppingBag,
  Heart,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import { CallToActionSection } from "@/components/sections/call-to-action";
import Link from "next/link";

export default function WhoWeServePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Sticky Header */}
      <Header />

      {/* Add padding to account for fixed header */}
      <div className="pt-[72px]">
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Industries We Serve
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our platform is tailored to meet the unique needs of various
                industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Technology",
                  description:
                    "Help tech companies source the right solutions and services with detailed technical requirements and evaluation criteria.",
                  icon: <Briefcase className="w-8 h-8" strokeWidth={1.5} />,
                  href: "/technology-saas-tech",
                },
                {
                  name: "Healthcare",
                  description:
                    "Support healthcare providers in procuring medical equipment and services while maintaining regulatory compliance.",
                  icon: <Hospital className="w-8 h-8" strokeWidth={1.5} />,
                  href: "/healthcare",
                },
                {
                  name: "Manufacturing",
                  description:
                    "Enable manufacturers to efficiently source materials, equipment, and services while optimizing their supply chain.",
                  icon: <Factory className="w-8 h-8" strokeWidth={1.5} />,
                  href: "/manufacturing",
                },
                {
                  name: "Government",
                  description:
                    "Streamline public sector procurement with compliant RFP processes that ensure transparency and fair competition.",
                  icon: <Landmark className="w-8 h-8" strokeWidth={1.5} />,
                  href: "/government",
                },
                {
                  name: "Higher Education",
                  description:
                    "Navigating committee approvals and public funding requirements with transparent, auditable procurement workflows.",
                  icon: <GraduationCap className="w-8 h-8" strokeWidth={1.5} />,
                  href: "/higher-education",
                },
                {
                  name: "Financial Services",
                  description:
                    "Enable financial institutions to maintain compliance while efficiently managing vendor selection and procurement.",
                  icon: (
                    <BadgeDollarSign className="w-8 h-8" strokeWidth={1.5} />
                  ),
                  href: "/financial-services",
                },
                {
                  name: "Retail",
                  description:
                    "Support retail businesses in finding the right vendors for inventory, logistics, and store operations.",
                  icon: <ShoppingBag className="w-8 h-8" strokeWidth={1.5} />,
                  href: "/retail",
                },
                {
                  name: "Non-Profit",
                  description:
                    "Help non-profits maximize their impact by streamlining procurement processes and ensuring donor fund efficiency.",
                  icon: <Heart className="w-8 h-8" strokeWidth={1.5} />,
                  href: "/non-profit",
                },
                {
                  name: "Hospitality & Food Services",
                  description:
                    "Sourcing for hotels, restaurants, and events with a focus on quality, compliance, and speed.",
                  icon: <UtensilsCrossed className="w-8 h-8" strokeWidth={1.5} />,
                  href: "/hospitality-food-services",
                },
              ].map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group hover:border-[#005DF2] transition-colors"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="text-gray-600 group-hover:text-[#005DF2] transition-colors">
                      {industry.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#005DF2]">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 text-sm text-center">
                      {industry.description}
                    </p>
                    <Link
                      href={industry.href}
                      className="text-[#005DF2] underline hover:no-underline font-medium mt-2"
                    >
                      Read more
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Segments Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Customer Segments
              </h2>
              <div className="w-20 h-1 bg-[#005DF2] mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                From enterprise organizations to small businesses, we help teams
                create better RFPs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Enterprise */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex justify-center items-center h-32 mb-6 rounded-lg bg-[#005DF2]/5">
                  <Building2
                    className="w-16 h-16 text-[#005DF2]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#005DF2]">
                  Enterprise Organizations
                </h3>
                <p className="text-gray-700 mb-6">
                  Large organizations that need to streamline their procurement
                  process and maintain compliance across multiple departments.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-[#005DF2]">✓</div>
                    <p className="text-gray-700">
                      Enterprise-grade security and compliance
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-[#005DF2]">✓</div>
                    <p className="text-gray-700">
                      Multi-department collaboration tools
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-[#005DF2]">✓</div>
                    <p className="text-gray-700">
                      Advanced analytics and reporting
                    </p>
                  </li>
                </ul>
              </motion.div>

              {/* Mid-Market */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex justify-center items-center h-32 mb-6 rounded-lg bg-[#005DF2]/5">
                  <Building
                    className="w-16 h-16 text-[#005DF2]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#005DF2]">
                  Mid-Market Companies
                </h3>
                <p className="text-gray-700 mb-6">
                  Growing businesses that need efficient RFP creation tools to
                  scale their procurement operations.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-[#005DF2]">✓</div>
                    <p className="text-gray-700">
                      Quick implementation and onboarding
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-[#005DF2]">✓</div>
                    <p className="text-gray-700">
                      Customizable templates and workflows
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-[#005DF2]">✓</div>
                    <p className="text-gray-700">
                      Competitive pricing for growing teams
                    </p>
                  </li>
                </ul>
              </motion.div>

              {/* Small Business */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex justify-center items-center h-32 mb-6 rounded-lg bg-[#005DF2]/5">
                  <Store
                    className="w-16 h-16 text-[#005DF2]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#005DF2]">
                  Small Businesses
                </h3>
                <p className="text-gray-700 mb-6">
                  Small teams that need professional RFP creation capabilities
                  without the enterprise complexity.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-[#005DF2]">✓</div>
                    <p className="text-gray-700">Easy-to-use interface</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-[#005DF2]">✓</div>
                    <p className="text-gray-700">
                      Pre-built templates for quick starts
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-[#005DF2]">✓</div>
                    <p className="text-gray-700">Affordable pricing options</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <CallToActionSection
          title="Streamline Your RFP Process Today"
          description="Book a Demo to see how Paperfly can help you create professional, bilingual RFPs faster, collect structured vendor responses, instantly grade them, and notify vendors in one platform."
        />

        <Footer />
      </div>
    </div>
  );
}
