"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Twitter, Linkedin, Github, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#005DF2] to-transparent opacity-30"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#005DF2] rounded-full opacity-5"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#005DF2] rounded-full opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and description */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src="/logo-white.svg"
                className="mb-4"
                alt="Logo"
                width={122}
                height={28}
              />
              <p className="text-gray-400 max-w-xs mt-4">
                Create RFPs and RFIs in minutes — not days. Simplify your
                procurement process with AI-powered solutions.
              </p>

              {/* <div className="flex space-x-4 mt-6">
                <a
                  href="https://twitter.com/paperfly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#005DF2] transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://linkedin.com/company/paperfly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#005DF2] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:contact@paperfly.ai"
                  className="text-gray-400 hover:text-[#005DF2] transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div> */}
            </motion.div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 text-lg">
                Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-[#005DF2] transition-colors"
                  >
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link
                    href="/who-we-serve"
                    className="text-gray-400 hover:text-[#005DF2] transition-colors"
                  >
                    Who We Serve
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#how-it-works"
                    className="text-gray-400 hover:text-[#005DF2] transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Column 3: Features */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 text-lg">
                Features
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-[#005DF2] transition-colors"
                  >
                    Key Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/why-ai"
                    className="text-gray-400 hover:text-[#005DF2] transition-colors"
                  >
                    Why AI Works
                  </Link>
                </li>
                {/* <li>
                  <Link href="#" className="text-gray-400 hover:text-[#005DF2] transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#005DF2] transition-colors">
                    Enterprise
                  </Link>
                </li> */}
              </ul>
            </motion.div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-[#005DF2] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-[#005DF2] transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    href="/cookies"
                    className="text-gray-400 hover:text-[#005DF2] transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gdpr"
                    className="text-gray-400 hover:text-[#005DF2] transition-colors"
                  >
                    GDPR Compliance
                  </Link>
                </li> */}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute right-8 -top-6 bg-[#005DF2] hover:bg-[#004acf] text-white p-3 rounded-full shadow-lg transition-all duration-300"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <ArrowUp size={20} />
        </motion.button>

        {/* Copyright section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-gray-500 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Paperfly. All rights reserved.
          </motion.p>
          {/* <motion.div
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Designed with ❤️ for better procurement
          </motion.div> */}
        </div>
      </div>
    </footer>
  );
};
