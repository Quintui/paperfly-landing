"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { DEMO_BOOKING_URL } from "@/lib/constants";
import { buttonVariants } from "./ui/button";

export function MainNav() {
  const scrollToSection = (id: string) => {
    // Use setTimeout to ensure any menus are closed before scrolling
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
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {/* About Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-[#005DF2] bg-transparent hover:bg-transparent focus:bg-transparent">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-2 p-4">
              <ListItem
                title="Who We Are"
                onClick={() => scrollToSection("who-we-are")}
              />
              <ListItem
                title="What We Do"
                onClick={() => scrollToSection("what-we-do")}
              />
              <ListItem
                title="Who We Serve"
                onClick={() => scrollToSection("who-we-serve")}
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Features Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700  hover:text-[#005DF2] bg-transparent hover:bg-transparent focus:bg-transparent">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-2 p-4">
              <ListItem
                title="Key Features"
                onClick={() => scrollToSection("key-features")}
              />
              <ListItem
                title="Why AI Works"
                onClick={() => scrollToSection("why-ai-works")}
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Direct Links */}
        <NavigationMenuItem className="pr-2">
          <Link href="#how-it-works" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "text-gray-700 hover:text-[#005DF2] bg-transparent hover:bg-transparent focus:bg-transparent"
              )}
            >
              How It Works
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Demo Button */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href={DEMO_BOOKING_URL}
              className={buttonVariants({ size: "sm" })}
            >
              Book a Demo
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    onClick?: () => void;
  }
>(({ className, title, onClick, ...props }, ref) => {
  return (
    <li>
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#005DF2]/10 hover:text-[#005DF2] focus:bg-[#005DF2]/10 focus:text-[#005DF2] w-full text-left",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
      </button>
    </li>
  );
});
ListItem.displayName = "ListItem";
