import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-unused-vars": "warn",
    "vue/no-mutating-props": "error",
    "vue/html-self-closing": "off",
  },
});
