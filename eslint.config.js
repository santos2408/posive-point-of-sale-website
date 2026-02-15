import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default withNuxt({
  files: ["**/*.{js,ts,vue}"],
  plugins: { prettier: eslintPluginPrettier },
  ignores: ["**/node_modules/**", "**/.nuxt/**", "**/dist/**"],
  rules: {
    "no-console": "warn",
    "no-debugger": "error",
    "prefer-const": "warn",
    "vue/multi-word-component-names": "off",
    "vue/no-unused-vars": "warn",
    "vue/no-mutating-props": "error",
    "vue/html-self-closing": "off",
  },
});
