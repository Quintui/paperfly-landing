"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { DEMO_BOOKING_URL } from "@/lib/constants";
import { MobileMenu } from "@/components/mobile-menu";
import { motion, useScroll, useTransform } from "framer-motion";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transform opacity based on scroll position
  const headerBgOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4"
    >
      {/* Background with dynamic opacity */}
      <motion.div
        className="absolute inset-0 bg-white/90 backdrop-blur-sm shadow-sm"
        style={{ opacity: headerBgOpacity }}
      />

      <div className="container mx-auto px-4 relative">
        <nav className="flex items-center justify-between">
          <div>
            <Image src="/logo.svg" alt="Logo" width={122} height={28} />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div>
              <Link
                href="#features"
                className="text-gray-700 hover:text-[#005DF2] transition-colors"
              >
                Features
              </Link>
            </div>

            <div>
              <Link
                href="#how-it-works"
                className="text-gray-700 hover:text-[#005DF2] transition-colors"
              >
                How It Works
              </Link>
            </div>

            <div>
              <Button
                className="bg-[#005DF2] hover:bg-[#004acf] text-white"
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

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
};
