# 37. lecke - Képek optimalizálása az `imagemin`nel
- Nem csak a JS- és CSS-fájlokat lehet minify-olni, optimalizálni, hanem a képeket is
- Ehhez az `imagemin` vagy a `squoosh` plugin is használható  
- A leckében az `imagemin`t fogjuk használni
- Telepítsük fel a szükséges függőségeket: `npm i -D image-minimizer-webpack-plugin imagemin`
- A veszteségmentes tömörítéshez még az alábbi pluginokra van szükségünk, hogy a különböző fájlformátumokat tudjuk kezelni: `npm i -D imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo` 
- Importáljuk az `ImageMinimizerPlugin`t a `webpack.config.js` fájlba:

  ```javascript
  const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
  ```

- Adjuk hozzá az `optimization` részhez, hogy az `img` mappa összes `jpeg`, `png`, `gif` és `svg` állománya optimalizálva legyen, és a megfelelő pluginokat használja:

  ```javascript
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          include: './src/assets/img/*',
          plugins: ['gifsicle', 'optipng', 'svgo', 'jpegtran']
        }
      }
    })
  ```

- A build időtartamának jelentős megnövekedésére számíthatunk
- Build után vessük össze az `src` és a `public` mappában látható képek méretét

**Linkek** 
- [ImageMinimizerWebpackPlugin](https://webpack.js.org/plugins/image-minimizer-webpack-plugin/#minimizer)
