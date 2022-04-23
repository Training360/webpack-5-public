# 21. lecke - A development és a production környezetek külön konfigurációs fájllal II.
- Finomhangoljuk a `dev` és a `prod` környezet konfigurációit
- Módosítsuk az alábbi két tulajdonságot a `webpack.common.js` fájlban:
    
  ```javascript
  output: {
    path: resolve(__dirname, 'public'),
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 1000
  }
  ```

- Módosítsuk az `output`ot a `webpack.dev.js` fájlban:

  ```javascript
    output: {
    filename: '[name].budle.js',
  }
  ```

- Valamint a `webpack.prod.js` fájlban is, és innen töröljük a `watchOptions`-t:
  
  ```javascript
   output: {
    filname: '[name].[contenthash].js'
    clean: true
  },
  ```