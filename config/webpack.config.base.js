const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { ROOT_DIR, SRC_DIR, STYLES_DIR } = require('./path.config')

const htmlPluginOpts = {
  inject: true,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true
  },
  hash: true,
  template: path.join(ROOT_DIR, './public/index.html'),
  favicon: path.join(ROOT_DIR, './public/favicon.ico')
}

// const webpackConfig
const webpackConfig = {
  entry: ['./src/index.js'],
  devtool: 'hidden-source-map',
  resolve: {
    extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': SRC_DIR
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: /node_modules\//,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]-[local]-[hash:base64:5]'
              }
            }
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                paths: [STYLES_DIR]
              }
            }
          }
        ]
      },
      {
        test: /\.png$/,
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin(htmlPluginOpts)
  ]
}

module.exports = webpackConfig
