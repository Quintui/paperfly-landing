import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Simplifying Healthcare RFPs: Overcoming Complexity and Ensuring Compliance | Paperfly",
  description:
    "The healthcare sector faces some of the most complex procurement requirements of any industry. Learn how to overcome these challenges with modern RFP solutions.",
  keywords: [
    "healthcare RFP",
    "HIPAA compliance",
    "healthcare procurement",
    "RFP creation",
    "healthcare compliance",
    "clinical procurement",
    "RFP automation",
    "healthcare technology",
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
      "/blogs/simplifying-healthcare-rfps-overcoming-complexity-and-ensuring-compliance",
  },
  openGraph: {
    title:
      "Simplifying Healthcare RFPs: Overcoming Complexity and Ensuring Compliance",
    description:
      "The healthcare sector faces some of the most complex procurement requirements of any industry. Learn how to overcome these challenges with modern RFP solutions.",
    url: "https://paperfly.com/blogs/simplifying-healthcare-rfps-overcoming-complexity-and-ensuring-compliance",
    siteName: "Paperfly",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Healthcare RFP Challenges and Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-01-25T00:00:00.000Z",
    modifiedTime: "2025-01-25T00:00:00.000Z",
    authors: ["Paperfly Team"],
    tags: [
      "Healthcare RFP",
      "HIPAA",
      "Procurement",
      "AI",
      "Automation",
      "Compliance",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Simplifying Healthcare RFPs: Overcoming Complexity and Ensuring Compliance",
    description:
      "The healthcare sector faces some of the most complex procurement requirements of any industry. Learn how to overcome these challenges with modern RFP solutions.",
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
    "article:published_time": "2025-01-25T00:00:00.000Z",
    "article:modified_time": "2025-01-25T00:00:00.000Z",
    "article:author": "Paperfly Team",
    "article:section": "Healthcare Procurement",
    "article:tag": [
      "Healthcare RFP",
      "HIPAA",
      "Procurement",
      "AI",
      "Automation",
      "Compliance",
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
