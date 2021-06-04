const jsExtensions = [".js", ".jsx", ".json"];
const tsExtensions = [".ts", ".tsx", ".d.ts"];
const extensions = [...jsExtensions, ...tsExtensions];

module.exports = {
  env: {
    es6: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    /**
     * These fields are required for using rules that require type information
     * To override them, you can play an `overrides` field in your config file
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#parseroptionsproject
     */
    tsconfigRootDir: __dirname,
    project: ["tsconfig.json"],
  },
  extends: ["./lib/core.js", "./lib/import.js", "./lib/format.js"],
  settings: {
    /**
     * Tell import which file extensions to look for
     * @see https://github.com/benmosher/eslint-plugin-import#importextensions
     */
    "import/extensions": extensions,
    /**
     * Tell import which files to look for
     * @see https://github.com/benmosher/eslint-plugin-import#resolvers
     */
    "import/resolver": {
      node: {
        extensions: extensions,
      },
      /**
       * Enable babel-plugin-module-resolver for resolving aliases
       * @see https://github.com/tleunen/babel-plugin-module-resolver
       */
      "babel-module": {},
    },
    /**
     * Tell import to use typescript-eslint
     * @see https://github.com/benmosher/eslint-plugin-import#importparsers
     */
    "import/parsers": {
      "@typescript-eslint/parser": tsExtensions,
    },
  },
};
