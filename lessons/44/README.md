# 44. lecke - Linterek használata szkriptekkel
- Ugyan a webpackből eltávolítottuk a lintereket, ez nem azt jelenti, hogy nem fogjuk használni őket
- Hozzunk létre két új szkriptet a `package.json` fájlban, egyet az ESLintnek, egyet a Stylelintnek:
  - `"lint:js": "npx eslint ./src",`
  - `"lint:css": "npx stylelint ./src/**/*.{css,scss,sass,sss}"`
- Most már az `npm run lint:js` paranccsal le tudjuk futtatni az `eslint`et, az `npm run lint:stylelint` paranccsal pedig a `stylelint`et
- Amennyiben szeretnének egy parancs segítségével egyszerre futtatni a két szkriptet, akkor telepítsük fel az `npm-run-all` csomagot: `npm i -D npm-run-all`
- Majd írjunk még egy szkriptet a `package.json` fájlba, amely az összes linter kezdetű szkriptet egyszerre le fogja futtatni: ` "lint": "npm-run-all lint:*"`
- Most már az `npm run lint` paranccsal egyszerre fog futni mind a két lint szkript

**Linkek** :
- [npm-run-all](https://www.npmjs.com/package/npm-run-all)