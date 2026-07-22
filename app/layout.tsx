import type { Metadata } from "next";
import "./globals.css";
import { IntroOverlay } from "@/components/intro-overlay";
import { Footer, NavBar } from "@/components/ui";

const introBootstrap = `(() => {
  const key = "oxford-roofing-intro-seen-v2";
  const root = document.documentElement;
  const forceReplay = window.location.search.includes("intro=1") || window.location.hash.includes("intro");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let alreadySeen = window.__oxrIntroSeen === true;

  try {
    alreadySeen = alreadySeen || window.sessionStorage.getItem(key) === "true";
  } catch {}

  if (prefersReducedMotion || (!forceReplay && alreadySeen)) {
    root.classList.add("oxr-intro-seen");
    window.__oxrIntroState = "seen";
    return;
  }

  root.classList.add("oxr-intro-active");
  window.__oxrIntroSeen = true;
  window.__oxrIntroState = "play";
  try {
    window.sessionStorage.setItem(key, "true");
  } catch {}
})();`;

export const metadata: Metadata = {
  title: "Oxford Roofing — Commercial & Residential Roofing, St. Louis",
  description: "Premium commercial and residential roofing for St. Louis homes and businesses."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`.oxr-intro-seen #oxr-intro-overlay{display:none!important}.oxr-intro-active body{overflow:hidden;background:#03234d}.oxr-intro-active body>:not(#oxr-intro-overlay){visibility:hidden}`}</style>
        <script dangerouslySetInnerHTML={{ __html: introBootstrap }} />
      </head>
      <body>
        <IntroOverlay />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
