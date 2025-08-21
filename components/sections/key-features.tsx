"use client";

import { motion, useInView } from "framer-motion";
import {
  Clock,
  TrendingUp,
  FileCheck,
  Users,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Animated counter component
const AnimatedCounter = ({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-bold">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

// Progress bar component with animation
const ProgressBar = ({
  percentage,
  label,
  delay = 0,
  color = "#005DF2",
}: {
  percentage: number;
  label: string;
  delay?: number;
  color?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-bold" style={{ color }}>
          <AnimatedCounter target={percentage} suffix="%" />
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

// Metric card with visual emphasis
const MetricCard = ({
  icon,
  value,
  label,
  description,
  index,
  color = "#005DF2",
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  index: number;
  color?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-[#005DF2]/30 relative overflow-hidden group"
    >
      {/* Background gradient effect */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 -mr-12 -mt-12 transition-all duration-300 group-hover:opacity-20"
        style={{ backgroundColor: color }}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div
            className="p-4 rounded-xl w-16 h-16 flex items-center justify-center"
            style={{ backgroundColor: `${color}15` }}
          >
            <div style={{ color }}>{icon}</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="text-4xl font-bold mb-2" style={{ color }}>
            {value}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{label}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const KeyFeatures = () => {
  // Key metrics with visual impact
  const metrics = [
    {
      icon: <Clock size={28} />,
      value: "40%",
      label: "Time Savings",
      description:
        "Average time saved on RFP authoring and review cycles compared to manual processes.",
      color: "#005DF2",
    },
    {
      icon: <TrendingUp size={28} />,
      value: "2×",
      label: "Faster Decisions",
      description:
        "Speed up vendor selection with built-in scoring and side-by-side comparison tools.",
      color: "#004acf",
    },
    {
      icon: <FileCheck size={28} />,
      value: "100%",
      label: "Template Consistency",
      description:
        "Perfect formatting across all export formats including Word, PDF, and Google Docs.",
      color: "#0052d4",
    },
  ];

  return (
    <section
      id="key-features"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            KEY OUTCOMES
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-[#005DF2] to-[#004acf] mx-auto mb-8 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real results from organizations that chose clarity over complexity
          </p>
        </motion.div> */}

        {/* Main metrics grid */}

        {/* Interactive progress visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Process Improvement Breakdown
            </h3>
            <p className="text-gray-600 text-lg">
              See how Paperfly transforms your RFP workflow efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-6 text-gray-800">
                Time Allocation
              </h4>
              <ProgressBar
                percentage={75}
                label="Document Creation"
                delay={0.2}
                color="#005DF2"
              />
              <ProgressBar
                percentage={60}
                label="Review & Revision"
                delay={0.4}
                color="#004acf"
              />
              <ProgressBar
                percentage={85}
                label="Vendor Communication"
                delay={0.6}
                color="#0052d4"
              />
              <ProgressBar
                percentage={90}
                label="Scoring & Evaluation"
                delay={0.8}
                color="#003ba3"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-[#005DF2]/10 to-[#004acf]/10 rounded-2xl p-8 text-center">
                <div className="mb-6">
                  <div className="text-5xl font-bold text-[#005DF2] mb-2">
                    <AnimatedCounter target={32} />
                  </div>
                  <div className="text-lg text-gray-700 font-medium">
                    Hours Saved
                  </div>
                  <div className="text-sm text-gray-500">Per RFP Process</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#004acf]">
                      <AnimatedCounter target={94} suffix="%" />
                    </div>
                    <div className="text-xs text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0052d4]">
                      <AnimatedCounter target={67} suffix="%" />
                    </div>
                    <div className="text-xs text-gray-600">Response Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom disclaimer with better visual treatment */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-2 items-center bg-gradient-to-r from-[#005DF2]/10 to-[#004acf]/10 text-gray-700 font-medium px-6 py-3 rounded-full border border-gray-200">
            <CheckCircle2 size={16} className="mr-2 text-[#005DF2] shrink-0" />
            Data reflects early customer results - actual savings vary by
            organization maturity
          </div>
        </motion.div>
      </div>
    </section>
  );
};
