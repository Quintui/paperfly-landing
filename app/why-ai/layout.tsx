import type React from "react";

export const metadata = {
  title: "Why AI | Paperfly - The Future of RFP & RFI Creation",
  description:
    "Understand how Paperfly leverages AI technology to transform and accelerate the RFP and RFI creation process.",
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
    title: "Why AI | Paperfly - The Future of RFP & RFI Creation",
    description: "Understand how Paperfly leverages AI technology to transform and accelerate the RFP and RFI creation process.",
    type: "website",
    url: "https://paperfly.ai/why-ai",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why AI | Paperfly - The Future of RFP & RFI Creation",
    description: "Understand how Paperfly leverages AI technology to transform and accelerate the RFP and RFI creation process.",
    images: ["/og-image.png"],
  },
};

export default function WhyAiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
