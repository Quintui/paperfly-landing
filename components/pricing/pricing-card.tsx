"use client";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type React from "react";

interface PricingCardProps {
  plan: {
    name: string;
    badge?: {
      text: string;
      variant: "new" | "popular";
    };
    description: string;
    price: number | string;
    period: string;
    features: { name: string; icon: React.ElementType }[];
    buttonText: string;
    buttonVariant: "primary" | "outline";
    buttonLink: string;
    footer?: {
      text: string;
      link?: {
        text: string;
        href: string;
      };
    };
  };
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card className="relative overflow-hidden rounded-[12px] border border-gray-200 bg-white shadow-lg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,93,242,0.02),rgba(0,93,242,0))]" />

      <CardContent className="relative z-10 p-6">
        <div className="space-y-4">
          {plan.badge && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-end w-full"
            >
              <Badge
                variant="outline"
                className={cn(
                  plan.badge.variant === "new" &&
                    "border-green-200 bg-green-50 text-green-700",
                  plan.badge.variant === "popular" &&
                    "bg-[#005DF2]/10 border-[#005DF2]/20 text-[#005DF2]"
                )}
              >
                {plan.badge.text}
              </Badge>
            </motion.div>
          )}

          <div className="mt-8">
            <motion.h3
              className="text-[24px] font-semibold tracking-tight text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {plan.name}
            </motion.h3>
            <motion.p
              className="mt-2 text-[14px] leading-relaxed text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {plan.description}
            </motion.p>
          </div>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="flex items-baseline">
              {typeof plan.price === 'number' ? (
                <>
                  <span className="text-[48px] font-semibold tracking-tight text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="ml-1 text-[14px] text-gray-600">USD</span>
                </>
              ) : (
                <span className="text-[48px] font-semibold tracking-tight text-gray-900">
                  {plan.price}
                </span>
              )}
            </div>
            <p className="mt-1 text-[14px] text-gray-600">{plan.period}</p>
          </motion.div>

          <motion.ul
            className="space-y-3 py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <feature.icon className="w-5 h-5 mr-3 text-[#005DF2]" />
                <span className="text-[14px] text-gray-700">
                  {feature.name}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <a
              href={plan.buttonLink}
              className={cn(
                buttonVariants({
                  variant:
                    plan.buttonVariant === "primary" ? "default" : "outline",
                }),
                "w-full transition-all duration-200",
                plan.buttonVariant === "primary" &&
                  "bg-[#005DF2] text-white hover:bg-[#0052d4]",
                plan.buttonVariant === "outline" &&
                  "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
              )}
            >
              <span className="relative">
                {plan.buttonText}
                <motion.span
                  className="absolute bottom-0 left-0 h-[1px] w-full bg-current"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </a>
          </motion.div>
        </div>
      </CardContent>
      {plan.footer && (
        <CardFooter className="relative z-10 px-6 py-4 border-t border-gray-100">
          <motion.p
            className="text-[14px] text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            {plan.footer.text}
            {plan.footer.link && (
              <a
                href={plan.footer.link.href}
                className="ml-1 text-[#005DF2] hover:text-[#0052d4] hover:underline"
              >
                {plan.footer.link.text}
              </a>
            )}
          </motion.p>
        </CardFooter>
      )}
    </Card>
  );
}
