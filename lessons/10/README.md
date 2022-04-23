# 10. lecke - `Loader`-ök, a `babel-loader` bekötése 
- Elképzelhető, hogy olyan JavaScript nyelvi elemeket is használunk, amelyek valamilyen böngészőben - amelyre az alkalmazást fejlesztjük - nem támogatottak
- Ennek a problémának a kiküszöbölésére használjuk a `Babel`t
- Telepítsük a `babel-loader`, `@babel/core`, `@babel/preset-env` csomagokat az alábbi paranccsal: 
  `npm install -D babel-loader @babel/core @babel/preset-env`
- Egészítsük ki a webpack-konfigurációt:
  
  ```javascript
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }
    ]
  }
  ```

- Ha nem jó vagy nem elég az alapértelmezett `Babel`-konfiguráció, vagy nem akarom a webpack konfigurációján belül tárolni azt, akkor érdemes egy `babel.config.js` fájlba kiszervezi a beállításokat
- Hozzuk létre a `babel.config.js` fájlt:
- 
  ```javascript
  module.exports = {
    presets: ['@babel/preset-env']
  }
  ```

- Így törölhetjük a webpack-konfigurációból az `options` részt:
 
  ```javascript
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
  ```
 
**Linkek** :
- [Loaders](https://webpack.js.org/loaders/#root)
- [babel-loader](https://webpack.js.org/loaders/babel-loader/#root)
- [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)