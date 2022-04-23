# 9. lecke - A build ellenőrzése dev és prod módban
- Módosítsuk a `monsterCardFactory.js` fájlt a `components` mappában
- Helyezzünk el egy-egy `strong` taget a `monster__footer`-ön belül a tulajdonságoknál, benne az adott statisztika rövidítésével:

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
            <strong>ST: </strong>${strength}
          <div class="monster__health">
            <strong>HP: </strong>${health}
          <div class="class="monster__xp">
            <strong>XP: </strong>${xp}
        </div>
      </div>    
    </div>
  `

  export default monsterCardFactory
  ```

- Futtassuk a `dev` és a `build` szkripteket, és győződjünk meg róla, hogy az alkalmazás működik-e