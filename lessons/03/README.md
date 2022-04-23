# 3. lecke - A webpack DevServer használata 
- Telepítsük a `webpack-dev-server` csomagot: `npm i webpack-dev-server -D`
- Adjuk hozzá a webpack-konfigurációhoz a következőt:

  ```javascript
   devServer: {
    open: true
  }
  ```

- Módosítsuk a `dev` szkriptet a következőre: `"dev": "webpack server"`
- Módosítsuk a `main.js` tartalmát a következőre:
  
  ```javascript
  const message = 'Webpack works'
  const h1 = document.createElement('h1')
  h1.textContent = message
  document.body.appendChild(h1)
  ```  

- Futtassuk a `dev` szkriptet
- Nézzük meg a munkánkat a böngészőben
- Írjuk át a `message` változót
- Nézzük meg a újra munkánkat a böngészőben; látható, hogy azonnal frissíti a böngészőben a tartalmat
- Módosítsuk a `devServer` portszámát:

  ```javascript
   devServer: {
    open: true,
    port: 5055
  }
  ```

- Módosítsuk az `index.html` fájl `title` tagjeiben lévő szöveget Webpack-re
- Commitoljunk minden lecke után

**Linkek** :
- [DevServer](https://webpack.js.org/configuration/dev-server/#root)
- [webpack-dev-server API](https://webpack.js.org/api/webpack-dev-server/#root)