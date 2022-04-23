# 2. lecke - A mode, az entry és output konfigurációk  
- Hozzunk létre a gyökérben egy `webpack.config.js` fájlt
- Az alapértelmezett belépési pont (entry point) és a kimeneti útvonal konfigurációja így néz ki:
  
  ```javascript
  const { resolve } = require('path')

  module.exports = {
    entry: {
      main: resolve(__dirname, 'src/index.js')
    },
    output: {
      path: resolve(__dirname, 'dist')
    }
  }
  ```

- Átnevezem az `src` mappában az `index.js`-t `main.js`-re
- Módosítom a `webpack.config.js` fájl `entry` és `output` tulajdonságait:
  
  ```javascript
  const { resolve } = require('path')

  module.exports = {
    entry: {
      main: resolve(__dirname, 'src/main.js')
    },
    output: {
      path: resolve(__dirname, 'public')
    }
  }
  ```

- A build során fellépő warning eltüntetésére az egyik módszer, hogy a `package.json` fájlban módosítjuk a `scripts`-et a következőre:

  ```json
  "build" : "webpack --mode production",
  "dev": "webpack --mode development"
  ```

- A `development` a fejlesztői mód
- Fejlesztés közben a lényeg, hogy minél gyorsabban lássuk a változásokat
- A `production` az éles környezetet jelenti, a végleges szerveren lévő kódot, a kész alkalmazást, amit használnak majd. Ebben az esetben fontos a kód optimalizálása, tömörítése stb.  
- Bár a mód itt is megadható konfigurációban (pl.: `mode: 'development'`), azonban most nem ezt használjuk
- Átmásolom az `index.html` fájlt a `dist` mappából a `public` mappába
- Törlöm a `dist` mappát
- A `.gitignore`-ban átírom a `dist`et `public`-ra
- Lefuttatom a `dev` szkriptet


**:**   
- [Webpack: entry point](https://webpack.js.org/concepts/entry-points/#root)
- [Webpack: output](https://webpack.js.org/concepts/output/#root)
- [Webpack: mode](https://webpack.js.org/configuration/mode/#root)
- [NodeJS: path API](https://nodejs.org/api/path.html)