import React from 'react'
import styles from './styles.module.scss'

const GameImage = ({ image }) => {
  return (
    <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
  )
}

export default GameImage