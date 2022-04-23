# 35. lecke - A `TerserPlugin` használata a JS-kód minify-olásához
- A webpack alapértelmezetten használja a Terser plugint, azonban ha mi magunk szeretnénk konfigurálni, ahhoz szükséges külön telepíteni: `npm i -D terser-webpack-plugin`
- Importálom a `webpack.config.js` fájlba:

  ```javascript
  const TerserPlugin = require('terser-webpack-plugin')
  ```

- Majd módosítom a konfigot. Felveszek egy új bejegyzést: `optimization`
- Valamint beállítom, hogy az alapértelmezett helyett milyen minimizer-t/minimizer-öket akarok használni
- A `TerserPlugin` opcióinál beállítom, hogy a kommenteket ne formázza, és ne szedje ki külön fájlba:

  ```javascript
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false
          }
        },
        extractComments: false
      }),
    ]
  },
  ```

**Megjegyzés:**   
A Font Awesome licenc TXT-fájljának az eltüntetése bemutatásra kerül, azonban éles kódban mindig meg kell hagyni a licencinformációkat, különben szerzői jogot sértünk! 

**Linkek** 
- [TerserWebpackPlugin](https://webpack.js.org/plugins/terser-webpack-plugin/#root)
