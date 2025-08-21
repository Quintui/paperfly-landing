import "@/styles/globals.css";

export const metadata = {
  title: "Paperfly | Hospitality & Food Services",
  description: "Smarter RFPs for Hospitality & Food Services — Serving Up Better Vendor Decisions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
