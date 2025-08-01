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
import { DEMO_BOOKING_URL, DASHBOARD_URL } from "@/lib/constants";
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
        {/* How It Works */}
        <NavigationMenuItem>
          <Link href="/#how-it-works" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "text-gray-700 hover:text-[#005DF2] bg-transparent hover:bg-transparent focus:bg-transparent px-3"
              )}
            >
              How It Works
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "text-gray-700 hover:text-[#005DF2] bg-transparent hover:bg-transparent focus:bg-transparent px-3"
              )}
            >
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* About Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-[#005DF2] bg-transparent hover:bg-transparent focus:bg-transparent px-3">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4 p-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Who We Are</div>
                    <div className="text-gray-600 text-sm">
                      Learn about our mission and team
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/who-we-serve"
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">
                      Who We Serve
                    </div>
                    <div className="text-gray-600 text-sm">
                      Industries and organizations we help
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/why-ai"
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Why AI</div>
                    <div className="text-gray-600 text-sm">
                      How AI transforms procurement
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/blog"
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Blog</div>
                    <div className="text-gray-600 text-sm">
                      Latest insights and updates
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Demo Button */}
        <NavigationMenuItem className="pl-2">
          <NavigationMenuLink asChild>
            <Link
              href={DEMO_BOOKING_URL}
              className={buttonVariants({ size: "sm", variant: "default" })}
            >
              Book a Demo
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Get Started Button */}
        <NavigationMenuItem className="pl-2">
          <NavigationMenuLink asChild>
            <Link
              href={DASHBOARD_URL}
              className={buttonVariants({ size: "sm", variant: "outline" })}
            >
              Get Started
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
