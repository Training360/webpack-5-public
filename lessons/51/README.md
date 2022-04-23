# 51. lecke - A `chunk`ok elnevezése és a `cacheGroup` opció
- A chunknak adhatok nevet, hogy ne csak egy hash legyen a fájlnév
- Egyszerűen csak megadom a `name` opciót is a splitChunks-nál:

  ```javascript
  splitChunks: {
    chunks: 'all',
    name: 'vendors'
  }
  ```

- Saját magunk létrehozhatunk úgynevezett cache group-okat, amelyek segítségével csoportosíthatjuk a kódot általában felhasználás szerint; például az ikonokat tartalmazó közös kód kerülhet egy `icons` nevű csoportba, és a build során létrejön az `icons` fájl, amely mindenhova automatikusan be lesz linkelve, ahol szükséges; egy library csomagja (Vue, React): szintén mehetnek egy közös csoportba, és így tovább
- Én most csak egy ilyen `cacheGroup`ot hozok létre:

  ```javascript
  splitChunks: {
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        chunks: 'all',
        name: 'vendors'
      }
    }
  },
  ```

- Ezzel minden, a `node_modules` mappából jövő kód egy `vendors` nevű fájlba fog kerülni
- Ezzel a harmadik féltől származó kód és a saját kódunk külön van választva

**Linkek** :
- [optimization.splitChunks](https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks)
- [splitChunks.cacheGroups](https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkscachegroups)
