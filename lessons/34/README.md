# 34. lecke - Az alkalmazás véglegesítése
- Vessük össze az alkalmazásunk jelenlegi kinézetét a dizájnnal
- Ahol szükséges, módosítsuk az alkalmazást
- A `.monster-cards__title`-nél megadom a `font-size`-t:
  
  ```css
  .monster-cards__title {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1.75rem;
    text-align: center;
  }
  ```

- A `.monster__container`-nél átállítom a `padding`-et
  
  ```css
  .monster__container {
    background: #880808;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem;
  }
  ```

- A `.monster__attribute-icon`-nál törlöm a `box-sizing`-ot, és módosítom a `padding`-et`
  
  ```css
  .monster__attribute-icon {
    padding: 0 0.25rem 0 0;
  }
  ```

- A `webpack.config.js`-t is egyszerűsítem
- Hogy ne kelljen mindig a `resolve()`-ot meghívnom a `__dirname`-mel, ezért létrehozok egy új függvényt:

  ```javascript
  function getFullPath (path) {
    return path ? resolve(__dirname, path) : resolve(__dirname)
  }
  ```

- Ezután a `resolve(__dirname, path)` mindenhol kicserélhető erre: `getFullPath(path)`

**Megjegyzés:**  
Éles kódban mindig meg kell hagyni a licencinformációkat, különben szerzői jogot sértünk! 
