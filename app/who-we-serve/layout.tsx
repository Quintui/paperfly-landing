import type React from "react";

export const metadata = {
  title: "Who We Serve | Paperfly - AI-Powered RFP & RFI Solutions",
  description:
    "Discover how Paperfly's AI-powered platform helps procurement teams, businesses, and organizations streamline their RFP and RFI processes.",
  keywords: [
    "Procurement Teams",
    "Enterprise Solutions",
    "Business Procurement",
    "RFP Management",
    "RFI Automation",
    "Procurement Software",
    "AI Solutions",
    "Digital Transformation"
  ],
  authors: [{ name: "Paperfly Team" }],
  openGraph: {
    title: "Who We Serve | Paperfly - AI-Powered RFP & RFI Solutions",
    description: "Discover how Paperfly's AI-powered platform helps procurement teams, businesses, and organizations streamline their RFP and RFI processes.",
    type: "website",
    url: "https://paperfly.ai/who-we-serve",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Serve | Paperfly - AI-Powered RFP & RFI Solutions",
    description: "Discover how Paperfly's AI-powered platform helps procurement teams, businesses, and organizations streamline their RFP and RFI processes.",
    images: ["/og-image.png"],
  },
};

export default function WhoWeServeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
