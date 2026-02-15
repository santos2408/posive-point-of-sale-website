import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  // ignores: ["**/public/scripts/*"],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-unused-vars": "warn",
    "vue/no-mutating-props": "error",
    "vue/html-self-closing": "off",
    "no-console": "warn",
  },
});
