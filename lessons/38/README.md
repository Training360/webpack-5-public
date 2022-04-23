# 38. lecke - A `performance` beállítások használata
- A build során megjelenő nagy fájlméretre figyelmeztető warning-okat egyszerűen el tudjuk tüntetni a következő beállítással a `webpack.config.js` gyökerében:

  ```javascript
    performance: {
      hints: false
    },
  ```

- Ezzel azonban csupán elkendőzzük a problémát
- Ha akarjuk, manuálisan is megadhatjuk a `performance`-en belül, hogy mekkora legyen az elfogadott maximális entry és asset fájlméret:

  ```javascript
    performance: {
      maxAssetSize: 512000,
      maxEntrypointSize: 512000,
    },
  ```

- Azt is megadhatjuk, hogy milyen fájlok legyenek, amelyeket a performance hint megjelenít
- A `webpack.config.js` fájlban hozzunk létre egy újabb függvényt alul, amely a paraméterként kapott fájlnév alapján eldönti, hogy az adott fájltípus esetén megjelenjen-e a hint vagy sem. A `png`, `gif`, `jpg`, `jpeg`, `webp` és `map` fájlok esetében ezt kikapcsoljuk:  

  ```javascript
  function assetFilter (assetFileName) {
    const extensionPattern = /\.(png|jpe?g|gif|webp|map)$/i
    return !extensionPattern.test(assetFileName)
  }
  ```

- Majd a configban módosítsuk a `performance`-et az `assetFilter`-t megadva:

  ```javascript
    performance: {
      maxAssetSize: 512000,
      maxEntrypointSize: 512000,
      assetFilter
    },
  ```

**Linkek** 
- [assetFilter](https://webpack.js.org/configuration/performance/#performanceassetfilter)
