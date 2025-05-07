"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { DEMO_BOOKING_URL } from "@/lib/constants";
import Image from "next/image";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-7 w-7" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader className="mb-6">
          <SheetTitle>
            <Image src="/logo.svg" alt="Logo" width={122} height={28} />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-6">
          <Link
            href="#features"
            className="text-lg font-medium text-gray-700 hover:text-[#005DF2] transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-lg font-medium text-gray-700 hover:text-[#005DF2] transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/privacy"
            className="text-lg font-medium text-gray-700 hover:text-[#005DF2] transition-colors"
          >
            Privacy Policy
          </Link>
          <Button
            className="bg-[#005DF2] hover:bg-[#004acf] text-white w-full mt-4"
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
        </nav>
      </SheetContent>
    </Sheet>
  );
}
