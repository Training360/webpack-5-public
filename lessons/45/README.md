# 45. lecke - Statikus állományok életszerű helyzetben
- A `user` mappában lévő statikus állományok helyett az oldalnál használt favicon képeket fogom a `CopyWebpackPlugin` segítségével átmásolni a `public` mappába
- A `user` mappát ki is törölhetjük
- A favicon képek az `assets`-en belül a `favico` mappában vannak
- Hogy az oldalon meg is jelenjenek, egészítsük ki a `template` mappában lévő `index.html` állományt:

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
        Webpack 5
      </title>
      <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>

    <body></body>

  </html>
  ```

- Ezután már csak a `webpack.config.js`-t kell módosítani
- Át kell írni a `CopyWebpackPlugin`nál a `from`nál az elérési útvonalat erre: `'./src/assets/favico/**/*'`
- Ezzel build során a faviconok átmásolódnak a public-ba, a webpack nem fogja verziózni, és semmilyen műveletet nem hajt végre a fájlokon 

**Linkek** :
- [Favicon generator](https://realfavicongenerator.net/)