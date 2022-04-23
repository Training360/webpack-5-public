# 18. lecke - A CSS-fájlok feldolgozása a `style-loader` és a `css-loader` segítségével
- Telepítsünk két `loader`-t a CSS-fájlok kezeléséhez: `npm i style-loader css-loader -D`
- Adjunk hozzá egy új szabályt a konfigurációhoz a `rules` részhez:
 
  ```javascript 
     {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader'
        ],
      },
  ```

- A `loader`-ök jobbról balra, avagy alulról felfelé egymás után futnak le 
- A `css-loader` összegyűjti a CSS-fájlokat, amiket importálunk, betölti őket, és magát a CSS-kódot adja vissza
- A `style-loader` fogja ezeket a CSS-kódokat, és hozzáadja őket a DOM-hoz
- Importáljuk a `style.css` fájlt a `main.js`-be

  ```javascript
  import './assets/css/style.css'
  ```

- A `stlye.css` fájlhoz adjuk hozzá a következőt:
  
  ```css
  * {
    box-sizing: border-box;
  }

  
  .monster__name {
    margin:0;
  }
  ```

- Valamint módosítsuk a `.monster__header` tulajdonságait: 

  ```css
  .monster__header {
    background: #880808;
    box-shadow:
    0 1px 2px rgb(255 255 255 / 30%),
    0 2px 4px rgb(255 255 255  / 20%),
    0 4px 8px rgb(255 255 255  / 10%);
    filter: saturate(75%);
    padding: 1rem;
    text-align: center;
  }
  ```

**Linkek** :
- [style-loader](https://webpack.js.org/loaders/style-loader/#root)
- [css-loader](https://webpack.js.org/loaders/css-loader/#root)