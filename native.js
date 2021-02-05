const { jsExtensions, tsExtensions, computeExtensions } = require('./lib/ext')

const allExtensions = computeExtensions(
  [...jsExtensions, ...tsExtensions]
)

module.exports = {
  extends: [
    "./lib/rules/core.js",
    "./lib/rules/typescript.js",
    "./lib/rules/format.js",
    "./lib/rules/react.js",
    "./lib/rules/native.js"
  ],
  globals: {
    ErrorUtils: false,
    FormData: false,
    SharedArrayBuffer: false,
    XMLHttpRequest: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: false,
    clearInterval: false,
    clearTimeout: false,
    fetch: false,
    navigator: false,
    process: false,
    requestAnimationFrame: false,
    requestIdleCallback: false,
    setImmediate: false,
    setInterval: false,
    setTimeout: false
  },
  settings: {
    "import/extensions": allExtensions,
    "import/resolver": {
      node: {
        extensions: allExtensions
      }
    }
  },
  overrides: [
    {
      files: ["*.web.*"],
      env: { browser: true }
    }
  ]
}
