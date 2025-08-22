import type React from "react";

export const metadata = {
  title: "AI RFP Creation Tool | Paperfly",
  description:
    "Instantly generate professional, ready-to-use RFPs and RFIs with Paperfly's AI-powered creation tool.",
  keywords: [
    "AI Technology",
    "Machine Learning",
    "Procurement AI",
    "AI Automation",
    "RFP Innovation",
    "AI Benefits",
    "Process Automation",
    "AI-Powered Solutions"
  ],
  authors: [{ name: "Paperfly Team" }],
  openGraph: {
    title: "AI RFP Creation Tool | Paperfly",
    description: "Instantly generate professional, ready-to-use RFPs and RFIs with Paperfly's AI-powered creation tool.",
    type: "website",
    url: "https://paperfly.ai/ai-rfp-creation-tool",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI RFP Creation Tool | Paperfly",
    description: "Instantly generate professional, ready-to-use RFPs and RFIs with Paperfly's AI-powered creation tool.",
    images: ["/og-image.png"],
  },
};

export default function AiRfpCreationToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
