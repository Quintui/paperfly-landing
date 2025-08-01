import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "How to Overcome the Biggest Challenges in Government RFP Creation | Paperfly",
  description:
    "Government procurement is critical for delivering public services effectively, yet the RFP creation process often becomes a major obstacle. Learn how to overcome these challenges.",
  keywords: [
    "government RFP",
    "government procurement",
    "RFP creation",
    "procurement challenges",
    "government contracts",
    "RFP automation",
    "procurement efficiency",
    "government compliance",
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
      "/blogs/how-to-overcome-the-biggest-challenges-in-government-rfp-creation",
  },
  openGraph: {
    title: "How to Overcome the Biggest Challenges in Government RFP Creation",
    description:
      "Government procurement is critical for delivering public services effectively, yet the RFP creation process often becomes a major obstacle. Learn how to overcome these challenges.",
    url: "https://paperfly.com/blogs/how-to-overcome-the-biggest-challenges-in-government-rfp-creation",
    siteName: "Paperfly",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Government RFP Challenges and Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-01-20T00:00:00.000Z",
    modifiedTime: "2025-01-20T00:00:00.000Z",
    authors: ["Paperfly Team"],
    tags: ["Government RFP", "Procurement", "AI", "Automation", "Compliance"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Overcome the Biggest Challenges in Government RFP Creation",
    description:
      "Government procurement is critical for delivering public services effectively, yet the RFP creation process often becomes a major obstacle. Learn how to overcome these challenges.",
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
    "article:published_time": "2025-08-01T00:00:00.000Z",
    "article:modified_time": "2025-08-01T00:00:00.000Z",
    "article:author": "Paperfly Team",
    "article:section": "Government Procurement",
    "article:tag": [
      "Government RFP",
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
