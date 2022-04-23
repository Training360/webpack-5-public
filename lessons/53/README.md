# 53. lecke - A `CompressionWebpackPlugin` használata fájlok tömörítéséhez
- A webpack DevServer `compress` beállítása alapértelmezetten `true`, ami annyit tesz, hogy tömöríti az állományokat
- Prod módban ezt a `CompressionWebpackPlugin` használatával tudjuk megtenni
- Telepítsük a plugint: `npm i -D compression-webpack-plugin`
- Importáljuk a `webpack.config.js`-be:

  ```javascript
  const CompressionPlugin = require('compression-webpack-plugin')
  ```

- Majd adjuk hozzá a prod pluginokhoz:

  ```javascript
  new CompressionPlugin()
  ```

- Ezzel a build során előáll az állományok gzippelt verziója is, ez alól a JS-be importált képek jelentenek kivételt
- A `CompressionPlugin`t konfigurálhatjuk is, én most mindent alapértelmezetten hagyok
- A plugin használata opcionális, hiszen mindezt szerveroldalon is meg tudjuk valósítani
  
**Linkek** :
- [devServer.compress](https://webpack.js.org/configuration/dev-server/#devservercompress)
- [CompressionWebpackPlugin](https://webpack.js.org/plugins/compression-webpack-plugin/#root)
