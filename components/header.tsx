"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

export const Header = () => {
  const [headerBgOpacity, setHeaderBgOpacity] = useState(0.5);
  const { scrollY } = useScroll();
  
  // Transform opacity based on scroll position
  const dynamicOpacity = useTransform(scrollY, [0, 200], [0.5, 1]);

  useEffect(() => {
    const unsubscribe = dynamicOpacity.onChange((opacity) => {
      setHeaderBgOpacity(opacity);
    });
    
    return () => unsubscribe();
  }, [dynamicOpacity]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4">
      {/* Background with dynamic opacity */}
      <motion.div
        className="absolute inset-0 bg-white/90 backdrop-blur-sm shadow-sm"
        style={{ opacity: headerBgOpacity }}
      />

      <div className="container mx-auto px-4 relative">
        <nav className="flex items-center justify-between">
          <div>
            <Link href="#">
              <Image src="/logo.svg" alt="Logo" width={122} height={28} />
            </Link>
          </div>

          {/* Desktop Navigation using ShadCN Navigation Menu */}
          <MainNav />
          
          {/* Mobile Navigation */}
          <MobileNav />
        </nav>
      </div>
    </header>
  );
};
