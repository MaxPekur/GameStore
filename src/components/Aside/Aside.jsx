import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./styles.module.scss";

const Aside = () => {
  const [genreList, setGenreList] = useState(['Все', 'Гонки', 'Экшен', 'Шутер', 'РПГ']);
  const [activeGenre, setActiveGenre] = useState(0);

  const sortGenre = (idx, genre) => {
    setActiveGenre(idx)
    
  }

  return (
    <div className={styles.root}>
      <h2>Жанры</h2>
      <nav className={styles.nav}>
        {genreList.map((genre, idx) => (
          <MenuItem
            onClick={() => sortGenre(idx, genre)}
            key={genre}
            genre={genre}
            className={activeGenre === idx ? "active" : ""}
          />
        ))}
      </nav>
    </div>
  );
};

export default Aside;
