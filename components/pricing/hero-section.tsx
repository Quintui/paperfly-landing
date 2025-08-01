import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="relative z-10 py-24 sm:py-32 lg:py-40 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
          AI-Powered RFP Solution
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Create professional RFPs in 2 minutes, distribute to vendors
          seamlessly, and get AI-powered recommendations for better decision
          making.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#005DF2] text-white hover:bg-[#0052d4]"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-300 text-gray-900 hover:bg-gray-100 bg-white"
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
