const webpack = require('webpack')
const execa = require('execa')
const releaseVersion = require('./version')

async function build () {
  const isConfirm = await releaseVersion()
  process.env.NODE_ENV = process.env.NODE_ENV || 'production'
  const webpackConfig = require('../config/webpack.config.prod')
  const version = process.env.VERSION

  if (isConfirm) {
    webpack(webpackConfig, async function (err, stats) {
      if (err) {
        console.error('  Build failed with errors.\n')
        process.exit(1)
      }

      process.stdout.write(`${stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      })}\n\n`)

      if (stats.hasErrors()) {
        console.error('  Build failed with errors.\n')
        process.exit(1)
      }

      await execa('git', ['add', '-A'], { stdio: 'inherit' })
      await execa(
        'git',
        ['commit', '-m', `build: build production v${version}`],
        { stdio: 'inherit' }
      )
      await execa(
        'npm',
        ['version', version, '-m', `build: update version v${version}`],
        { stdio: 'inherit' }
      )
      console.debug('  Build complete.\n')
    })
  }
}

build()
