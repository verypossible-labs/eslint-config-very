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
    tsconfigRootDir: process.cwd(), // project root
    project: ["tsconfig.json"],
  },
  extends: ["./lib/rules/core.js", "./lib/rules/import.js", "prettier"],
};
