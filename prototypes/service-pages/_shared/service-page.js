const menuButton = document.querySelector(".menu-button");
const mobileNavigation = document.querySelector(".mobile-nav");

if (menuButton && mobileNavigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Open navigation" : "Close navigation",
    );
    mobileNavigation.hidden = isOpen;
    mobileNavigation.classList.toggle("is-open", !isOpen);
  });
}

document.querySelectorAll(".faq-button").forEach((button) => {
  const toggleFaq = () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    button.setAttribute("aria-expanded", String(!isOpen));
    if (panel) panel.hidden = isOpen;
  };

  button.addEventListener("click", toggleFaq);
  button.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFaq();
    }
  });
});

document.querySelectorAll("[data-comparison]").forEach((comparison) => {
  const range = comparison.querySelector(".comparison-range");
  const before = comparison.querySelector(".comparison-before");
  const divider = comparison.querySelector(".comparison-divider");

  if (!range || !before || !divider) return;

  const updateComparison = () => {
    const position = Number(range.value);
    before.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
    divider.style.left = `${position}%`;
  };

  range.addEventListener("input", updateComparison);
  range.addEventListener("change", updateComparison);
  updateComparison();
});

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const revealItems = document.querySelectorAll(".reveal");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -7% 0px", threshold: 0.08 },
  );

  revealItems.forEach((item) => observer.observe(item));
}
