# 5. lecke - A `monster.js` megírása
- Hozzunk létre egy `components` mappát az `src`-ben
- Hozzunk létre egy `monsters.js` fájlt a `components` mappában
- A fájl a kártyákon megjelenő szörnyek adatait tartalmazza:
  
  ```javascript
  const monsters = [
    {
      name: 'Dull Scary Giant',
      strength: 10,
      health: 120,
      xp: 1200
    },
    {
      name: 'Drunk Angry Dwarf',
      strength: 5,
      health: 70,
      xp: 700
    },
    {
      name: 'Arrogant Jerk Elf',
      strength: 3,
      health: 30,
      xp: 300
    },
    {
      name: 'Useless Short-lived Human',
      strength: 1,
      health: 10,
      xp: 100
    }
  ];

  export default monsters
  ```