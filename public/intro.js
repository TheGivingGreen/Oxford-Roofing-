(() => {
  const key = "oxford-roofing-intro-seen";
  const overlay = document.getElementById("oxr-intro-overlay");
  if (!overlay) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let storage = null;

  try {
    storage = window.sessionStorage;
  } catch {
    storage = null;
  }

  let persistentStorage = null;

  try {
    persistentStorage = window.localStorage;
  } catch {
    persistentStorage = null;
  }

  const forceReplay = window.location.search.includes("intro=1") || window.location.hash.includes("intro");
  const alreadySeen = !forceReplay && (storage?.getItem(key) === "true" || persistentStorage?.getItem(key) === "true");

  const dismiss = () => {
    storage?.setItem(key, "true");
    persistentStorage?.setItem(key, "true");
    overlay.style.opacity = "0";
    window.setTimeout(() => overlay.remove(), 420);
  };

  window.oxrDismissIntro = dismiss;

  if (prefersReducedMotion || alreadySeen) {
    overlay.remove();
    return;
  }

  if (forceReplay) {
    storage?.removeItem(key);
    persistentStorage?.removeItem(key);
  } else {
    storage?.setItem(key, "true");
    persistentStorage?.setItem(key, "true");
  }

  const video = document.getElementById("oxr-intro-video");
  const skip = document.getElementById("oxr-intro-skip");

  video?.addEventListener("ended", dismiss, { once: true });
  video?.addEventListener("error", dismiss, { once: true });
  skip?.addEventListener(
    "click",
    (event) => {
      event.preventDefault();
      dismiss();
    },
    { once: true }
  );
  video?.play?.().catch?.(() => {});
  window.setTimeout(dismiss, 12000);
})();
