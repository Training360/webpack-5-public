# 17. lecke - Az alkalmazás stílusának megírása
- Hozzunk létre az `src` mappán belül egy `assets`, azon belül egy `css` mappát
- Itt hozzuk létre a `style.css` fájlt:

  ```css
  html {
    font-size: 16px;
  }

  body {
    background: #eee;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin: 0;
  }

  .monster-cards__title {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
  }

  .monster-cards__list {
    display: flex;
    flex-wrap: wrap;
  }

  .monster {
    background: #fff;
    border-radius: .5rem;
    box-shadow: 
    0 1px 2px rgb(0 0 0 / 30%),
    0 2px 4px rgb(0 0 0 / 20%),
    0 4px 8px rgb(0 0 0 / 10%);
    color: #fff;
    margin: .5rem;
    padding: 1rem;
    width: calc(100% - 2rem);
  }

  @media (min-width: 40em) {
    .monster {
      width: calc(50% - 2rem);
    }
  }

  @media (min-width: 80em) {
    .monster {
      width: calc(25% - 2rem);
    }
  }

  .monster__container {
    background: #880808;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1.5rem;
  }

  .monster__header {
    box-shadow:
    0 1px 2px rgb(255 255 255 / 30%),
    0 2px 4px rgb(255 255 255  / 20%),
    0 4px 8px rgb(255 255 255  / 10%);
    filter: saturate(75%);
    font-size: 1.5rem;
    padding: .5rem;
    text-align: center;
  }

  .monster__footer {
    align-items: flex-end;
    display: flex;
    font-size: 1.5rem;
    height: 100%;
    justify-content: space-around;
    padding: 1rem 0 0;
  }
  ```