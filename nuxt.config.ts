import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["@/assets/css/index.css"],
  modules: ["@nuxt/eslint", "@nuxt/image", "@vueuse/nuxt", "nuxt-lucide-icons", "@nuxt/fonts"],
  ssr: true,
  image: { provider: "ipx" },
  nitro: {
    preset: "static",
    prerender: { routes: ["/"] },
  },
  alias: {
    "@": fileURLToPath(new URL("./app/src", import.meta.url)),
    "~": fileURLToPath(new URL("./app/src", import.meta.url)),
  },
  dir: {
    pages: "src/presentation/pages",
    layouts: "src/presentation/layouts",
    middleware: "src/presentation/middleware",
    assets: "src/assets",
    plugins: "src/plugins",
  },
});
