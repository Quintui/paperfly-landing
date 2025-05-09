import type React from "react";

export const metadata = {
  title: "Privacy Policy | Paperfly",
  description:
    "Learn how Paperfly protects your data and privacy while using our AI-powered RFP and RFI generation platform.",
  keywords: [
    "Privacy Policy",
    "Data Protection",
    "GDPR Compliance",
    "Data Security",
    "User Privacy",
    "Information Security",
    "Privacy Terms",
    "Data Processing"
  ],
  authors: [{ name: "Paperfly Team" }],
  openGraph: {
    title: "Privacy Policy | Paperfly",
    description: "Learn how Paperfly protects your data and privacy while using our AI-powered RFP and RFI generation platform.",
    type: "website",
    url: "https://paperfly.ai/privacy",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Paperfly",
    description: "Learn how Paperfly protects your data and privacy while using our AI-powered RFP and RFI generation platform.",
    images: ["/og-image.png"],
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
