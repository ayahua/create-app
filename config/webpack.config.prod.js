const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base')
const { BUILD_DIR, SRC_DIR } = require('./path.config')

const prodConfig = {
  mode: 'production',
  output: {
    filename: 'scripts/[name]-[contenthash:8].js',
    path: BUILD_DIR,
    publicPath: '',
    ecmaVersion: 5
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
    new MiniCssExtractPlugin({
      filename: 'assets/[name]-[contenthash:8].css'
    })
  ]
}

module.exports = merge(baseConfig, prodConfig)
