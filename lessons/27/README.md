# 27. lecke - `Asset Modules` I. - Képek kezelése
- Webpack asset-nek, `Asset Modules`-nak hívják azokat a modulokat, amelyek nem igénylik külön loader telepítését és konfigurálását
- Az asseteknek négy típusát különböztetik meg:
  - `asset/resource`: készít egy fájlt, és exportálja az URL-t
  - `asset/inline`: exportálja az URI-t
  - `asset/source`: exportálja a forráskódot
  - `asset`: automatikusan választ az `asset/resource` és az `asset/inline` közül
- A `.monster__avatar`t felvesszük a CSS-be is:

  ```css
  .monster__avatar {
    box-shadow:
      0 1px 2px rgb(255 255 255 / 30%),
      0 2px 4px rgb(255 255 255  / 20%),
      0 4px 8px rgb(255 255 255  / 10%);
    filter: sepia(100%) hue-rotate(-50deg);
    margin: 1rem 0 0;
    width: 100%;
  }
  ```

- Ahhoz, hogy a képek build során külön fájlba kerüljenek, a következőt adjuk hozzá a `rules`-hoz:  

  ```javascript
  {
    test: /\.(png|jpe?g|gif|svg|webp)$/i,
    type: 'asset/resource'
  }
  ```

- A CSS-t kiegészítjük:
  
  ```css
    .monster__name {
      margin:0;
    }
  ```

- Build után a képek megjelennek a `public` mappában  
  
**ERRATA**:   
A videóban `/\.(png|jp(e)g|gif|svg|webp)$/i` szerepel, azonban ez helyesen: `/\.(png|jpe?g|gif|svg|webp)$/i`  

**Linkek** :
- [Asset Modules](https://webpack.js.org/guides/asset-modules/#root)
