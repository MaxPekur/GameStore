import React from 'react'
import styles from './styles.module.scss'

const Input = ({ placeholder, width, type, value, onChange }) => {

  return (
    <input 
      value={value}
      type={type} 
      style={ {width: width} } 
      placeholder={placeholder} 
      onChange={onChange}
    />
  )
}

export default Input