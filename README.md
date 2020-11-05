# eslint-config-very

Basic eslint config for TypeScript React / React Native projects.

## Usage

Follow these steps to add this eslint config to your project. These instructions work for React (create-react-app or custom setups) and React Native (including expo).

### Installation

1. Install packages - `yarn add --dev eslint-config-very`
2. Install peer dependencies (packages required to use the eslint config) - `npx install-peerdeps --dev eslint-config-very`
3. Add `extends: [very]` to your `.eslintrc.js`
4. Configure the `lint` script in `package.json`

```
"scripts": {
  "lint": "eslint . --ext .ts,.tsx"
}
```

You can fix all automatically fixable errors by appending the `--fix` flag to your script: `yarn run lint --fix`.

## Roadmap

Please see the [open issues](https://github.com/[VERY-LABS]/[REPO-NAME]/issues) for a list of known issues / proposed features.

## Contributing

Contributions are welcome! Any contributions you make are greatly appreciated. Please see [CONTRIBUTING.md](https://github.com/verypossible-labs/eslint-config-very/blob/master/CONTRIBUTING.md) and our [Code of Conduct](https://github.com/verypossible-labs/eslint-config-very/blob/master/CODE_OF_CONDUCT.md).

## License

Distributed under the [MIT license](https://github.com/verypossible-labs/eslint-config-very/blob/master/LICENSE)
