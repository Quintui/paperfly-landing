"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  CalendarClock,
  ShieldCheck,
  Globe,
  Star,
} from "lucide-react";

const challenges = [
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "High Volume, High Turnover",
    description:
      "Restaurants, hotels, and catering operations often change suppliers or service providers more frequently than other industries.",
  },
  {
    icon: <CalendarClock className="w-8 h-8 text-white" />,
    title: "Seasonal & Event-Based Needs",
    description:
      "Procurement must ramp up for events, holidays, or peak seasons without missing deadlines.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Compliance & Food Safety",
    description:
      "Sourcing in food services means navigating regulations like HACCP, FSMA, and local health codes.",
  },
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "Diverse Vendor Pool",
    description:
      "Suppliers range from small artisanal producers to large international distributors — often requiring bilingual communication.",
  },
  {
    icon: <Star className="w-8 h-8 text-white" />,
    title: "Brand Consistency",
    description:
      "Procurement choices impact everything from menu quality to guest amenities.",
  },
];

export function RfpChallengesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Unique Procurement Challenges in Hospitality & Food Services
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full bg-[#005DF2] text-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    {challenge.icon}
                  </div>
                  <CardTitle className="text-xl text-white">
                    {challenge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">{challenge.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
