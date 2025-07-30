import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Why RFP Creation Is Still Broken in 2025 (And How to Fix It) | Paperfly",
  description:
    "Despite all the technological progress in procurement, RFP creation remains one of the most painful, manual, and inefficient parts of the vendor selection process. Learn how to fix it.",
  keywords: [
    "RFP creation",
    "procurement problems",
    "vendor selection",
    "RFP automation",
    "procurement efficiency",
    "RFP best practices",
    "procurement technology",
  ],
  authors: [{ name: "Paperfly Team" }],
  creator: "Paperfly",
  publisher: "Paperfly",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://paperfly.com"),
  alternates: {
    canonical:
      "/blogs/why-rfp-creation-is-still-broken-in-2025-and-how-to-fix-it",
  },
  openGraph: {
    title: "Why RFP Creation Is Still Broken in 2025 (And How to Fix It)",
    description:
      "Despite all the technological progress in procurement, RFP creation remains one of the most painful, manual, and inefficient parts of the vendor selection process.",
    url: "https://paperfly.com/blogs/why-rfp-creation-is-still-broken-in-2025-and-how-to-fix-it",
    siteName: "Paperfly",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "RFP Creation Problems and Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-01-15T00:00:00.000Z",
    modifiedTime: "2025-01-15T00:00:00.000Z",
    authors: ["Paperfly Team"],
    tags: ["RFP", "Procurement", "AI", "Automation"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why RFP Creation Is Still Broken in 2025 (And How to Fix It)",
    description:
      "Despite all the technological progress in procurement, RFP creation remains one of the most painful, manual, and inefficient parts of the vendor selection process.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "article:published_time": "2025-01-15T00:00:00.000Z",
    "article:modified_time": "2025-01-15T00:00:00.000Z",
    "article:author": "Paperfly Team",
    "article:section": "Procurement",
    "article:tag": ["RFP", "Procurement", "AI", "Automation"],
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={inter.className}>{children}</div>;
}
