"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DEMO_BOOKING_URL } from "@/lib/constants";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);

    // Use setTimeout to ensure the menu is closed before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 10); // Small delay to ensure DOM updates
  };

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-[#005DF2] hover:bg-transparent"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-white mt-2 shadow-lg rounded-b-lg overflow-hidden z-50"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    About
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => scrollToSection("who-we-are")}
                      className="block w-full text-left py-2 text-gray-700 hover:text-[#005DF2] transition-colors"
                    >
                      Who We Are
                    </button>
                    <button
                      onClick={() => scrollToSection("what-we-do")}
                      className="block w-full text-left py-2 text-gray-700 hover:text-[#005DF2] transition-colors"
                    >
                      What We Do
                    </button>
                    <button
                      onClick={() => scrollToSection("who-we-serve")}
                      className="block w-full text-left py-2 text-gray-700 hover:text-[#005DF2] transition-colors"
                    >
                      Who We Serve
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Features
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => scrollToSection("key-features")}
                      className="block w-full text-left py-2 text-gray-700 hover:text-[#005DF2] transition-colors"
                    >
                      Key Features
                    </button>
                    <button
                      onClick={() => scrollToSection("why-ai-works")}
                      className="block w-full text-left py-2 text-gray-700 hover:text-[#005DF2] transition-colors"
                    >
                      Why AI Works
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="block w-full text-left py-2 text-gray-700 hover:text-[#005DF2] transition-colors"
                  >
                    How It Works
                  </button>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <Button
                    className="w-full bg-[#005DF2] hover:bg-[#004acf] text-white"
                    asChild
                  >
                    <a
                      href={DEMO_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
