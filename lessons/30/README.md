# 30. lecke - CSS-háttérképek és az `assetModuleFilename` beállítás
- Az `Asset Modules` segítségével mind a JS-, mind a CSS-fájlokban használt képeket kezeli a webpack
- Módosítsuk a `body` CSS-tulajdonságait:

  ```css
  body {
    background: url("../img/background.jpg");
    background-size: cover;
    font-family: Georgia, "Times New Roman", Times, serif;
    margin: 0;
  }
  ```

- Semmilyen plusz konfigurációra nincs szükségünk
- Mivel a `.monster`-nél megváltoztattuk a `margin` értékeit, így még korrigálni kell a szélességeket, tegyük is meg:

  ```css
  .monster {
    background: #fff;
    border-radius: 0.5rem;
    box-shadow:
      0 1px 2px rgb(0 0 0 / 30%),
      0 2px 4px rgb(0 0 0 / 20%),
      0 4px 8px rgb(0 0 0 / 10%);
    color: #fff;
    margin: 0.5rem;
    padding: 1rem;
    width: calc(100% - 1rem);
  }

  @media (min-width: 40em) {
    .monster {
      width: calc(50% - 1rem);
    }
  }

  @media (min-width: 80em) {
    .monster {
      width: calc(25% - 1rem);
    }
  }
  ```

- Az asset-fájlok kimeneti neveit konfigurálhatjuk külön-külön is minden egyes rule-nál a `generator`, `filename` beállítás segítségével, azonban egyszerűbb ezt globálisan kezelni. Adjuk hozzá az `output`hoz a következő bejegyzést:

  ```javascript
  assetModuleFilename: '[name].[contenthash][ext]'
  ```

**Linkek** :
- [Custom output filename](https://webpack.js.org/guides/asset-modules/#custom-output-filename)
- [assetModuleFilename](https://webpack.js.org/configuration/output/#outputassetmodulefilename)
