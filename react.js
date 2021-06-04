"use strict";

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["./index.js", "./lib/rules/react.js"],
};
