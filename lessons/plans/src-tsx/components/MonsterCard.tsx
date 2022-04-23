import React from 'react'
import Monster from './Monster'

type AppProps = {
  monster: Monster
}

const MonsterCard = ({ monster }: AppProps): JSX.Element =>
    <div className="monster">
      <div className="monster__container">
        <div className="monster__header">
          <h2 className="monster__name">
            {monster.name}
          </h2>
        </div>
        <div className="monster__body">
          <img
            className="monster__avatar"
            src={require('../assets/img/' + monster.avatar)}
            alt={monster.name}
          />
        </div>
         <div className="monster__footer">
          <div className="monster__strength">
            <span className="fas fa-dumbbell monster__attribute-icon" aria-label="strength"></span>
            <span className="monster__attribute-value">
              {monster.strength}
            </span>
          </div>
          <div className="monster__health">
            <span className="fas fa-heart monster__attribute-icon" aria-label="health"></span>
            <span className="monster__attribute-value">
              {monster.health}
            </span>
          </div>
          <div className="monster__xp">
            <span className="fas fa-gem monster__attribute-icon" aria-label="experience point"></span>
            <span className="monster__attribute-value">
              {monster.xp}
            </span>
          </div>
        </div>
      </div>
    </div>

export default MonsterCard
