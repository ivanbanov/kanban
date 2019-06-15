const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { paths, publicPath } = require('./paths');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    '@babel/polyfill',
    'react-hot-loader/patch',
    path.join(paths.src, '/app/main.jsx'),
  ],
  output: {
    path: paths.dist,
    publicPath,
    filename: '[name].js',
  },
  devServer: {
    contentBase: paths.dist,
    hot: true,
    publicPath: paths.publicPath,
    stats: 'minimal',
    watchContentBase: true,
  },
  resolve: {
    alias: {
      ui: path.join(paths.src, 'ui'),
      app: path.join(paths.src, 'app'),
    },
    modules: [
      path.join(paths.src, '/src'),
      path.join(paths.root, '/node_modules'),
    ],
    extensions: ['.js', '.jsx', '.svg'],
    symlinks: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.join(paths.root, '/babel.config.js'),
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: 'svg-react-loader',
      },
      {
        test: /\.(jpg|png)$/,
        use: 'file-loader',
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(paths.src, '/app/index.html'),
    }),
  ],
};
