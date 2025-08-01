"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Clock } from "lucide-react";
import { DEMO_BOOKING_URL, DASHBOARD_URL } from "@/lib/constants";
import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#005DF2] rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:w-1/2 p-8 md:p-12 flex items-center"
            >
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                >
                  Get Started Today
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-xl text-white/90 mb-8"
                >
                  Ready to simplify your RFP/RFI workflow and save hours? Create
                  RFPs and RFIs in minutes — not days.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block"
                  >
                    <Button
                      className="bg-white text-[#005DF2] hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
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
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatDelay: 2,
                          }}
                        >
                          <ChevronRight className="ml-2" size={20} />
                        </motion.span>
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block"
                  >
                    <Button
                      className="bg-transparent text-white hover:bg-white hover:text-[#005DF2] text-lg px-8 py-6 rounded-lg transition-all duration-300 border border-white"
                      variant="outline"
                      asChild
                    >
                      <a href={DASHBOARD_URL} className="flex items-center">
                        Get Started
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 bg-[#004acf] p-8 md:p-12 flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm w-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 mb-6"
                >
                  <Clock className="text-white" size={24} />
                  <div>
                    <h3 className="text-white font-bold">Save 85% of Time</h3>
                    <p className="text-white/80">
                      Compared to manual RFP creation
                    </p>
                  </div>
                </motion.div>
                <div className="bg-white/5 h-2 rounded-full mb-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "15%" }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white h-2 rounded-full"
                  ></motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex justify-between text-white/80 text-sm"
                >
                  <span>Paperfly: 30 min</span>
                  <span>Manual: 3+ hours</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
