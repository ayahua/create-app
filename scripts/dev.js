const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

function devServer () {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development'

  const webpackConfig = require('../config/webpack.config.dev')
  const compiler = webpack(webpackConfig)
  const devServer = new WebpackDevServer(compiler, webpackConfig.devServer)
  const { port, host } = webpackConfig.devServer

  devServer.listen(port, host, (err) => {
    if (err) return console.error(err)
  })
}

devServer()
