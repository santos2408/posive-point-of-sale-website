// @ts-check
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginVue from "eslint-plugin-vue";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  plugins: { eslintPluginVue, eslintPluginImport, eslintPluginPrettier },
  rules: {
    // Geral
    "no-console": "warn",
    "no-debugger": "error",
    "prefer-const": "warn",

    // Importações
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        // alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],

    // Vue
    "vue/multi-word-component-names": "off",
    "vue/no-unused-vars": "warn",
    "vue/no-mutating-props": "error",
    "vue/html-self-closing": "off",

    // Prettier (opcional se usa Prettier)
    "eslintPluginPrettier/prettier": [
      "warn",
      {
        singleQuote: false,
        semi: true,
      },
    ],
  },
});
