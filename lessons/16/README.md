# 16. lecke - A `HtmlWebpackPlugin` konfigurálása, saját template használata
- A `HtmlWebpackPlugin` segítségével egy előre megírt saját template-et is felhasználhatunk, amely alapján a webpack a build során legenerálja a HTML-fájlt
- Hozzuk létre az alábbi útvonalon a fájlt az `src` mappán belül : `assets/template/index.html`

  ```html
  <!DOCTYPE html>
  <html lang="hu">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>
        Webpack 5
      </title>
    </head>

    <body>

    </body>

  </html>
  ```

- Ezután módosítsuk a `HtmlWebpackPlugin` bejegyzést
- Adjuk meg template-nek az elkészített fájl útvonalát
- Hogy ne legyen minify-olva a HTML, ezt a `minify` option false értékre állításával kikapcsoljuk
  
  ```javascript
    new HtmlWebpackPlugin({
      template: './src/assets/template/index.html',
      minify: 'false',
    })
  ```

- Most már az általunk megadott fájl lesz használva, és ebbe kerül a JavaScript-fájl belinkelésre
- A template-nek változókat is át tudunk adni
- Módosítsuk a konfigurációt:

  ```javascript
    new HtmlWebpackPlugin({
      template: './src/assets/template/index.html',
      minify: 'false',
      title: 'Webpack 5 tutorial',
      lang: 'hu',
    })
  ```

- Módosítsuk a template-et:

  ```html
  <!DOCTYPE html>
  <html lang="<%= htmlWebpackPlugin.options.lang %>">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>
        <%= htmlWebpackPlugin.options.title %>
      </title>
    </head>

    <body>

    </body>

  </html>

  ```

- Buildeléskor a megadott értékek kerülnek a template-be

**Linkek** :
- [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin#options)