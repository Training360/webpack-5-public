# 26. lecke - Képek importálása JavaScript-fájlba
- Amennyiben a JavaScript-fájlokban akarunk képeket használni, importáljuk a képeket abba a fájlba, ahol használni akarjuk őket
- Módosítsuk a `monsters.js` fájlt, importáljuk a képeket, és mindegyik objecthez adjuk hozzá az `avatar` tulajdonságot:

  ```javascript
  import avatarGiant from '../assets/img/giant.png'
  import avatarDwarf from '../assets/img/dwarf.png'
  import avatarElf from '../assets/img/elf.png'
  import avatarHuman from '../assets/img/human.png'

  const monsters = [
    {
      name: 'Dull Scary Giant',
      strength: 10,
      health: 120,
      xp: 1200,
      avatar: avatarGiant
    },
    {
      name: 'Drunk Angry Dwarf',
      strength: 5,
      health: 70,
      xp: 700,
      avatar: avatarDwarf
    },
    {
      name: 'Arrogant Jerk Elf',
      strength: 3,
      health: 30,
      xp: 300,
      avatar: avatarElf
    },
    {
      name: 'Useless Short-lived Human',
      strength: 1,
      health: 10,
      xp: 100,
      avatar: avatarHuman
    }
  ]

  export default monsters
  ```

- Kiegészítjük a `monsterFactory`-t, a paraméterekhez hozzáadjuk az `avatar`t, és elkészítjük a `.monster__body`-t:

  ```javascript
    const monsterCardFactory = ({ name, strength, health, xp, avatar } = {}) => `
    <div class="monster">
      <div class="monster__container">
        <div class="monster__header">
          <h2 class="monster__name">
            ${name}
          </h2>
        </div>
        <div class="monster__body">
          <img class="monster__avatar" src="${avatar}" alt="${name}" />
        </div>
        <div class="monster__footer">
          <div class="monster__strength">
            <strong>ST: </strong> ${strength}
          </div>
          <div class="monster__health">
            <strong>HP:</strong> ${health}
          </div>
          <div class="monster__xp">
            <strong>XP:</strong> ${xp}
          </div>
        </div>
      </div>
    </div>
    `

    export default monsterCardFactory
  ```