const path = require('path')

const ROOT_DIR = path.resolve(__dirname, '../')

const SRC_DIR = path.resolve(ROOT_DIR, 'src')

const BUILD_DIR = path.resolve(ROOT_DIR, 'build')

const STYLES_DIR = path.resolve(SRC_DIR, './styles')

module.exports = {
  ROOT_DIR,
  SRC_DIR,
  BUILD_DIR,
  STYLES_DIR
}
