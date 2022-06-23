import React from 'react'
import GameCard from '../GameCard/GameCard'
import styles from './styles.module.scss'

const Content = ({ games }) => {
  return (
    <div className={styles.root}>
      {games.map(game => <GameCard key={game.title} game={game} />)}
    </div>
  )
}

export default Content