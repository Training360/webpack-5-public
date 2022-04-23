import avatarGiant from '../assets/img/giant.png'
import avatarDwarf from '../assets/img/dwarf.png'
import avatarElf from '../assets/img/elf.png'
import avatarHuman from '../assets/img/human.png'

interface monster {
  name: string
  strength: number
  health: number
  xp: number
  avatar: string
}

const monsters: monster[] = [
  {
    name: 'Dull Scary Giant',
    strength: 10,
    health: 120,
    xp: 1200,
    avatar: avatarGiant
  },
  {
    name: 'Drunk Angry Dwarf',
    strength: 5,
    health: 70,
    xp: 700,
    avatar: avatarDwarf
  },
  {
    name: 'Arrogant Jerk Elf',
    strength: 3,
    health: 30,
    xp: 300,
    avatar: avatarElf
  },
  {
    name: 'Useless Short-lived Human',
    strength: 1,
    health: 10,
    xp: 100,
    avatar: avatarHuman
  }
]

export default monsters
