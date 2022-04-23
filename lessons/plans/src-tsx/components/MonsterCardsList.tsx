import monsters from './monsters'
import MonsteCard from './MonsterCard'
import React from 'react'

type AppProps = {
  title: string
  monsterIcon: string
}

const MonsterCardsList = ({ title, monsterIcon }:AppProps):JSX.Element => {
  return (
    <div className="monsters">
      <h1 className="monsters__title">
        <img className="monsters__title-logo" src={monsterIcon} />
        {title}
        <img className="monsters__title-logo" src={monsterIcon} />
      </h1>
      <div className="monsters__list">
        {monsters.map(monster => <MonsteCard key={monster.name} monster={monster} />)}
      </div>
    </div>
  )
}

export default MonsterCardsList
