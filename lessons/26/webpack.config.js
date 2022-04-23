const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')

const mode = process.env.NODE_ENV || 'production'
const isDevMode = mode === 'development'

module.exports = {
  mode,
  entry: {
    main: resolve(__dirname, 'src/main.js')
  },
  output: {
    path: resolve(__dirname, 'public'),
    filename: isDevMode ? '[name].bundle.js' : '[name].[contenthash].js',
    clean: true
  },
  devtool: isDevMode ? 'eval-source-map' : 'source-map',
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
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/template/index.html',
      minify: false,
      title: 'Webpack 5',
      lang: 'hu'
    }),
    new EslintWebpackPlugin(),
    new StylelintWebpackPlugin({
      fileas: resolve(__dirname, 'src/assets/**/*.css')
    }),
    ...addProdPlugins([
      new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css'
      })
    ])
  ]
}

function addProdPlugins(plugins) {
  return !isDevMode && plugins ? plugins : []
}
