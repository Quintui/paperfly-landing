import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog | Paperfly - Procurement & RFP Management Insights",
  description:
    "Discover insights, best practices, and the latest trends in procurement, RFP management, and vendor relations. Expert analysis from the Paperfly team.",
  keywords: [
    "procurement blog",
    "RFP management",
    "vendor relations",
    "procurement insights",
    "best practices",
    "AI procurement",
    "government procurement",
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
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blog | Paperfly - Procurement & RFP Management Insights",
    description:
      "Discover insights, best practices, and the latest trends in procurement, RFP management, and vendor relations.",
    url: "https://paperfly.com/blogs",
    siteName: "Paperfly",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Paperfly Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Paperfly - Procurement & RFP Management Insights",
    description:
      "Discover insights, best practices, and the latest trends in procurement, RFP management, and vendor relations.",
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
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={inter.className}>{children}</div>;
}
