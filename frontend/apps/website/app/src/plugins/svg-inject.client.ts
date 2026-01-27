export default defineNuxtPlugin(async () => {
  if (import.meta.client) {
    const script = document.createElement("script");

    script.src = "/scripts/svg-inject.min.js";
    script.onload = () => {
      const observer = new MutationObserver(() => {
        const svgs = document.querySelectorAll("img[data-inject-svg]");
        svgs.forEach((svg) => window.SVGInject(svg));
      });
      observer.observe(document.body, { childList: true, subtree: true });
    };
    document.head.appendChild(script);
  }
});
