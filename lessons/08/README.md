# 8. lecke - A `createComponent` függvény megírása
- Hozzunk létre egy `utils` mappát az `src` mappában
- Hozzunk létre egy `createComponent.js` fájlt a `utils` mappában
- Ez a függvény paraméterként egy komponenst vár, és annak mindhárom tulajdonságát kiszedi egy-egy változóba
- Az adott komponens `template`-jét elhelyezi a DOM-ban a megfelelő helyen
  
  ```javascript
  const createComponent = ({ selector, position, template }) =>
    document.querySelector(selector).insertAdjacentHTML(position, template)

  export default createComponent
  ```

- Módosítsuk a `main.js` fájl tartalmát:

  ```javascript
  import createComponent from './utils/createComponents'
  import monsterCardsList from './components/monsterCardsList'

  createComponent(monsterCardsList)
  ```

- Futtassuk a `dev` szkriptet, ellenőrizzük a munkánkat