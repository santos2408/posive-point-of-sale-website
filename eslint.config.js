import { defineConfig } from "eslint/config";
import eslintPluginPrettier from "eslint-plugin-prettier";
import websiteConfig from "./frontend/website/eslint.config.js";

export default defineConfig([
  // ================================
  //         WEBSITE (NUXT.JS)
  // ================================
  ...(await websiteConfig.toConfigs()).map((config) => ({
    ...config,
    files: ["./frontend/website/**/*.{js,ts,vue}"],
    ignores: ["**/public/scripts/*"],
  })),

  // ================================
  //         GLOBAL SETTINGS
  // ================================
  {
    plugins: { prettier: eslintPluginPrettier },
    basePath: "./frontend",
    ignores: ["**/node_modules/**", "**/.nuxt/**", "**/dist/**"],
    files: ["./frontend/**/**/*.{js,ts,vue}"],
    rules: {
      "no-console": "warn",
      "no-debugger": "error",
      "prefer-const": "warn",
    },
  },
]);
