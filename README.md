# @verypossible/eslint-config

Basic eslint config with options for TypeScript and/or React.

**Note: The `web` config is not working with create-react-app -- see [this issue](https://github.com/facebook/create-react-app/issues/8936)**

## Getting Started

Follow these steps to add this eslint config to your project.

### Installation

1. Install packages - `yarn add --dev @verypossible/eslint-config`
2. Install peer dependencies - `yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint prettier`

### Configuration

Create an `.eslintrc.js` in the root of your project.

This config has 3 setups: node, web, and native. At minimum, this config assumes all projects are using es6 or higher and contain a `package.json` (for file resolution).

**Node**

```js
// .eslintrc.js
module.exports = {
  extends: ["@verypossible/eslint-config/node"],
};
```

**Web (React)**

```js
// .eslintrc.js
module.exports = {
  extends: ["@verypossible/eslint-config/web"],
};
```

**Native (React Native)**

```js
// .eslintrc.js
module.exports = {
  extends: ["@verypossible/eslint-config/native"],
};
```

In addition to extending the config, you can also add any other [valid eslint params](https://eslint.org/docs/user-guide/configuring) that may be useful for your project.

You can then configure the `lint` script in `package.json`

```

"scripts": {
"lint": "eslint . --ext .ts,.tsx"
}

```

You can fix all automatically fixable errors by appending the `--fix` flag to your script: `yarn run lint --fix`.

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
  extends: ["@verypossible/config/[config]"],
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

## Development

This config extends these configs and plugins:

- [eslint - recommended](https://eslint.org/docs/rules/)
- [@typescript-eslint - recommended](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)
- [react - recommended](https://github.com/yannickcr/eslint-plugin-react)
- [react-hooks - recommended](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
- [import - recommended](https://github.com/benmosher/eslint-plugin-import)
- [prettier](https://github.com/prettier/eslint-config-prettier)

There are a few individual rules configured for each, please check the `lib/` folder for more information.

Adding or changing a rule is allowed! Please feel free to [open an issue](https://github.com/verypossible-labs/eslint-config-very/issues) or a [pull request](https://github.com/verypossible-labs/eslint-config-very/pulls)

## Roadmap

Please see the [open issues](https://github.com/verypossible-labs/eslint-config-very/issues) for a list of known issues / proposed features.

## Contributing

Contributions are welcome! Any contributions you make are greatly appreciated. Please see [CONTRIBUTING.md](https://github.com/verypossible-labs/eslint-config-very/blob/master/CONTRIBUTING.md) and our [Code of Conduct](https://github.com/verypossible-labs/eslint-config-very/blob/master/CODE_OF_CONDUCT.md).

## License

Distributed under the [MIT license](https://github.com/verypossible-labs/eslint-config-very/blob/master/LICENSE)

```

```
