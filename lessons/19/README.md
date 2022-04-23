# 19. lecke - CSS-fájlba mentés a `MiniCssExtractPlugin` használatával
- Ahhoz, hogy a CSS külön fájlba kerüljön, egy újabb pluginra van szükségünk, a `MiniCssExtractPlugin`ra
- Telepítsük az alábbi paranccsal: `npm i -D mini-css-extract-plugin`

- Importáljuk be a konfigurációs fájlba: 

  ```javascript
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");
  ```
  
- Majd módosítsuk a konfigurációt a `css` rule-nál
- A `style-loader`-t lecseréljük:
   
  ```javascript
    use: [
      MiniCssExtractPlugin.loader, 
      'css-loader'
    ],
  ```

- Adjuk hozzá a pluginokhoz is:

  ```javascript
    new MiniCssExtractPlugin();
  ```

- Ezután buildelés után láthatjuk, hogy létrejött a CSS-fájl, és ez be van linkelve a HTML-be
- Optionnek adjuk meg a `MiniCssExtractPlugin` esetében is a következőt: 

  ```javascript
    {
      filename: 'style.[contenthash].css'
     }
  ```

- A fájlnév első része így statikus lesz, és a gyorsítótárazást is megvalósítottuk

**Linkek** :
- [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/#root)
