"use strict";

module.exports = {
  /**
   * Handle formatting with Prettier
   * @see https://github.com/prettier/eslint-config-prettier
   */
  extends: [
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/react"
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        // Most languages use double quotes for strings, enforce that here for consistency
        singleQuote: false,
      },
    ],
  },
};
