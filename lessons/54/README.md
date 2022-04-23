# 54. lecke - A `sass-loader` SASS-/SCSS-fájlok kezelésére
- Szinte minden nagyobb projektnél használunk valamilyen CSS preprocesszort
- Átalakítottam az alkalmazást, és SCSS-t használok CSS helyett
- Ennek megfelelően a `main.js` entry point is módosulni fog, hiszen már nem a `style.css`, hanem a `style.scss` fájlt kell beimportálnom: 

  ```javascript
  import './assets/scss/style.scss'
  ```

- A probléma most az, hogy a webpack nem tudja kezelni az `SCSS`-fájlokat, hiszen egy loader sincs hozzárendelve
- Telepítsük fel a szükséges loader-t, és a `sass` modult is: `npm i -D sass-loader sass`
- Módosítsuk a `css` rule webpack configját, hogy a `sass-loader` is használva legyen, és az alábbi fájlkiterjesztéseket is kezelje:
  - css
  - scss
  - sass
  - sss

  ``` javascript
  {
    test: /\.(s[ac]?|c)ss$/,
    use: [
      isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ]
  }
  ```
**Linkek** :
- [SASS](https://sass-lang.com/)
- [sass package](https://www.npmjs.com/package/sass)
- [sass-loader](https://webpack.js.org/loaders/sass-loader/)

