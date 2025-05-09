"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { DEMO_BOOKING_URL } from "@/lib/constants";

export const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 right-[10%] w-64 h-64 bg-[#005DF2] rounded-full blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-20 left-[10%] w-80 h-80 bg-[#005DF2] rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Create RFPs & RFIs in{" "}
              <motion.span 
                className="text-[#005DF2] relative inline-block"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Minutes
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-1 bg-[#005DF2]"
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                />
              </motion.span>{" "}
              — Not Days
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Skip the blank page. Instantly generate professional, ready-to-use
            RFPs and RFIs without the manual grind.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Button
              className="bg-[#005DF2] hover:bg-[#004acf] text-white text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              asChild
            >
              <a
                href={DEMO_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Book a Demo 
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                >
                  <ChevronRight className="ml-2" size={20} />
                </motion.span>
              </a>
            </Button>
          </motion.div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 right-0 -mr-16 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.8, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-32 h-32 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#005DF2]">85%</div>
                <div className="text-sm text-gray-600">Time Saved</div>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 -ml-16 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 0.8, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="w-32 h-32 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#005DF2]">3x</div>
                <div className="text-sm text-gray-600">Faster Process</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
