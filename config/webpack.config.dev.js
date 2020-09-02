const webpack = require('webpack')
const { merge } = require('webpack-merge')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// const CpuprofileWebpackPlugin = require('cpuprofile-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const { BUILD_DIR, SRC_DIR } = require('./path.config')

const devServer = {
  port: 8888,
  hot: true,
  open: true,
  compress: true,
  publicPath: '/',
  quiet: true,
  // disableHostCheck: true,
  historyApiFallback: true,
  proxy: {}
}

const devConfig = {
  mode: 'development',
  devtool: 'eval',
  devServer,
  output: {
    path: BUILD_DIR,
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ReactRefreshPlugin({
      overlay: false
    }),
    new webpack.HotModuleReplacementPlugin()
    // new BundleAnalyzerPlugin(),
    // new CpuprofileWebpackPlugin()
  ],
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  }
}

module.exports = merge(baseConfig, devConfig)
