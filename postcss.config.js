const cssnano = require('cssnano')
const cssnext = require('postcss-cssnext')
const atImport = require('postcss-import')
const mqpacker = require('css-mqpacker')
const focus = require('postcss-focus')

const cssnextConfig = {
  browsers: ['last 2 versions'],
  features: {
    customProperties: {
      preserve: true
    }
  }
}

module.exports = {
  plugins: [
    atImport,
    cssnext(cssnextConfig),
    focus,
    mqpacker,
    cssnano({ autoprefixer: false })
  ],
}
