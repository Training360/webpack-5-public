# 29. lecke - `Asset modules` III. - Szöveges állományok kezelése
- Lehetőségünk van fájlokat kezelni úgy, hogy tartalmukat egyszerűen string-ként beolvassuk 
- Legyen egy TXT-fájlunk az `assets/raw` mappában `title.txt` névvel, a tartalma csak ennyi: `Monster Cards`
- Használjuk fel ennek a fájlnak a tartalmát, és ezt jelenítsük meg a címsorban
- Importáljuk a `monsterCardsList.js`-be a TXT-fájlt:
  
  ```javascript
    import title from '../assets/raw/title.txt'
  ```

- Ezután módosítsuk a `monsterCardsList.js` template-jében a címsort:

  ```javascript
  <h1 class="monster-cards__title">
    <img class="monster-cards__title-icon" src="${monsterIcon}" alt="Monster Icon" />
    ${title}
    <img class="monster-cards__title-icon" src="${monsterIcon}" alt="Monster Icon" />
  </h1>
  ```

- Módosítsuk a konfigurációs állományt, adjuk hozzá a következőt:

  ```javascript
    {
      test: /\.txt$/i,
      type: 'asset/source'
    }
  ``` 

- A címsorban így a TXT-fájl tartalma jelenik meg, tehát nem a beégetett szöveg

**Linkek** :
- [Asset Modules](https://webpack.js.org/guides/asset-modules/#root)
