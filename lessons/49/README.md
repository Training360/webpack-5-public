# 49. lecke - MPA alkalmazás
- Egy MPA - Multi Page Application - esetében nem egy, hanem több belépési pontunk lesz, és több kimeneti HTML-állományunk is
- Két belépési pontunk már van
- Érjük el azt, hogy mindegyik belépési ponthoz egy külön HTML-állomány is generálódjon a build során
- A `template` mappában ott az `index.html`, amelyet a `main.js` entry point-nál használunk fel
- Ugyan felhasználhatjuk ezt a template-et az `about.js` esetében is, azonban én most egy külön fájlt készítek, amelyet a `HtmlWebpackPlugin`nal fel is fogok használni
- A `template` mappában hozzuk létre az `about.html` fájlt az alábbi tartalommal:
  
  ```html
  <!doctype html>
  <html lang="hu">

    <head>
      <meta charset="utf-8">
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      <link rel="manifest" href="/site.webmanifest">
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
      <meta name="msapplication-TileColor" content="#da532c">
      <meta name="theme-color" content="#ffffff">
      <title>
        About
      </title>
      <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>

    <body></body>

  </html>
  ```

- Módosítsuk a `webpack.config.js`-t, egész pontosan kettő példány legyen belőle
- Az egyiknél a `chunk`, azaz darab - amely jelen esetben nem mást, mint a belépési pontot jelenti - legyen `main`, a másiknál `about`
- Ugyanígy az egyiknél használjuk a már meglévő `index.html` fájlt sablonként, a másiknál pedig majd az `about.html`-t fogjuk
- Ugyanígy megadjuk azt is, mi legyen a kimeneti fájlok neve:

  ```javascript
    new HtmlWebpackPlugin({
      template: './src/assets/template/index.html',
      minify: false,
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/template/about.html',
      minify: false,
      filename: 'about.html',
      chunks: ['about']
    }),
  ```

- Most már a build után a `public` mappában mind az `index.html`, mind az `about.html` meg fog jelenni, és mindegyikben csak az adott entry point szkriptje lesz belinkeve   
- Böngészőben leellenőrizhetjük a munkát, és ha kell, az egyik, illetve a másik fáljban akár hivatkozásokat is elhelyezhetünk egymásra

**Linkek** :
- [Multi-Page Application](https://webpack.js.org/concepts/entry-points/#multi-page-application)
