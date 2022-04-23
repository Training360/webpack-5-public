import monsters from './monsters'
import monsterCardFactory from './monsterCardFactory'
import monsterIcon from '../assets/ico/monster-icon.svg'
import title from '../assets/raw/title.txt'
import Component from './interfaces/Component'

const monsterCardsList:Component = {
  selector: 'body',
  position: 'beforeend',
  template: `
    <div class="monsters">
      <h1 class="monsters__title">
        <img class="monsters__icon src="${monsterIcon}" />
        ${title} 
        <img class="monsters__icon src="${monsterIcon}" />
      </h1>
      <div class="monsters__list">
        ${monsters.map(monsterCardFactory).join('')}
      </div>
    </div>
  `
}

export default monsterCardsList
