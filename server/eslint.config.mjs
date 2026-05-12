import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      // Make these warnings instead of errors (less strict)
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-empty": "warn",
      "no-console": "off"
    }
  },
  {
    ignores: [
      "node_modules/**",
      "tests/**",
      "coverage/**",
      "*.config.js",
      "*.config.mjs"
    ]
  }
];
