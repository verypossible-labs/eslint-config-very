"use strict";

const { jsExtensions, tsExtensions } = require('../ext')
const extensions = [...jsExtensions, ...tsExtensions]

module.exports = {
  extends: [
    /**
     * Recommended TypeScript eslint rules
     * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
     */
    "plugin:@typescript-eslint/recommended",
    /**
     * Basic import/export rules
     * @see https://github.com/benmosher/eslint-plugin-import
     */
    "plugin:import/errors", 
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    /**
     * Remove redundant @param in doc comments
     */
    "jsdoc/require-param": "off",
    "jsdoc/require-param-type": "off",
    /**
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
     */
    semi: "off",
    "@typescript-eslint/semi": ["error"],
    /**
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
     */
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
      },
    ],
    /**
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
     */
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],
    /**
     * An empty interface is equivalent to its supertype
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
     */
    "@typescript-eslint/no-empty-interface": "off",
    /**
     * Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
     */
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "local",
        args: "after-used",
      },
    ],
    /**
     * Require explicit return types on functions and class methods
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
     */
    "@typescript-eslint/explicit-function-return-type": "warn",
  },
  settings: {
    /**
     * Tell import what file extensions to look for
     * @see https://github.com/benmosher/eslint-plugin-import#resolvers
     */
    "import/extensions": extensions,
    "import/resolver": {
      node: {
        extensions: extensions,
      },
    },
    /**
     * Use typescript-eslint as parser
     * @see https://github.com/benmosher/eslint-plugin-import#importparsers
     */
    "import/parsers": {
      "@typescript-eslint": tsExtensions,
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parser: "@typescript-eslint/parser"
    }
  ]
};
