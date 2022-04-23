# 50. lecke - `Chunk`ok és a `SplitChunksPlugin`
- A `chunk`, azaz darab nem más, mint például az entry point esetében (entry chunk) a `main` entry, azaz `main` chunk, amely tartalmazza a modul összes függőségét, az összes beimportált fájlt
- A webpack optimalizálja a kódot a build során
- Automatikusan eltávolítja a nem használt kódokat, ezt nevezzük `tree shaking`-nek 
- Ezen kívül a kódot fel tudja osztani több részre, azaz egyes esetekben darabolja a nagy méretű fájlokat több kisebbre, így párhuzamosítva ezek betöltődését
- Jelenleg ez a két szkript mind a `main`, mind az `about` entry point függőségeiben szerepel:
  
  ```javascript
  import { library, dom } from '@fortawesome/fontawesome-svg-core'
  import { faDumbbell, faHeart, faGem } from '@fortawesome/free-solid-svg-icons'
  ```

- Ez teljesen felesleges, hiszen így mind a 2 entry méretét megnöveli; miért szerepelne egy kódrészlet duplikálva?  
- Adjuk meg az `optimization` résznél a következőt: 

  ```javascript
  splitChunks: {
    chunks: 'all'
  }
  ```

- Ezzel arra utasítjuk a webpack-et, hogy mind szinkron, mind aszinkron betöltés esetén szedje ki külön fájlba a közös kódrészleteket
- Build során megjelenik egy új állomány, amely valójában nem más, mint a `main` és az `about` entry-k közös kódjai, azaz amelyek mind a kettőben szerepelnek; tehát ez a két szkript:

  ```javascript
  import { library, dom } from '@fortawesome/fontawesome-svg-core'
  import { faDumbbell, faHeart, faGem } from '@fortawesome/free-solid-svg-icons'
  ```

- Ezzel a build során létrejött `main.js` és az `about.js` mérete is csökkent, hiszen a közös kód kikerült egy külön fájlba, ez a közös kódrészeket tartalmazó fájl pedig automatikusan belinkelésre került mind a `main.js`-be, mind az `about.js`-be

**Linkek** :
- [Chunks](https://webpack.js.org/concepts/under-the-hood/#chunks)
- [Code Spliting](https://webpack.js.org/guides/code-splitting/#root)
- [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/#root)
- [optimization.splitChunks](https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks)
