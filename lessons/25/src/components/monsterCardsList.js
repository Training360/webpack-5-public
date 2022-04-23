import monsters from './monsters'
import monsterCardFactory from './monsterCardFactory'

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
