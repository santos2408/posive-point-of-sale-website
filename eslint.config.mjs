// @ts-check
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";
import websiteConfig from "./frontend/apps/website/eslint.config.mjs";

export default [
  // ================================
  //          GLOBAL IGNORES
  // ================================
  {
    ignores: ["**/node_modules/**", "**/.nuxt/**", "**/dist/**", "frontend/apps/website/public/scripts/*"],
  },

  // ================================
  //          GLOBAL RULES
  // ================================
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },

    rules: {
      // General
      "no-console": "warn",
      "no-debugger": "error",
      "prefer-const": "warn",

      // Prettier (optional if using Prettier)
      "prettier/prettier": [
        "warn",
        {
          singleQuote: false,
          semi: true,
        },
      ],
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
    files: ["frontend/apps/website/**/*"],
  })),
];
