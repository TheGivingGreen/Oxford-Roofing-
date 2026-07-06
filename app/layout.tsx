import type { Metadata } from "next";
import "./globals.css";
import { IntroOverlay } from "@/components/intro-overlay";
import { Footer, NavBar } from "@/components/ui";

export const metadata: Metadata = {
  title: "Oxford Roofing — Commercial & Residential Roofing, St. Louis",
  description: "Premium commercial and residential roofing for St. Louis homes and businesses."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <IntroOverlay />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
