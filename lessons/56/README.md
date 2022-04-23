# 56. lecke - A `TS-`, `JSX-`, `TSX`-fájlok kezelése
- Ha nem JavaScriptben írjuk a projektünket, hanem akár TypeScriptet, JSX-et vagy TSX-et használunk, mindig csak néhány apró módosításra van szükségünk
- Első lépésként a `webpack.config.js`-be a legfelsőbb szintű tulajdonságok közé felveszem a következőt: 

  ```javascript
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
  }
  ```

- Ezzel konfiguráltuk, hogy ha egy fájlt importálunk, de ugyanolyan névvel, csak más kiterjesztéssel több fájl is van, akkor ezeknek a feloldása milyen sorrendben történjen; azaz ha nem tesszük ki a kiterjesztést, akkor először megnézi, van-e JS-kiterjesztéssel ilyen nevű fájl, ha van, importálja, és nem is vizsgálja tovább a többi kiterjesztést. Ha nincs, akkor nézi tovább a többit
- Újabb loader-re nincs szükségünk
- A TS-fájlok kezelésére ugyan választhatjuk a `ts-loader`-t, de ez lassabb, mint a `babel-loader`, mert a `babel-loader` nem végez típusellenőrzést, illetve a `const enum`-ot nem támogatja

- A TS-fájlok kezeléséhez csak konfigurálnunk kell a `Babel`t, a TypeScriptet és a Lintert:
  - [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)
  - [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
  - [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

- JSX-fájlok esetén szintén hasonló, a `Babel`t és a Lintert kell konfigurálni:
  - [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)
  - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)

- TSX esetén pedig a `Babel`, a `Linter` és a TypeScript configon túl még szükségünk lesz a következőkre is:
  - [@types/react](https://www.npmjs.com/package/@types/react)
  - [@types/react-dom](https://www.npmjs.com/package/@types/react-dom)

- A dokumentációkban megtalálunk mindent, ami ehhez szükséges


