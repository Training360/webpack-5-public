const { resolve } = require('path')
const HhtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: resolve(__dirname, 'src/main.js')
  },
  output: {
    path: resolve(__dirname, 'public'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  devtool: false,
  devServer: {
    open: true,
    port: 5055
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 1500
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
      template: './src/assets/template/index.html',
      minify: false,
      title: 'Webpack 5',
      lang: 'hu',
    })
  ]
}