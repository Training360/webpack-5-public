const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const mode = process.env.NODE_ENV || 'production'
const isDevMode = mode === 'development'

const config = {
  mode,
  entry: {
    main: getFullPath('src/main.js'),
    about: getFullPath('src/about.js')
  },
  output: {
    path: getFullPath('public'),
    filename: isDevMode ? '[name].bundle.js' : './assets/[name].[contenthash].js',
    clean: true,
    assetModuleFilename: './assets/[name].[contenthash][ext]'
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
  performance: {
    assetFilter
  },
  optimization: {
    minimize: !isDevMode,
    minimizer: isDevMode
      ? []
      : [
          new TerserPlugin(), 
          new CssMinimizerPlugin()
        ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors'
        }
      }
    },
    runtimeChunk: 'single'
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
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
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
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/template/about.html',
      minify: false,
      filename: 'about.html',
      chunks: ['about']
    }),
    ...addProdPlugins([
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './src/assets/favico/**/*',
            to: getFullPath('public/[name][ext]')
          }
        ]
      }),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerMode: 'static'
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

function assetFilter (assetFileName) {
  const extensionPattern = /\.(png|jpe?g|gif|webp|map)$/i
  return !extensionPattern.test(assetFileName)
}

function getConfig () {
  if (!isDevMode) {
    const smp = new SpeedMeasurePlugin().wrap(config)
    smp.plugins.push(new MiniCssExtractPlugin({
      filename: './assets/style.[contenthash].css'
    }))
    return smp
  }
  return config
}

module.exports = getConfig()
