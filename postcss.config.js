const cssnano = require('cssnano')
const postcssPresetEnv = require('postcss-preset-env')
const atImport = require('postcss-import')
const mqpacker = require('css-mqpacker')
const focus = require('postcss-focus')

module.exports = {
  plugins: [
    atImport,
    postcssPresetEnv({
      stage: 0
    }),
    focus,
    mqpacker,
    cssnano({ autoprefixer: false })
  ],
}
