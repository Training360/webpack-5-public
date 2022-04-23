# 43. lecke - A konfiguráció optimalizálása
- A `TerserPlugin`t hagyjuk meg az alapértelmezett konfigurációval, azaz töröljük a paraméterként megadott objectet
- Töröljük ki az `ImageMinimizerPlugin`t, hogy a build ideje leredukálódjon, és keressünk más módot a képek optimalizálására
- Az `optimization` csak ennyi marad:

  ```javascript
    optimization: {
      minimize: !isDevMode,
      minimizer: isDevMode
        ? []
        : [
            new TerserPlugin(),
            new CssMinimizerPlugin()
          ]
    },
  ```

- A `HtmlWebpackPlugin`nál kitörlöm a `title` és a `lang` tulajdonságokat, majd maga az alkalmazás intézi a nyelv beállítását és ezzel együtt, ha szükséges, a title módosítását
- A beállítások így ennyire redukálódnak: 

  ```javascript
  new HtmlWebpackPlugin({
    template: './src/assets/template/index.html',
    minify: false
  }),
  ```

- A `BundleAnalyzerPlugin`t módosítom, fájlba generáltatok egy riportot, ` analyzeMode: 'static'` megadásával, és hogy ne nyíljon meg automatikusan a böngészőben, megadom az ` openAnalyzer: false` beállítást is:

  ```javascript
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
    analyzeMode: 'static'
  })
  ```

- Távolítsuk el az összes nem használt függőséget az `npm unistall -D` parancs használatával:
  - eslint-webpack-plugin
  - image-minimizer-webpack-plugin
  - imagemin
  - imagemin-gifsicle
  - imagemin-jpegtran
  - imagemin-optipng
  - imagemin-svgo
  - stylelint-webpack-plugin
  - webpack-merge
  