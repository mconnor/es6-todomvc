const resolve = require('path').resolve
const webpackValidator = require('webpack-validator')
module.exports = () => {
  return webpackValidator({
    entry: './app.js',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
      publicPath: '/dist/',
      pathinfo: true,
    },
    context: resolve(__dirname, 'src'),
    devtool: 'eval',
  })
}
