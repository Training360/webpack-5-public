# 23. lecke - Az `ESLint` használata a JavaScript-kódminőség javítása érdekében
- A JavaScript-kódunk minőségét ellenőrizhetjük az `ESLint` plugin segítségével
- Ehhez tegyük a következőket:
- Telepítsük az `ESLint` VSCode plugint
- Inicializáljuk az `ESLint`et: `npx eslint --init`:
  - **How would you like to use ESLint?**
    - _To check syntax, find problems, and enforce code style_
  - **What type of modules does your project use?**
    - _JavaScript modules (import/export)_
  - **Which framework does your project use?**
    - _None of these_
  - **Does your project use TypeScript?**
    - _No_
  - **Where does your code run?**
    - _Browser_
  - **How would you like to define a style for your project?**
    - _Use a popular style guide_
    - _Standard: https://github.com/standard/standard_
  - **What format do you want your config file to be in?**
    - _JavaScript_ 
  - **Would you like to install them now with npm?**
    - _Yes_
  
- Ha szeretnénk, hogy a JS-kódban lévő linterhibák automatikusan ki legyenek javítva mentéskor, akkor a VSCode-ban az ESLint `fix on save` beállítása legyen `on`ra állítva  
- Telepítsük az `ESLintPlugin`t: `npm i -D eslint-webpack-plugin`
- Importáljuk a plugint:
  
  ```javascript
    const ESLintPlugin = require('eslint-webpack-plugin')
  ```

- Adjuk hozzá a pluginokhoz a következőt:
  
  ```javascript
    new ESLintPlugin()
  ```

- Most már meg fognak jelenni a linterhibák a konzolon a build során; ha találunk ilyeneket, javítsuk is őket

**Linkek** :
- [EslintWebpackPlugin](https://webpack.js.org/plugins/eslint-webpack-plugin/#root)
- [ESLint](https://eslint.org/)
- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
- [StandardJS](https://standardjs.com/)