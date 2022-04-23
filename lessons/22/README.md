# 22. lecke - A development és a production környezetek konfigurálása egy fájlon belül
- A `prod` és a `dev` konfiguráció szétválasztásának egy másik módja, ha egyszerűen csak vizsgáljuk, hogy milyen környezetben vagyunk, és egy feltételes szerkezettel ennek megfelelően módosítjuk a konfigurációt 
- Így elég egy `webpack.config.js` fájl
- Módosítsuk a `scripts` bejegyzéseket a `package.json` fájlban: 
  
  ```json
  "dev": "webpack serve --node-env=development",
  "build": "webpack --node-env=production",
  "watch": "webpack --node-env=production --watch"
  ```
- Így nem a Webpack `mode` lesz beállítva, hanem a `NODE_ENV` környezeti változó, ezzel elkerülhetjük a `cross-env` csomag használatát
- Módosítsuk a `webpack.config.js` fájlt
- Lekérdezem a `mode`-ot, és az `isDevMode` változóban letárolom, hogy `dev` módban vagyunk-e vagy sem. Ez egy egyszerű boolean érték lesz
- Írok egy függvényt, amely a csak `prod` módban használt pluginokat adja vissza:
  
  ```javascript
  const { resolve } = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/assets/template/index.html',
        minify: false,
        title: 'Webpack 5',
        lang: 'hu',
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
  ```