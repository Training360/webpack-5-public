# 20. lecke - A `development` és a `production` környezetek külön konfigurációs fájllal I.
- A production (röviden: prod) és development (röviden: dev) módban eltérő konfigurációkat használunk
- Fejlesztés közben a legfontosabb a sebesség, hogy mielőbb lássuk a változásokat
- Prod, azaz éles környezetben a kódunkat minify-oljuk, figyelembe vesszük a böngészőkompatibilitást, esetleg optimalizáljuk a képeket, stb. Ez több műveletet követel meg, ami miatt lassabb lesz a build folyamata
- A konfigurációk kettéválasztásának az egyik módja, ha készítünk 3 konfigurációs állományt: 
  - `webpack.common.js`: ebbe kerülnek az általános dolgok, az, ami mindkét környezetben megegyezik
  - `webpack.dev.js`: ide kerülnek a csak `dev` környezetben használt konfigurációs beállítások, és ezt kombináljuk az általános beállításokkal
  - `webpack.prod.js`: ide kerülnek a csak `prod` környezetben használt konfigurációs beállítások, és ezt kombináljuk az általános beállításokkal
- A konfigurációk összefűzéshez telepítenünk a kell a `webpack-merge` csomagot: `npm i -D webpack-merge` 
- A `webpack.confgig.js` fájlt átnevezem `webpack.confgig.js.bak`-ra
- Írjuk meg az új konfigurációs fájlokat:

  ```javascript
  // `webpack.common.js`
  const { resolve } = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    entry: {
      main: resolve(__dirname, 'src/main.js')
    },
    output: {
      path: resolve(__dirname, 'public'),
      filename: '[name].[contenthash].js',
      clean: true
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
        template: resolve(__dirname, 'src/assets/template/index.html'),
        minify: false,
        title: 'Webpack 5',
        lang: 'hu',
      }),
    ]
  }
  ```

  ```javascript
  // webpack.dev.js
  const { resolve } = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const { merge } = require('webpack-merge')
  const common = require('./webpack.common')

  module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      open: true,
      port: 5055
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    }
  })
  ```

  ```javascript
  // webpack.prod.js
  const { resolve } = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const MiniCssExtractPlugin = require('mini-css-extract-plugin')
  const { merge } = require('webpack-merge')
  const common = require('./webpack.common')

  module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 1500
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css'
      })
    ]
  })
  ```

- Módosítsuk a `package.json` fájlba írt szkripteket, hogy a megfelelő környezetben a megfelelő konfiguráció legyen használva:

  ```json
    "build": "webpack --config webpack.prod.js",
    "watch": "webpack --config webpack.prod.js --watch",
    "dev": "webpack serve --config webpack.dev.js"
  ```

- Így már külön konfigurációnk van az eltérő környezetekhez
- Futtassuk is le mindegyik szkriptet, és ellenőrizzük a munkánkat

**Linkek** :
- [Production](https://webpack.js.org/guides/production/)
- [webpack-merge](https://github.com/survivejs/webpack-merge)
