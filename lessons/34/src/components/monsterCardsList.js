import monsters from './monsters'
import monsterCardFactory from './monsterCardFactory'
import monsterIcon from '../assets/ico/monster-icon.svg'
import title from '../assets/raw/title.txt'

const monsterCardsList = {
  selector: 'body',
  position: 'beforeend',
  template: `
  <div class="monster-cards">
    <h1 class="monster-cards__title">
      <img class="monster-cards__title-icon" src="${monsterIcon}" alt="Monster Icon" />
      ${title}
      <img class="monster-cards__title-icon" src="${monsterIcon}" alt="Monster Icon" />
    </h1>
    <div class="monster-cards__list">
      ${monsters.map(monsterCardFactory).join('')}
    </div>
  </div>
  `
}

export default monsterCardsList
