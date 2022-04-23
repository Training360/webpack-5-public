# 32. lecke - Saját betűtípusok használata
- A `fonts` mappában van két betűtípus-fájl, használjuk fel őket
- Egészítsük ki a `style.css` fájlt. Adjunk meg kettő `@font-face`-t, egyet a regular, egyet a bold szöveghez, és használjuk is fel a `body`-nál:

  ```css
  @font-face {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    src: url("../fonts/Roboto-Regular.ttf") format("ttf");
  }

  @font-face {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    src: url("../fonts/Roboto-Bold.ttf") format("ttf");
  }

  body {
    background: url("../img/background.jpg");
    background-size: cover;
    font-family: Roboto, Arial, sans-serif;
    margin: 0;
  }
  ```

- A `fonts` mappában lévő fájlokat is az Asset Modules segítségével akarom kezelni
- Egészítsük ki a `webpack.config.js`-t egy újabb rule-lal:
  
  ```javascript
    {
      test: /\.(woff(2)|eot|ttf|otf|svg)$/i,
      type: 'asset/resource',
      include: [resolve(__dirname, 'src/assets/fonts')]
    },
  ```