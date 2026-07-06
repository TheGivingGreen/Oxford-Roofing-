import { assetPath } from "@/lib/paths";

export function IntroOverlay() {
  const videoSrc = assetPath("/videos/oxford-opening.mp4");
  const scriptSrc = assetPath("/intro.js");
  const key = "oxford-roofing-intro-seen";
  const bootstrap =
    "(function(){var k='oxford-roofing-intro-seen';var force=location.search.indexOf('intro=1')>-1||location.hash.indexOf('intro')>-1;var seen=false;try{seen=sessionStorage.getItem(k)==='true'}catch(e){}if(force){try{sessionStorage.removeItem(k)}catch(e){}}else if(seen){document.documentElement.classList.add('oxr-intro-seen')}else{try{sessionStorage.setItem(k,'true')}catch(e){}}})();";
  const dismiss =
    `try{sessionStorage.setItem('${key}','true')}catch(e){}var o=document.getElementById('oxr-intro-overlay');if(o){o.style.opacity='0';window.setTimeout(function(){o.remove()},420)}`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: bootstrap }} />
      <style dangerouslySetInnerHTML={{ __html: ".oxr-intro-seen #oxr-intro-overlay{display:none!important}" }} />
      <div
        dangerouslySetInnerHTML={{
          __html: `<div id="oxr-intro-overlay" class="fixed inset-0 z-[100] bg-navy-900 opacity-100 transition-opacity duration-[400ms] ease-[var(--ease-standard)]" aria-label="Oxford Roofing opening animation" role="dialog"><video id="oxr-intro-video" src="${videoSrc}" class="h-full w-full object-contain md:object-cover" autoplay muted playsinline preload="auto" onended="${dismiss}" onerror="${dismiss}"></video><div class="pointer-events-none absolute inset-0 bg-navy-900/10"></div><button id="oxr-intro-skip" type="button" onclick="${dismiss}" class="absolute right-4 top-4 rounded-pill border border-white/35 bg-navy-900/55 px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur transition-colors duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:bg-navy-900/75 md:right-5 md:top-5">Skip</button></div>`
        }}
      />
      <script src={scriptSrc} defer />
    </>
  );
}
