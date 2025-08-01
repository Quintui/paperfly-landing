import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Accelerating Tech Procurement: Fixing Common Mistakes in RFP Creation | Paperfly",
  description:
    "In the fast-paced world of technology and SaaS companies, procurement often feels rushed. Learn how to balance speed and quality in tech procurement.",
  keywords: [
    "tech procurement",
    "SaaS procurement",
    "RFP creation",
    "technology procurement",
    "procurement automation",
    "vendor selection",
    "tech RFP",
    "procurement efficiency",
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
      "/blogs/accelerating-tech-procurement-fixing-common-mistakes-in-rfp-creation",
  },
  openGraph: {
    title:
      "Accelerating Tech Procurement: Fixing Common Mistakes in RFP Creation",
    description:
      "In the fast-paced world of technology and SaaS companies, procurement often feels rushed. Learn how to balance speed and quality in tech procurement.",
    url: "https://paperfly.com/blogs/accelerating-tech-procurement-fixing-common-mistakes-in-rfp-creation",
    siteName: "Paperfly",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Tech Procurement Challenges and Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-01-30T00:00:00.000Z",
    modifiedTime: "2025-01-30T00:00:00.000Z",
    authors: ["Paperfly Team"],
    tags: [
      "Tech Procurement",
      "SaaS",
      "Procurement",
      "AI",
      "Automation",
      "Security",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Accelerating Tech Procurement: Fixing Common Mistakes in RFP Creation",
    description:
      "In the fast-paced world of technology and SaaS companies, procurement often feels rushed. Learn how to balance speed and quality in tech procurement.",
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
    "article:published_time": "2025-06-01T00:00:00.000Z",
    "article:modified_time": "2025-06-01T00:00:00.000Z",
    "article:author": "Paperfly Team",
    "article:section": "Tech Procurement",
    "article:tag": [
      "Tech Procurement",
      "SaaS",
      "Procurement",
      "AI",
      "Automation",
      "Security",
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
