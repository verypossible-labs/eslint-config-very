module.exports = {
  env: {
    // use es6
    es6: true
  },
  extends: [
    // recommended eslint rules
    // https://eslint.org/docs/rules
    "eslint:recommended",
    // recommended typescript eslint rules
    // // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
    "plugin:@typescript-eslint/recommended",
    // react recommended rules
    // https://github.com/yannickcr/eslint-plugin-react
    "plugin:react/recommended",
    // react hooks recommended rules
    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    "plugin:react-hooks/recommended",
    // basic import/export rules
    // https://github.com/benmosher/eslint-plugin-import
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    // eslint-config-prettier disables all formatting rules from eslint
    // so formatting is all on prettier
    // https://github.com/prettier/eslint-config-prettier
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  // use typescript-eslint
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    // use latest JS version
    ecmaVersion: 2018,
    // typically, everything we write will be a module (the default is 'script')
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "import", "prettier", "react", "react-hooks"],
  rules: {
    // turn off react prop types since we're using typescript
    "react/prop-types": "off",
    // rule for display names used with React.createClass({}) or React.Component
    // since we mostly use function components with hooks, this is not necessary
    "react/display-name": "off",
    // the prettier plugin runs prettier automatically as part of eslint
    // without it, you'd need to run `prettier` as a separate command from linting
    "prettier/prettier": [
      'error',
      {
        // most languages use double quotes for strings, enforcing that here to keep consistency
        singleQuote: false
      }
    ],
  },
  settings: {
    // tell import where files should live
    // in this case, source files live in a folder from root called `src`
    // https://github.com/benmosher/eslint-plugin-import#resolvers
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
        paths: "src"
      },
      "babel-module": {}
    },
    // use typescript-eslint parser
    // https://github.com/benmosher/eslint-plugin-import#importparsers
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    }
  }
}
