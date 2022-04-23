# 15. lecke - A `HtmlWebpackPlugin` és a `clean` opció
- Hogy ne kelljen az `index.html` fájlban mindig átírnunk a linket, telepítsük a `HtmlWebpackPlugin`t: `npm i -D html-webpack-plugin`
- Importáljuk a `webpack.config.js` fájlba: 

  ```javascript
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  ```

- Adjunk a konfigurációhoz egy új bejegyzést a `module` után:

  ```javascript
  plugins: [
    new HtmlWebpackPlugin()
  ], 
  ``` 

- Így többé már nem kell a HTML-fájllal nekünk foglalkozni
- Hogy ne maradjon meg az összes buildelt JS-fájl, adjuk hozzá a következőt az `output`hoz: `clean: true`, és így minden egyes buildelés előtt az output könyvtár nem használt régi verziójú fájljai törlődnek

**Linkek** :
- [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/#root)
- [Output clean](https://webpack.js.org/configuration/output/#outputclean)