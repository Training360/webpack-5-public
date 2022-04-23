# 1. lecke - Webpack-projekt előkészítése
- Hozzunk létre egy új mappát `webpack-5` néven, és nyissuk meg VSCode-ban
- Inicializáljunk egy új projektet az alábbi paranccsal: `npm init -y`
- Adjuk hozzá a következőt a `package.json` fájlhoz: `"private":true`
- Telepítsük a `webpack` és a `webpack-cli` csomagokat: `npm i webpack webpack-cli -D`
- Hozzunk létre egy `src` mappát a gyökérben
- Hozzunk létre egy `index.js` fájlt az `src` mappán belül az alábbi tartalommal:
  
  ```javascript
  const message = 'Webpack works'
  console.log(message)
  ```

- Adjuk hozzá a `package.json` fájlba a `scripts` részhez a következőt: `"build": "webpack"`
- Futtassuk a következő parancsot: `npm run build`
- A `warning`-gal egyelőre nem kell foglalkozni
- A `dist` mappában megjelenik az optimalizált `main.js` állomány
- Hozzunk létre egy `index.html` állományt a `dist` mappán belül
- Linkeljük be a `main.js` fájlt
- Ellenőrizzük a böngészőben a munkánkat a `Live Server` VSCode extension használatával
- Hozzuk létre a gyökérben a `.gitignore` fájlt
- Adjuk a `.gitignore`-hoz a következőket

  ```
    node_modules
    dist
  ```

- Készítsük el a `README.md` fájlt
- Inicializáljunk egy új Git repository-t: `git init`
- Kommitoljuk: `git commit -m "01-lesson"`

**Linkek:**   
- [Webpack](https://webpack.js.org/)
- [npm CLI](https://docs.npmjs.com/cli/v8)
- [Git](https://git-scm.com/)
- [Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)