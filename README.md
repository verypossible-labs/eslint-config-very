# @verypossible/eslint-config

Basic eslint config for TypeScript with React (optional).

## Getting Started

Follow these steps to add this eslint config to your project.

### Installation

1. Install packages - `yarn add --dev @verypossible/eslint-config`
2. Install peer dependencies - `npx install-peerdeps --dev @verypossible/eslint-config`

If you run into any issues with peer dependencies, you can install them manually.

```bash
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-plugin-module-resolver eslint eslint-config-prettier eslint-import-resolver-babel-module eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks prettier
```

### Configuration

Create an `.eslintrc.js` in the root of your project.

This config can be used with TypeScript, with or without React. At minimum, this config assumes all projects are using es6 or higher and contain a `package.json` (for file resolution).

```js
// .eslintrc.js

// typescript
module.exports = {
  extends: ["@verypossible/eslint-config"],
};

// OR

// typescript react
module.exports = {
  extends: ["@verypossible/eslint-config/react"],
};
```

In addition to extending the config, you can also add any other [valid eslint params](https://eslint.org/docs/user-guide/configuring) that may be useful for your project.

You can then configure the `lint` script in `package.json`

```json
"scripts": {
  "lint": "eslint ." // `.` means everything, you can change it to be a given folder, etc.
}
```

You can fix all automatically fixable errors by adding the `--fix` flag to your script

```json
"scripts": {
  "lint": "eslint --fix ."
}
```

[More about configuring the eslint cli](https://eslint.org/docs/user-guide/command-line-interface).

### Type checking

This config has linting with type information enabled automatically. Note that this requires certain `parserOptions` to be defined -- the defaults for these are set in [index.js](./index.js).

[Read more about this configuration here](https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TYPED_LINTING.md).

### Extending the config

You can extend the config in any way that you'd like, including overriding rules.

ex.

```js
module.exports = {
  extends: ["@verypossible/eslint-config/native"],
  rules: {
    "@typescript-eslint/ban-ts-comment": "warn",
    "import/namespace": "off",
  },
};
```

### Module resolution

If you're using absolute path resolution aliasing (ie. instead of `../../foo` you have something like `~/foo`) and want to enforce it in import ordering, you can extend the config:

```js
module.exports = {
  extends: ["@verypossible/eslint-config"],
  rules: {
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "~/**", // or whatever your alias is
            group: "parent",
          },
        ],
      },
    ],
  },
};
```

Be sure to enable it in your `tsconfig.json` as well:

```json
{
  // ...rest of your tsconfig.json
  "baseURL": ".", // root, could be any glob
  "paths": {
    "~/*": ["src/**"] // whatever your alias is (~) and wherever it resolves to (src)
  }
}
```

**If you are using React Native** you will also need to enable module resolution inside the `plugins` array of your `babel.config.js`:

```js
// ...rest of the config
plugins: [
  // ...any other plugins you have
  [
    "module-resolver",
    {
      root: ["./"], // root, could be any glob
      alias: {
        "~": "./src", // whatever your alias is (~) and wherever it resolves to (src)
      },
    },
  ],
];
```

## Development

This config extends these configs and plugins:

- [eslint - recommended](https://eslint.org/docs/rules/)
- [@typescript-eslint - recommended](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)
- [react - recommended](https://github.com/yannickcr/eslint-plugin-react)
- [react-hooks - recommended](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
- [import - recommended](https://github.com/benmosher/eslint-plugin-import)
- [prettier](https://github.com/prettier/eslint-config-prettier)

There are a few individual rules configured for each, please check the `lib/` folder for more information.

Adding or changing a rule is allowed! Please feel free to [open an issue](https://github.com/verypossible-labs/eslint-config-very/issues) or a [pull request](https://github.com/verypossible-labs/eslint-config-very/pulls) to make a case for a rule addition / change.

## Roadmap

Please see the [open issues](https://github.com/verypossible-labs/eslint-config-very/issues) for a list of known issues / proposed features.

## Contributing

Contributions are welcome! Any contributions you make are greatly appreciated. Please see [CONTRIBUTING.md](https://github.com/verypossible-labs/eslint-config-very/blob/master/CONTRIBUTING.md) and our [Code of Conduct](https://github.com/verypossible-labs/eslint-config-very/blob/master/CODE_OF_CONDUCT.md).

## License

Distributed under the [MIT license](https://github.com/verypossible-labs/eslint-config-very/blob/master/LICENSE)
