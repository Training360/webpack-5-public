import React from 'react'

const MonsterCard = ({ monster }) => {
  return (
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
          <p className="monster__strength">
            <strong>Strength:</strong> {monster.strength}
          </p>
          <p className="monster__health">
            <strong>Health:</strong> {monster.health}
          </p>
          <p className="monster__xp">
            <strong>XP:</strong> {monster.xp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MonsterCard
