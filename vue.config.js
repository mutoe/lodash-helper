const { resolve } = require('path')

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        // inject the stylus variables into each vue components.
        import: [resolve(__dirname, 'src/stylus/variables.styl')],
      },
    },
  },
  pluginOptions: {
    enalbeInSFC: false, // Locale messages in Single file components
  },
}
