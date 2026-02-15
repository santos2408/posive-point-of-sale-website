import { defineConfig } from "eslint/config";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";
import websiteConfig from "./frontend/website/eslint.config.mjs";

export default defineConfig([
  // ================================
  //          GLOBAL SETTINGS
  // ================================
  {
    plugins: { prettier: eslintPluginPrettier },
    ignores: ["**/node_modules/**", "**/.nuxt/**", "**/dist/**", "frontend/website/public/scripts/*"],
    rules: {
      "no-console": "warn",
      "no-debugger": "error",
      "prefer-const": "warn",
      "prettier/prettier": ["warn", { singleQuote: false, semi: true }], // Prettier (optional if using Prettier)
    },
  },

  // ==================================================
  //        IMPORT RULES (FORA DO NUXT)
  // ==================================================
  {
    files: [""], // TODO: adicione aqui os diretórios que usarão essas regras (nuxt já usa internamente)
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      "import/order": ["warn", { groups: ["builtin", "external", "internal", "parent", "sibling", "index"] }],
      "import/no-cycle": "error",
      "import/no-unresolved": "error",
    },
  },

  // ================================
  //         WEBSITE (NUXT.JS)
  // ================================
  ...(await websiteConfig.toConfigs()).map((config) => ({
    ...config,
    files: ["frontend/website/**/*"],
  })),
]);
