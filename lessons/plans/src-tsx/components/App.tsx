import React from 'react'
import monsterIcon from '../assets/ico/monster-icon.svg'
import title from '../assets/raw/title.txt'
import MonsterCardsList from './MonsterCardsList'

const App = () : JSX.Element => {
  return (
    <>
      <MonsterCardsList title={title} monsterIcon={monsterIcon} />
    </>
  )
}

export default App
