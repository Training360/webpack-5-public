# 28. lecke - `Asset modules` II. - Képek base64-kódolással
- Amennyiben kis méretű képekkel, esetleg ikonokkal dolgozunk, akkor számításba vehetjük az inline assetek használatát. Ebben az esetben a kép base64-es kódolással fog bekerülni a kódba, és nem jön létre a build során a fájl
- Az `ico` mappában lévő ikont használjuk fel, egészítsük ki a `monsterCardsList.js` fájlt:

  ```javascript
  import monsters from './monsters'
  import monsterCardFactory from './monsterCardFactory'
  import monsterIcon from '../assets/ico/monster-icon.svg'

  const monsterCardsList = {
    selector: 'body',
    position: 'beforeend',
    template: `
    <div class="monster-cards">
      <h1 class="monster-cards__title">
        <img class="monster-cards__title-icon" src="${monsterIcon}" alt="Monster Icon" />
        Monster Cards
        <img class="monster-cards__title-icon" src="${monsterIcon}" alt="Monster Icon" />
      </h1>
      <div class="monster-cards__list">
        ${monsters.map(monsterCardFactory).join('')}
      </div>
    </div>
    `
  }

  export default monsterCardsList
  ```

- Adjuk hozzá a CSS-hez a `.monster-cards__title` formázásához szükséges kódot:

  ```css
  .monster-cards__title-icon {
    height: 1em;
    padding: 0 0.25rem;
  }
  ```

- Adjuk hozzá a `webpack.config.js`-hez a következő rule-t:

  ```javascript
    {
      test: /\.svg$/i,
      type: 'asset/inline'
    }
  ```

- Majd egészítsük ki az `asset/resource` rule-t az `exclude`-dal:

  ```javascript
      {
        test: /\.(png|svg|jpe?g|gif|webp)$/i,
        exclude: [resolve(__dirname, 'src/assets/ico')],
        type: 'asset/resource'
      },
  ```

- Az SVG-fájl base64-kódolással fog megjelenni a forrásban
- Csinosítsuk még a CSS-t, a `.monster__footer`-nél kisebbre veszem a betű méretét:
  
  ```css
  .monster__footer {
    align-items: flex-end;
    display: flex;
    font-size: 1.25rem;
    height: 100%;
    justify-content: space-around;
    padding: 1rem 0 0;
  }
  ```

**Linkek** :
- [Asset Modules](https://webpack.js.org/guides/asset-modules/#root)
