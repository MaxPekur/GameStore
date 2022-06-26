import React, { useState } from 'react'
import styles from './styles.module.scss'

const Input = ({ placeholder, width, type }) => {

  const [searchGame, setSearchGame] = useState('')

  return (
    <input 
      value={searchGame}
      type={type} 
      style={ {width: width} } 
      placeholder={placeholder} 
      onChange={(e) => setSearchGame(e.target.value)}
    />
  )
}

export default Input