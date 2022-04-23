# 36. lecke - A `MiniCssExtractPlugin` használata a CSS-kód minify-olásához
- Ha a JS-fájlok minify-olva vannak, akkor tegyük ezt meg a CSS-fájlokkal is
- Telepítsük a `CssMinimizerPlugin`t : `npm i -D css-minimizer-webpack-plugin`
- Importáljuk a `webpack.config.js` fájlba:

  ```javascript
  const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
  ```

- Módosítsuk az `optimization` konfigurációt, adjuk hozzá a plugint az alapértelmezett konfigurációval:

  ```javascript
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false
            }
          },
          extractComments: false
        }),
        new CssMinimizerPlugin()
      ]
    }
  ```

- Mivel a minify-olás folyamata is visz el időt, és teljesen felesleges dev módban használni, ezért módosítsuk úgy a konfigurációt, hogy csak prod módban legyen használva:

  ```javascript
    optimization: {
      minimize: !isDevMode,
      minimizer: isDevMode
        ? []
        : [
            new TerserPlugin({
              terserOptions: {
                format: {
                  comments: false
                }
              },
              extractComments: false
            }),
            new CssMinimizerPlugin()
          ]
    },
  ```
**Linkek** 
- [CssMinimizerWebpackPlugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/#root)
