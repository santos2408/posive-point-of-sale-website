import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: { plugins: tailwindcss() },

  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxtjs/tailwindcss", "@vueuse/nuxt", "nuxt-lucide-icons", "@nuxtjs/google-fonts"],

  ssr: true,
  nitro: {
    preset: "static",
    prerender: {
      routes: ["/"],
    },
  },

  image: {
    provider: "ipx",
  },

  alias: {
    "@": resolve(__dirname, "app/src"),
    "~": resolve(__dirname, "app/src"),
  },

  dir: {
    pages: "src/presentation/pages",
    layouts: "src/presentation/layouts",
    middleware: "src/presentation/middleware",
    assets: "src/assets",
    plugins: "src/plugins",
  },

  css: ["@/assets/css/index.css"],
  googleFonts: {
    families: {
      Manrope: { wght: [400, 500, 700] },
    },
  },
});
