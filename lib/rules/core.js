"use strict";
const { jsExtensions } = require('../ext')

module.exports = {
  env: {
    es6: true,
    jest: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: [
    /**
     * Use recommended eslint rules
     * @see https://eslint.org/docs/rules
     */
    "eslint:recommended",
    /**
     * Basic import/export rules
     * @see https://github.com/benmosher/eslint-plugin-import
     */
    "plugin:import/errors", 
    "plugin:import/warnings",
  ],
  rules: {
    /**
     * This rule disallows the use of parens when they are no required
     * @see http://eslint.org/docs/rules/arrow-parens
     */
    "arrow-parens": ["error", "as-needed"],
    /**
     * Disallow usage of variables outside of their binding context
     * and emulate traditional block scope from other languages
     * @see https://eslint.org/docs/rules/block-scoped-var
     */
    "block-scoped-var": "error",
    /**
     * Disallows directly modifiying the prototype of builtin objects
     * @see https://eslint.org/docs/rules/no-extend-native
     * @example
     *
     * ```js
     * // incorrect
     * Object.prototype.a = "a";
     * ```
     */
    "no-extend-native": "error",
    /**
     * Disallow magic numbers (numbers that occurr multiple times in code without an explicit meaning)
     * @see https://eslint.org/docs/rules/no-magic-numbers
     */
    "no-magic-numbers": "error",
    /**
     * Disallow reassignment of native objects
     * @see https://eslint.org/docs/rules/no-native-reassign
     */
    "no-native-reassign": "error",
    /**
     * Disallow use of `__proto__`
     * @see https://eslint.org/docs/rules/no-proto
     */
    "no-proto": "error",
    /**
     * require `let` or `const` instead of `var`
     * @see http://eslint.org/docs/rules/no-var
     */
    "no-var": "error",
    /**
     * Disallow yoda conditions
     * @see https://eslint.org/docs/rules/yoda
     */
    yoda: "error",
    /**
     * Enforce an import order paradigm
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
     */
    "import/order": ["error", {
      "groups": [
        "builtin",
        "external",
        "parent",
        "sibling",
        "index"
      ]
    }]
  },
  settings: {
    /**
     * Tell import what file extensions to look for
     * @see https://github.com/benmosher/eslint-plugin-import#resolvers
     */
    "import/extensions": jsExtensions,
    "import/parsers": {
      "@babel/eslint-parser": jsExtensions
    },
    "import/resolver": {
      node: {
        extensions: jsExtensions
      }
    }
  }
};
