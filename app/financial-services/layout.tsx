import type { ReactNode } from "react";

export const metadata = {
  title:
    "Paperfly for Financial Services - Risk-Smart, Compliant RFPs for FinServ",
  description:
    "Source fintech, data, and service partners while meeting SOX, PCI-DSS, OCC, and AML requirements. Built-in risk scoring and audit support.",
  keywords: [
    "Financial services RFP",
    "FinServ procurement",
    "SOX",
    "PCI-DSS",
    "OCC",
    "AML",
    "risk scoring",
    "audit packet",
    "TPRM",
    "Paperfly",
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
