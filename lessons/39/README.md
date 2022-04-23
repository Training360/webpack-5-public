# 39. lecke - A `Webpack Bundle Analyzer` - a bundle felépítésének vizualizálása
- Egy bundle részletes felépítését vizuálisan is megtekinthetjük
- Ehhez a `Webpack Bundle Analyzer`-re lesz szükség
- Telepítsük fel: `npm i -D webpack-bundle-analyzer`
- Importáljuk a következőképp a `webpack.config.js` fájlba:
  
  ```javascript
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  ```

- Majd vegyük használatba, adjuk hozzá a prod pluginokhoz:

  ```javascript
  new BundleAnalyzerPlugin()
  ```

- A buildelés végén automatikusan megnyílik a böngészőben a szerver által a 8888-as porton a bundle vizualizált felépítése
- Láthatjuk az eredeti, a parse-olt és - ha van - a gzip-elt méretet, az útvonalat 
- A jelenlegi nagyméretű bundle valójában a Font Awesome `solid.min.js` fájl miatt van 

**Linkek** :
- [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)  
