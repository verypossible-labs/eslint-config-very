"use strict";

module.exports = {
  extends: [
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
      },
    ],
  }
};
