# 42. lecke - Az output mappastruktúrák optimalizálása
- Jelenleg a build után a `public` mappán belül van az összes fájlunk
- Módosítsuk úgy az alkalmazást, hogy a nem verziózott, azaz nem hash-elt fájlok legyenek a gyökérben, a többit pedig szórjuk bele egy `assets` mappába a `public`-on belül
- Ehhez két dolgot kell csak tennünk
- Módosítsuk elsőként az `output`ot a `webpack.config.js`-en belül:

  ```javascript
  filename: isDevMode ? '[name].bundle.js' : './assets/[name].[contenthash].js',
  assetModuleFilename: './assets/[name].[contenthash][ext]'
  ```

- Valamint a MiniCssExtractPluginnál a `filename`-et:

  ```javascript
    filename: './assets/style.[contenthash].css'
  ```
