import type React from "react";

export const metadata = {
  title: "About Us | Paperfly - Transforming RFP & RFI Creation",
  description:
    "Learn about Paperfly's mission to revolutionize the procurement process with AI-powered RFP and RFI generation.",
  keywords: [
    "Paperfly",
    "About Us",
    "RFP Generation",
    "RFI Creation",
    "AI Procurement",
    "Procurement Solutions",
    "Business Automation",
    "Enterprise Software"
  ],
  authors: [{ name: "Paperfly Team" }],
  openGraph: {
    title: "About Us | Paperfly - Transforming RFP & RFI Creation",
    description: "Learn about Paperfly's mission to revolutionize the procurement process with AI-powered RFP and RFI generation.",
    type: "website",
    url: "https://paperfly.ai/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Paperfly - Transforming RFP & RFI Creation",
    description: "Learn about Paperfly's mission to revolutionize the procurement process with AI-powered RFP and RFI generation.",
    images: ["/og-image.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
