# 33. lecke - Statikus állományok másolása a `CopyWebpackPlugin`-nal
- Egy alkalmazás fejlesztése közben lehetnek olyan statikus állományok, faviconok, hosting szolgáltató által elvárt fájlok, amelyeket nem akarok a webpack-kel feldolgoztatni. de el kell őket érni. Egyszerűen csak át kellene másolni őket a kimeneti mappába
- Ezt egyszerűbb automatizálni, mint kézzel megoldani 
- Erre szolgál a `CopyWebpackPlugin` plugin
- Először is telepítsük: `npm i -D copy-webpack-plugin`
- Importáljuk a `webpack.config.js` fájlba: 
  
  ```javascript
  const CopyPlugin = require('copy-webpack-plugin')
  ```

- Majd adjuk hozzá a prod pluginokhoz, és konfiguráljuk, hogy a `user` mappából mindent másoljon át a kimeneti mappába:

  ```javascript
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './src/assets/user/**/*',
            to: resolve(__dirname, 'public/[name][ext]')
          }
        ]
      })
  ```

**Linkek** 
- [CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/#root)
