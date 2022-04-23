# 7. lecke - A `monsterCardsList` komponens elkészítése
- Hozzunk létre egy `monsterCardsList.js` fájlt a `components` mappában
- Ez a komponens három tulajdonságot tartalmaz:
  - `selector`: melyik elemhez akarjuk hozzáadni a `template`-et
  - `position`: az adott szelektor elejére vagy végére akarjuk-e hozzáfűzni a `template`-et, vagy esetleg elé, vagy utána
  - `template`: maga a HTML `template`
- A `monsterCardsList` által előállított `template` az összes szörny adatát tartalmazni fogja: 
  
  ```javascript
  import monsters from './monsters.js'
  import monsterCardFactory from './monsterCardFactory.js'

  const monsterCardsList = {
    selector: 'body',
    position: 'beforeend',
    template: `
      <div class="monster-cards">
        <h1 class="monster-cards__title">Monster Cards</h1>
        <div class="monster-cards__list">
          ${monsters.map(monsterCardFactory).join('')}
        </div>
      </div>
    `
  }

  export default monsterCardsList
  ```