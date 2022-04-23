# 13. lecke - A `watch` mód, fájlok módosulásának figyelése
- A `watch` mód a `dev-server` esetében automatikusan be van állítva, azonban ezt konfigurálhatjuk is
- A fájlok figyelése konfigurálható: beállítom, hogy hagyja figyelmen kívül a `node_modules` mappát, és az újrabuildelés előtt várjon 1,5 másodpercet, hátha lesz addig újabb módosítás:
  
  ```javascript
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 1500,
  },
  ```

- Egyéb esetben a `watch` módot mindig nekünk kell megadni, vagy a configban: `watch: true`, vagy pedig a `scripts`-nél
- Készítsünk is egy új szkriptet a `package.json` fájlba:

  ```json
    "watch": "webpack --mode=production --watch"
  ```

- Futtassuk a `watch` szkriptet, így láthatjuk, hogy ha módosítjuk valamelyik forrásfájlunkat, 1,5 másodperc múlva újra buildelődik

**Linkek** :
- [Watch and WatchOptions](https://webpack.js.org/configuration/watch/#root)