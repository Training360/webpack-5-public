# 6. lecke - A `monsterCardFactory` függvény megírása
- Hozzunk létre egy `monsterCardFactory.js` fájlt a `components` mappában
- A függvény a paraméterként kapott szörny objektum tulajdonságait kiszedi külön változókba, és visszaad egy sztringet, amely egy HTML template, amelyet a DOM-hoz hozzá kell majd adnunk:

  ```javascript
  const monsterCardFactory = ({ name, strength, health, xp } = {}) => `
    <div class="monster">
      <div class="monster__container">
        <div class="monster__header">
          <h2 class="monster__name">
            ${name}  
          </h2>
        </div>
        <div class="monster__footer">
          <div class="monster__strength">
            ${strength}
          <div class="monster__health">
            ${health}
          <div class="class="monster__xp">
            ${xp}
        </div>
      </div>    
    </div>
  `

  export default monsterCardFactory
  ```