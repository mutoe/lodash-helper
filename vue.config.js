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
  chainWebpack: config => {
    config.module
      .rule('yaml')
      .test(/\.ya?ml$/)
      .use('json-loader')
      .loader('json-loader')
      .end()
      .use('yaml-loader')
      .loader('yaml-loader')
  },
  pluginOptions: {
    enalbeInSFC: false, // Locale messages in Single file components
  },
}
