"use strict";

module.exports = {
  extends: [
    /**
     * Use recommended eslint rules
     * @see https://eslint.org/docs/rules
     */
    "eslint:recommended",
    /**
     * Recommended TypeScript eslint rules
     * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#recommended-configs
     */
    "plugin:@typescript-eslint/recommended",
    /**
     * Lint with Type information
     * NOTE: with this enabled, the linter compiles your project first. this can take up to 30 seconds.
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
     */
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    /**
     * Disallow variables being used outside of the block in which they were defined
     * @see https://eslint.org/docs/rules/block-scoped-var
     */
    "block-scoped-var": "error",
    /**
     * Disallow extending native JS objects
     * @see https://eslint.org/docs/rules/no-extend-native#disallow-extending-of-native-objects-no-extend-native
     */
    "no-extend-native": "error",
    /**
     * The __proto__ property has been deprecated and shouldn't be used in code
     * @see https://eslint.org/docs/rules/no-proto#disallow-use-of-__proto__-no-proto
     */
    "no-proto": "error",
    /**
     * Enforce usage of 'let' or 'const'
     * @see https://eslint.org/docs/rules/no-var#require-let-or-const-instead-of-var-no-var
     */
    "no-var": "error",
    /**
     * Disallow 'yoda' conditions where the literal value of the condition comes before the variable, which can cause mistaken use of logical operators
     * @see https://eslint.org/docs/rules/yoda#require-or-disallow-yoda-conditions-yoda
     * @example
     * "red" === color // incorrect
     * color === "red" // correct
     */
    yoda: "error",
    /**
     * Turn off indentation and let prettier / editorconfig handle it
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#the-indent--typescript-eslintindent-rules
     */
    indent: "off",
    "@typescript-eslint/indent": "off",
    /**
     * Turn off semicolon check and let prettier handle it
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
     */
    semi: "off",
    "@typescript-eslint/semi": ["off"],
    /**
     * ES2015 provides a default class constructor if one isn't specified, so it's unnecessary to provide an empty one
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
     */
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],
    /**
     * Don't enforce unbound methods -- this rule can fire incorrectly on React libraries that expose hooks
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
     * @example
     * const { foo } = useHookFromSomeLib()
     * ^ error is thrown here because the lib hook may not be annotated the exact way required to prevent this error from firing incorrectly
     */
    "@typescript-eslint/unbound-method": "off",
    /**
     * Require explicit return types on functions and class methods
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
     */
    "@typescript-eslint/explicit-function-return-type": "warn",
    /**
     * Enforce template literal expressions to be of string type.
     * We allow nullish values because this rule throws an error even if you are properly checking against null/undefined.
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/v4.22.0/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
     */
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowNullish: true,
      },
    ],
    /**
     * Mark ts-comments with a warning so long as they have a description - otherwise they will throw an error
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/v4.22.0/packages/eslint-plugin/docs/rules/ban-ts-comment.md
     */
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": "allow-with-description",
        "ts-nocheck": "allow-with-description",
        "ts-check": false,
      },
    ],
    /**
     * Allow the use of the 'void' operator on a Promise function and allow skipping of async IIFEs
     * This rule directly contradicts the way promises are expected to be called within the `useEffect` hook in React, these 2 options allow bypassing without disabling the rule
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
     */
    "@typescript-eslint/no-floating-promises": [
      "error",
      {
        ignoreVoid: true,
        ignoreIIFE: true,
      },
    ],
  },
};
