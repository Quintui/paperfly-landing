"use client";

import { motion, useInView } from "framer-motion";
import {
  AlertTriangle,
  FileText,
  Pen,
  Upload,
  Zap,
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

// Transformation step component
const TransformationStep = ({
  step,
  title,
  description,
  icon,
  delay = 0,
  isLast = false,
}: {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  isLast?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex items-start gap-4 relative"
    >
      {/* Step connector line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-[#005DF2]/30 to-transparent"></div>
      )}

      {/* Step number and icon */}
      <div className="flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: delay + 0.1, type: "spring" }}
          viewport={{ once: true }}
          className="w-12 h-12 bg-gradient-to-r from-[#005DF2] to-[#0040a0] rounded-full flex items-center justify-center text-white font-bold relative"
        >
          {step}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.2, delay: delay + 0.3 }}
            viewport={{ once: true }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <div className="text-[#005DF2]">{icon}</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Problem indicator component
const ProblemIndicator = ({
  icon,
  problem,
  impact,
  delay = 0,
}: {
  icon: React.ReactNode;
  problem: string;
  impact: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-red-50 border border-red-200 rounded-xl p-6 relative overflow-hidden group hover:bg-red-100/50 transition-colors duration-300"
    >
      {/* Subtle warning pattern */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-5 -mr-10 -mt-10">
        <AlertTriangle size={80} className="text-red-500" />
      </div>

      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-2 bg-red-100 rounded-lg">
            <div className="text-red-600">{icon}</div>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-red-900 mb-2">{problem}</h4>
            <p className="text-red-700 text-sm leading-relaxed">{impact}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const WhatWeDo = () => {
  const centerArrowRef = useRef(null);
  const centerArrowInView = useInView(centerArrowRef, { once: true });

  const problems = [
    {
      icon: <FileText size={20} />,
      problem: "Scattered Information",
      impact:
        "Teams waste 15+ hours collecting requirements from emails, meetings, and outdated documents.",
    },
    {
      icon: <Pen size={20} />,
      problem: "Generic Templates",
      impact:
        "One-size-fits-all RFPs lead to vague responses and poor vendor matches.",
    },
    {
      icon: <Users size={20} />,
      problem: "Manual Scoring Chaos",
      impact:
        "Spreadsheet-based evaluation creates bias, inconsistency, and delayed decisions.",
    },
    {
      icon: <Clock size={20} />,
      problem: "Endless Revisions",
      impact:
        "Multiple stakeholders create bottlenecks with conflicting feedback and approval cycles.",
    },
  ];

  const transformationSteps = [
    {
      title: "Guided, AI-assisted RFP creation flow",
      description:
        "Step-by-step guidance with intelligent AI assistance throughout the RFP creation process.",
      icon: <Upload size={14} />,
    },
    {
      title: "Auto-generated, project-specific Q&A form",
      description:
        "Automatically create tailored question and answer forms for your project requirements.",
      icon: <Zap size={14} />,
    },
    {
      title: "Rubric-based scoring workspace (weights, criteria, stakeholders)",
      description:
        "Structured evaluation environment with standardized scoring criteria and stakeholder collaboration.",
      icon: <Pen size={14} />,
    },
    {
      title: "Clean, shareable submission link—no account required",
      description:
        "Generate professional submission portals that vendors can access instantly.",
      icon: <FileText size={14} />,
    },
  ];

  return (
    <section
      id="what-we-do"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className=" text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            WHY PAPERFLY
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-[#005DF2] to-[#004acf] mx-auto mb-8 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From procurement pain points to streamlined success - see how we
            transform the RFP journey
          </p>
        </motion.div>

        {/* Three-column transformation layout */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left: Current Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <AlertTriangle className="text-red-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-2">
                Current Reality
              </h3>
              <p className="text-red-700">
                The hidden costs of manual RFP processes
              </p>
            </div>

            {problems.map((problem, index) => (
              <ProblemIndicator
                key={index}
                icon={problem.icon}
                problem={problem.problem}
                impact={problem.impact}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          {/* Center: Transformation Arrow */}
          <div className="flex flex-col items-center justify-center lg:py-12">
            <motion.div
              ref={centerArrowRef}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={centerArrowInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex flex-col items-center justify-center"
            >
              {/* Animated transformation visual */}
              <div className="relative w-32 h-32 mb-6">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={centerArrowInView ? { rotate: 360 } : {}}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 border-4 border-dashed border-[#005DF2]/30 rounded-full"
                ></motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={centerArrowInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="absolute inset-4 bg-gradient-to-r from-[#005DF2] to-[#004acf] rounded-full flex items-center justify-center"
                >
                  <Sparkles className="text-white" size={24} />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={centerArrowInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1 }}
                className="text-center"
              >
                <h4 className="font-bold text-[#005DF2] mb-2">
                  Paperfly Magic
                </h4>
                <p className="text-sm text-gray-600">
                  AI-powered transformation
                </p>
              </motion.div>

              {/* Flowing arrow */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={centerArrowInView ? { x: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 1.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2,
                }}
                className="hidden lg:block absolute top-1/2 -right-16 transform -translate-y-1/2"
              >
                <ArrowRight className="text-[#005DF2]" size={32} />
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Paperfly Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 "
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <CheckCircle2 className="text-[#005DF2]" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#005DF2] mb-2">
                With Paperfly
              </h3>
              <p className="text-[#004acf]">
                Streamlined, intelligent, results-driven
              </p>
            </div>

            {transformationSteps.map((step, index) => (
              <TransformationStep
                key={index}
                step={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={index * 0.1}
                isLast={index === transformationSteps.length - 1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
