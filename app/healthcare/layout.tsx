import type { ReactNode } from "react";

export const metadata = {
  title:
    "Paperfly for Healthcare - Compliant RFPs for Clinical & Med-Tech Procurement",
  description:
    "Create HIPAA-ready RFPs for clinical, med-tech, EHR, and facility vendors. Built for compliance, audit trails, and multi-department input.",
  keywords: [
    "Healthcare RFP",
    "HIPAA",
    "PHIPA",
    "clinical procurement",
    "med-tech sourcing",
    "EHR RFP",
    "compliance",
    "audit trail",
    "vendor selection",
    "Paperfly",
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
