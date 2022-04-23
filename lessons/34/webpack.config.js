const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const mode = process.env.NODE_ENV || 'production'
const isDevMode = mode === 'development'

module.exports = {
  mode,
  entry: {
    main: getFullPath('src/main.js')
  },
  output: {
    path: getFullPath('public'),
    filename: isDevMode ? '[name].bundle.js' : '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: '[name].[contenthash][ext]'
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
      },
      {
        test: /\.(png|jp(e)g|gif|svg|webp)$/i,
        type: 'asset/resource',
        exclude: [getFullPath('src/assets/ico')]
      },
      {
        test: /\.(woff(2)|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
        include: [getFullPath('src/assets/fonts')]
      },
      {
        test: /\.svg$/i,
        type: 'asset/inline'
      },
      {
        test: /\.txt$/i,
        type: 'asset/source'
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
      files: getFullPath('src/assets/**/*.css')
    }),
    ...addProdPlugins([
      new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css'
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './src/assets/user/**/*',
            to: getFullPath('public/[name][ext]')
          }
        ]
      })
    ])
  ]
}

function getFullPath (path) {
  return path ? resolve(__dirname, path) : resolve(__dirname)
}

function addProdPlugins (plugins) {
  return !isDevMode && plugins ? plugins : []
}
