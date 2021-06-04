const { tsExtensions, extensions } = require("../ext");

module.exports = {
  extends: [
    /**
     * Use recommended import rules
     * @see https://github.com/benmosher/eslint-plugin-import#typescript
     */
    "plugin:import/recommended",
  ],
  rules: {
    /**
     * These import rules are redundant, as TypeScript provides the same checks as part of standard type checking
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
     */
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
  },
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
