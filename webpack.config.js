const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
const path = require('path')

module.exports = {
  mode: 'production',
  resolve: {
    plugins: [
      PnpWebpackPlugin,
    ],
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
  target: 'web',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
          {
              test:/.js$/,
              use: [
                  {
                      loader: 'babel-loader',
                      options: {
                          presets: [['@babel/preset-env', {
                              corejs: '3.6',
                              targets: '> 0.25% and not dead',
                              useBuiltIns: 'entry'
                          }], '@babel/preset-react']
                      }
                  }
              ]
          }
      ]
  }
};