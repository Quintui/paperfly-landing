import type { ReactNode } from "react";

export const metadata = {
  title:
    "Paperfly for Education - Streamlined RFPs for Higher Ed & K-12 Procurement",
  description:
    "Accelerate campus-wide procurement for LMS, Wi-Fi, research, and facilities. FERPA-ready, grant tagging, and committee-friendly RFPs.",
  keywords: [
    "Education RFP",
    "higher ed procurement",
    "K-12 sourcing",
    "FERPA",
    "grant tracking",
    "committee review",
    "campus RFP",
    "Paperfly",
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
