# 25. lecke - A `PostCSS loader`
- Még ha nem is `PostCSS`t használtunk a kód megírásakor, ez a plugin mégis hasznos lehet
- Arra használjuk, hogy a `browserslistsrc` fájlban lévő beállításoknak megfelelően prefixeljük a CSS property-ket a böngészőkompatibilitás miatt
- Telepítsük a szükséges csomagokat:  `npm i -D postcss postcss-preset-env postcss-loader` 
- Hozzuk létre a `postcss.config.js` fájlt:
  
  ```javascript
  const postcssPresetEnv = require('postcss-preset-env')

  module.exports = {
    plugins: [
      postcssPresetEnv()
    ]
  }
  ```

- A `postcss-preset-env` beállításokat fogjuk használni
- A `webpack.config.js` fájlt is módosítanunk kell, a css rule-nál a loader-öket ki kell egészíteni: 

  ```javascript
    {
      test: /\.css$/,
      use: [
        isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
      ]
    }
  ```

- Buildelés után ha megnézzük a CSS-fájlt, látható, hogy egyes property-k prefixelve lettek

**Linkek** :
- [postcss-loader](https://webpack.js.org/loaders/postcss-loader/#root)
- [PostCSS](https://postcss.org/)
- [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env)
