import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "How to Write Effective Research Forms for AI-Powered RFPs | Paperfly",
  description:
    "Master the art of filling out research forms to help AI generate better RFPs. Learn how to provide context, define requirements, and communicate your project needs effectively.",
  keywords: [
    "research forms",
    "RFP creation",
    "AI-powered RFPs",
    "project requirements",
    "procurement best practices",
    "vendor selection",
    "RFP writing guide",
    "AI RFP tools",
    "project planning",
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
      "/blogs/how-to-write-effective-research-forms-for-ai-powered-rfps",
  },
  openGraph: {
    title:
      "How to Write Effective Research Forms for AI-Powered RFPs",
    description:
      "Master the art of filling out research forms to help AI generate better RFPs. Learn how to provide context, define requirements, and communicate your project needs effectively.",
    url: "https://paperfly.com/blogs/how-to-write-effective-research-forms-for-ai-powered-rfps",
    siteName: "Paperfly",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Effective Research Forms for AI-Powered RFPs",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-01-30T00:00:00.000Z",
    modifiedTime: "2025-01-30T00:00:00.000Z",
    authors: ["Paperfly Team"],
    tags: [
      "Research Forms",
      "RFP Creation",
      "AI",
      "Procurement",
      "Best Practices",
      "Project Planning",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Write Effective Research Forms for AI-Powered RFPs",
    description:
      "Master the art of filling out research forms to help AI generate better RFPs. Learn how to provide context, define requirements, and communicate your project needs effectively.",
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
    "article:published_time": "2025-01-30T00:00:00.000Z",
    "article:modified_time": "2025-01-30T00:00:00.000Z",
    "article:author": "Paperfly Team",
    "article:section": "RFP Best Practices",
    "article:tag": [
      "Research Forms",
      "RFP Creation",
      "AI",
      "Procurement",
      "Best Practices",
      "Project Planning",
    ],
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={inter.className}>{children}</div>;
}
