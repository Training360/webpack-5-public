# 31. lecke - A Font Awesome ikonkészlet használata
- A kártyák aljánál a szövegeket cseréljük ki ikonokra
- Használjuk a Font Awesome ikonokat
- Telepítsük fel: `npm i @fortawesome/fontawesome-free`
- Importáljuk a `monsterCardFactory.js` fájlba a szükséges szkripteket, és egészítsük ki a template-et:
  
  ```javascript
  import '../../node_modules/@fortawesome/fontawesome-free/js/solid.min'
  import '../../node_modules/@fortawesome/fontawesome-free/js/fontawesome.min'

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
        <div class="monster__attribute">
          <span class="fas fa-dumbbell monster__attribute-icon"></span>
          <span class="monster__attribute-value">${strength}</span>
        </div>
        <div class="monster__attribute">
          <span class="fas fa-heart monster__attribute-icon"></span>
          <span class="monster__attribute-value">${health}</span>
        </div>
        <div class="monster__attribute">
          <span class="fas fa-gem monster__attribute-icon"></span>
          <span class="monster__attribute-value">${xp}</span>
        </div>
      </div>
    </div>
  </div>
  `

  export default monsterCardFactory
  ``` 

- Egészítsük ki a `style.css`-t: 
  
  ```css
  .monster__attribute-icon {
    box-sizing: content-box;
    padding: 0 0.5rem 0 0;
  }
  ```

- Semmi egyébre nincs szükség, hiszen JS-fájlokat importáltam JS-fájlokba

**Megjegyzés**  
A két import esetében a `../../node_modules/`-ra nincs szükség, tehát ennyi elég:

  ```javascript
    import '@fortawesome/fontawesome-free/js/solid.min'
    import '@fortawesome/fontawesome-free/js/fontawesome.min'
  ```

Később még foglalkozunk ezzel a résszel

**Linkek** :
- [@fortawesome/fontawesome-free](https://www.npmjs.com/package/@fortawesome/fontawesome-free)
- [FontAwesome ikonok](https://fontawesome.com/icons)
