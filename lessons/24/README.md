# 24. lecke - A `Stylelint` használata a CSS-kódminőség javítása érdekében
- Ha a JS-kód minőségére odafigyelünk, akkor a CSS-kódokat se hagyjuk ki
- Használjuk a `StyleLintPlugin`t is
- Ehhez tegyük a következőket:
  - Telepítsük a `Stylelint` official VSCode plugint
  - Telepítsük a következő `stylelint` csomagot: `npm i -D stylelint`
  - Telepítsük a `stylelint-config-standard` csomagot is, amely tartalmaz egy kész konfigurációt: `npm i -D stylelint-config-standard`
- Telepítsünk még egy csomagot, amely a CSS property-k sorrendjét figyeli: `npm i -D stylelint-order`
- Egy saját mintát is kell készíteni, hogy a linter ne jelezzen hibát a `BEM` névadási konvenció miatt 
- Hozzunk létre a gyökérben egy `stylelint.config.js` fájlt:
  
  ```javascript
  module.exports = {
    extends: 'stylelint-config-standard',
    plugins: [
      'stylelint-order'
    ],
    rules: {
      'order/properties-alphabetical-order': true,
      'selector-class-pattern': '^.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+)?$'
    }
  }
  ```

- Telepítsük a `StyleLint` webpack plugint: `npm i eslint-webpack-plugin -D`
- Importáljuk a plugint:
  
  ```javascript
    const StylelintPlugin = require('stylelint-webpack-plugin')
  ```

- Adjuk hozzá a pluginokhoz a következőt:
  
  ```javascript
     new StylelintPlugin({
      files: resolve(__dirname, 'src/assets/**/*.css')
    }),
  ```

- Build során a konzolon is megjelennek a hibák, amelyeket javítsunk is minden esetben
- Ha szeretnénk, hogy a CSS-fájlok mentésekor automatikusan itt is javítva legyenek a linterhibák, akkor a VSCode-ban a `settings.json` fájlban ezt megadhatjuk
- Nálam a két linterrel kapcsolatos beállítás a következő (ez a telepített pluginok miatt jelentősen eltérő lehet másoknál):
  
  ```json
  "editor.formatOnSave": false,
  "editor.formatOnPaste": false,
  "javascript.validate.enable": false,
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
    "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    "typescript",
    "typescriptreact"
  ],
  "stylelint.validate": [
    "css",
    "less",
    "postcss",
    "scss",
    "sss",
    "sass"
  ],
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false,
  ```

**ERRATA**:   
A `StyleLint` plugin konfigurációnál elírás történt: `fileas` szerepel `files` helyett!  

**Linkek** :
- [StylelintWebpackPlugin](https://webpack.js.org/plugins/stylelint-webpack-plugin/#root)
- [StyleLint](https://stylelint.io/)
- [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard)
- [stylelint-corder](https://www.npmjs.com/package/stylelint-order)