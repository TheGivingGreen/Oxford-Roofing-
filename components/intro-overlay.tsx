import { assetPath } from "@/lib/paths";

export function IntroOverlay() {
  const videoSrc = assetPath("/videos/oxford-opening.mp4");
  const scriptSrc = assetPath("/intro.js");
  const dismiss =
    "var o=document.getElementById('oxr-intro-overlay');if(o){o.style.opacity='0';window.setTimeout(function(){o.remove()},420)}";

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: `<div id="oxr-intro-overlay" class="fixed inset-0 z-[100] bg-navy-900 opacity-100 transition-opacity duration-[400ms] ease-[var(--ease-standard)]" aria-label="Oxford Roofing opening animation" role="dialog"><video id="oxr-intro-video" src="${videoSrc}" class="h-full w-full object-cover" autoplay muted playsinline preload="auto" onended="${dismiss}" onerror="${dismiss}"></video><div class="pointer-events-none absolute inset-0 bg-navy-900/10"></div><button id="oxr-intro-skip" type="button" onclick="${dismiss}" class="absolute right-5 top-5 rounded-pill border border-white/35 bg-navy-900/55 px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur transition-colors duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:bg-navy-900/75">Skip</button></div>`
        }}
      />
      <script src={scriptSrc} defer />
    </>
  );
}
