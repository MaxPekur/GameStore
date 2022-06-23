import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./styles.module.scss";

const menuItems = [
  {
    id: "001",
    title: "Все",
  },
  {
    id: "002",
    title: "Гонки",
  },
  {
    id: "003",
    title: "Симуляторы",
  },
  {
    id: "004",
    title: "Онлайн",
  },
  {
    id: "005",
    title: "Приключения",
  },
];

const Aside = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className={styles.root}>
      <h2>Жанры</h2>
      <nav className={styles.nav}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={item.id}
            menuItem={item}
            onClick={() => setActiveItem(index)}
            className={activeItem === index ? 'active' : ''}
          />
        ))}
      </nav>
    </div>
  );
};

export default Aside;
