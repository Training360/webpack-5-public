import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faDumbbell, faHeart, faGem } from '@fortawesome/free-solid-svg-icons'

library.add(faDumbbell, faHeart, faGem)
dom.watch()

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
