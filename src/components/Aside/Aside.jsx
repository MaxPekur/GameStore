import React, { useState } from 'react'
import MenuItem from '../MenuItem/MenuItem'
import styles from './styles.module.scss'

const menuItems = [
  {
    id: '001',
    title: 'Все'
  },
  {
    id: '002',
    title: 'Гонки'
  },
  {
    id: '003',
    title: 'Симуляторы'
  },
  {
    id: '004',
    title: 'Онлайн'
  },
  {
    id: '005',
    title: 'Приключения'
  }
]

const Aside = () => {
  const [activeItem, setActiveItem] = useState(0);
  
  return (
    <div className={styles.root}>
      <div className={styles.nav}>Жанры</div>
      {menuItems.map((item) => <MenuItem key={item.id} menuItem={item} />)}
    </div>
  )
}

export default Aside