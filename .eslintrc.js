module.exports = {
  rules: {
    'no-var': 'error'
  },
  extends: ['react-aya'],
  settings: {
    'import/resolver': {
      webpack: {
        config: require('./config/webpack.config.base.js')
      }
    }
  }
}
