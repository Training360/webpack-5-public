# 41. lecke - A loader-ök, pluginok futásidejének elemzése a `Speed Measure Plugin` használatával
- Lehetőség van a loader-ök, pluginok futásidejének elemzésére a Speed Measure Plugin használatával
- Telepítsük: `npm i -D speed-measure-webpack-plugin`
- Importáljuk be a `webpack.config.js` fájlba:

  ```javascript
  const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
  ```

- A `webpack.config.js`-t módosítsuk, és ahelyett, hogy rögtön exportálnánk a konfigurációt, mentsük ki egy `config` nevű változóba 
- A `Speed Measure Plugin`-t csak prod módban akarom használni
- Ezt megtehetném így:

  ```javascript
  module.export = isDevMode ? config : new SpeedMeasurePlugin().wrap(config)
  ```

- Azonban build során ilyenkor hibát kapunk a MiniCssExtractPlugin miatt
- Mivel a `Speed Measure Plugin`-ba wrappelnem kell a configot, írok egy külön függvényt, amely a környezettől függően visszaadja a használni kívánt konfigurációt, és a MiniCssExtractPlugin általi bugot is kiküszöbölöm úgy, hogy utólagosan adom hozzá a plugint:

  ```javascript
  function getConfig () {
    if (!isDevMode) {
      const smp = new SpeedMeasurePlugin().wrap(config)
      smp.plugins.push(new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css'
      }))
      return smp
    }
    return config
  }
  ```

- Amit exportálnom kell, az a `getConfig()` visszatérési értéke, amely a mode-nak megfelelő konfig:

  ```javascript
  module.exports = getConfig()
  ```

- Most pedig, ha lebuildelem az alkalmazást - természetesen prod módban -, akkor látjuk a konzolon a pluginok és loader-ök futási idejét


**Linkek** :
- [Speed Measure Plugin](https://www.npmjs.com/package/speed-measure-webpack-plugin)
  