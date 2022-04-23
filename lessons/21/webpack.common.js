const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: resolve(__dirname, 'src/main.js')
  },
  output: {
    path: resolve(__dirname, 'public'),
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 1000
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/assets/template/index.html'),
      minify: false,
      title: 'Webpack 5',
      lang: 'hu',
    }),
  ]
}