const path = require('path')

const root = path.join(__dirname, '/..')
const publicPath = '/'
const paths = {
  root,
  src: path.join(root, '/src'),
  dist: path.join(root, '/dist'),
  webpack: __dirname,
}

module.exports = { paths, publicPath }
