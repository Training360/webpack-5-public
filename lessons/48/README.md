# 48. lecke - Több belépési pont megadása
- Nem csak egy, hanem több belépési pontot is megadhatunk 
- Hozzunk létre egy új belépési pontot, alakítsuk át az `entry`-t a következőképp:
  
  ```javascript  
  entry: {
    main: getFullPath('src/main.js'),
    about: getFullPath('src/about.js')
  }
  ```

- A webpack így nemcsak egy `main.js`, hanem egy `about.js` fájlt is keresni fog
- Készítsük el az `about.js` fájlt a `main.js` mellett, tartalma nincs, egyelőre még üres
- A `components` mappában hozzunk létre egy `aboutPage.js` fájlt az alábbi tartalommal:

  ```javascript
  import { library, dom } from '@fortawesome/fontawesome-svg-core'
  import { faDumbbell, faHeart, faGem } from '@fortawesome/free-solid-svg-icons'

  library.add(faDumbbell, faHeart, faGem)
  dom.watch()

  const aboutPage = {
    selector: 'body',
    position: 'beforeend',
    template: `
    <div class="about">
      <h1 class="about__name">
        GOD
      </h1>
      <div class="about__footer">
        <div class="about__attribute">
          <span class="fas fa-dumbbell about__attribute-icon"></span>
          <span class="about__attribute-value">Infinity</span>
        </div>
        <div class="about__attribute">
          <span class="fas fa-heart about__attribute-icon"></span>
          <span class="about__attribute-value">Infinity</span>
        </div>
        <div class="about__attribute">
          <span class="fas fa-gem about__attribute-icon"></span>
          <span class="about__attribute-value">Infinity</span>
        </div>
      </div>
    </div>
    `
  }

  export default aboutPage
  ```

- Most importálom a `aboutPage`-et, és a `createComponent`et az `about.js`-be, és átadom a `createComponent`nek:

  ```javascript
  import aboutPage from './components/aboutPage'
  import createComponent from './utils/createComponent'

  createComponent(aboutPage)
  ```

- Ha lebuildeljük az alkalmazást, akkor láthatjuk, hogy a `public` mappában megjelenik a `main.js` mellett az `about.js` is, természetesen a source map-pel együtt
- Jelen esetben mind a két szkript be van linkelve az `index.html`-be, azaz mind a kettő által előállított tartalom egyszerre fog megjelenni a HTML-ben, hiszen nincs semmilyen szkript, amely a routingot kezelné, azaz milyen URL esetében melyik szkript töltődjön be

**Linkek** :
- [nodemon](https://www.npmjs.com/package/nodemon)
  