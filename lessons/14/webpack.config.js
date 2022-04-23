const { resolve } = require('path')

module.exports = {
  entry: {
    main: resolve(__dirname, 'src/main.js')
  },
  output: {
    path: resolve(__dirname, 'public'),
    filename: '[name].[contenthash].js'
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
  }
}