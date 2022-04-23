import Monster from './interfaces/Monster'

const monsterCardFactory = ({ name, strength, health, xp, avatar }:Monster):string => `
    <div class="monster">
      <div class="monster__container">
        <div class="monster__header">
          <h2 class="monster__name">
            ${name}  
          </h2>
        </div>
        <div class="monster__body">
          <img class="monster__avatar" src="${require('../assets/img/' + avatar)}" />
        </div>
        <div class="monster__footer">
          <p class="monster__strength">
            <strong>Strength:</strong> ${strength}
          </p>
          <p class="monster__health">
            <strong>Health:</strong> ${health}
          </p>
          <p class="class="monster__xp">
            <strong>XP:</strong> ${xp}
          </p>
        </div>
      </div>    
    </div>`

export default monsterCardFactory
