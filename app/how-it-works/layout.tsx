import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Paperfly",
  description: "Build clearer RFPs, pick better vendors, and save weeks with Paperfly's intelligent, guided workflow.",
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
