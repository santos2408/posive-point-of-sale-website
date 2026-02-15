import { defineConfig } from "eslint/config";
import eslintPluginPrettier from "eslint-plugin-prettier";
import websiteConfig from "./frontend/website/eslint.config.js";

export default withNuxt([
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
      "vue/multi-word-component-names": "off",
    "vue/no-unused-vars": "warn",
    "vue/no-mutating-props": "error",
    "vue/html-self-closing": "off",
    "no-console": "warn",
    },
  },
]);
