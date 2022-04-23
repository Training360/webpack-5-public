# 40. lecke - A bundle méretének optimalizálása
- A fő problémát a Font Awesome `solid.min.js` okozza
- Feleslegesen húzzuk be az egész fájlt, hiszen csak 3 darab ikont használunk
- Mivel a fájl egy darab függvény, a webpack nem tud mit optimalizálni rajta
- Cseréljük le a csomagot egy másikra
- Töröljük a csomagot: `npm uninstall -D @fortawesome/fontawesome-free`
- Telepítsük helyette a következőket: `npm i -D @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons`
- Így lehetőségünk nyílik csak azokat az ikonokat importálni, amelyeket ténylegesen használni is fogunk
- Módosítsuk a `monsterCardFactory.js` elejét:
  
  ```javascript
  import { library, dom } from '@fortawesome/fontawesome-svg-core'
  import { faDumbbell, faHeart, faGem } from '@fortawesome/free-solid-svg-icons'

  library.add(faDumbbell, faHeart, faGem)
  dom.watch()
  ```

- Buildeljük újra az alkalmazást, és nézzük meg a bundle összetételét vizuálisan
- 1,04 MB helyett már csak 64 KB a parse-olt méret
