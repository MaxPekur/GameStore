import React, { useState } from "react";
import { useSelector } from "react-redux";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./styles.module.scss";

const menuItems = [
  {
    title: "Все",
  },
  {
    title: "Гонки",
  },
  {
    title: "Симуляторы",
  },
  {
    title: "Онлайн",
  },
  {
    title: "Приключения",
  },
];


const Aside = () => {
  const [genreList, setGenreList] = useState(menuItems);
  const [activeGenre, setActiveGenre] = useState(0);
  const games = useSelector((state) => state.game.games);


  const sortGames = (idx, games) => {
    setActiveGenre(idx)
    

  }

  return (
    <div className={styles.root}>
      <h2>Жанры</h2>
      <nav className={styles.nav}>
        {genreList.map((genre, idx) => (
          <MenuItem
            key={idx}
            menuItem={genre}
            onClick={() => sortGames(idx, games)}
            className={activeGenre === idx ? "active" : ""}
          />
        ))}
      </nav>
    </div>
  );
};

export default Aside;
