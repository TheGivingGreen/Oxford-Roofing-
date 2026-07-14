"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/paths";

const INTRO_KEY = "oxford-roofing-intro-seen-v2";
const FADE_DURATION_MS = 420;
const FALLBACK_DURATION_MS = 12000;

type IntroWindow = Window & { __oxrIntroSeen?: boolean };

export function IntroOverlay() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const removeTimer = useRef<number | null>(null);

  const dismiss = useCallback(() => {
    setClosing(true);
    if (removeTimer.current) window.clearTimeout(removeTimer.current);
    removeTimer.current = window.setTimeout(() => setVisible(false), FADE_DURATION_MS);
  }, []);

  useEffect(() => {
    const introWindow = window as IntroWindow;
    const forceReplay = window.location.search.includes("intro=1") || window.location.hash.includes("intro");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let alreadySeen = introWindow.__oxrIntroSeen === true;

    try {
      alreadySeen = alreadySeen || window.sessionStorage.getItem(INTRO_KEY) === "true";
    } catch {
      // The in-memory flag still protects client-side navigation if storage is unavailable.
    }

    if (prefersReducedMotion || (!forceReplay && alreadySeen)) return;

    // Record the session before rendering so rapid navigation cannot restart the intro.
    introWindow.__oxrIntroSeen = true;
    try {
      window.sessionStorage.setItem(INTRO_KEY, "true");
    } catch {
      // The in-memory flag above remains available for this document session.
    }

    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const fallbackTimer = window.setTimeout(dismiss, FALLBACK_DURATION_MS);
    return () => window.clearTimeout(fallbackTimer);
  }, [dismiss, visible]);

  useEffect(() => {
    return () => {
      if (removeTimer.current) window.clearTimeout(removeTimer.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="oxr-intro-overlay"
      className="fixed inset-0 z-[100] bg-navy-900 transition-opacity duration-[400ms] ease-[var(--ease-standard)]"
      style={{ animation: "none", opacity: closing ? 0 : 1 }}
      aria-label="Oxford Roofing opening animation"
      role="dialog"
    >
      <video
        id="oxr-intro-video"
        src={assetPath("/videos/oxford-opening.mp4")}
        className="h-full w-full object-contain md:object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={dismiss}
        onError={dismiss}
      />
      <div className="pointer-events-none absolute inset-0 bg-navy-900/10" />
      <button
        id="oxr-intro-skip"
        type="button"
        onClick={dismiss}
        className="absolute right-4 top-4 rounded-pill border border-white/35 bg-navy-900/55 px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur transition-colors duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:bg-navy-900/75 md:right-5 md:top-5"
      >
        Skip
      </button>
    </div>
  );
}
