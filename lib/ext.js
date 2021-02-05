const jsExtensions = [".js", ".jsx", ".json"]
const tsExtensions = [".ts", ".tsx", ".d.ts"]

const platformSubextensions = [".android", ".ios", ".web", ".native"]

function computeExtensions(baseExts) {
  const exts = []
  for (const platform of [...platformSubextensions, '']) {
    for (const base of baseExts) {
      exts.push(`${platform}${base}`)
    }
  }
  return exts
}

module.exports = {
  jsExtensions,
  tsExtensions,
  platformSubextensions,
  computeExtensions
}
