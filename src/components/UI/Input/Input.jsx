import React from 'react'
import styles from './styles.module.scss'

const Input = ({ placeholder, width, type }) => {
  return (
    <input type={type} style={ {width: width} } placeholder={placeholder} />
  )
}

export default Input