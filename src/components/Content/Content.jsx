import React from "react";
import { useSelector } from "react-redux";
import GameCard from "../GameCard/GameCard";

import styles from "./styles.module.scss";

const Content = () => {
  const games = useSelector((state) => state.game.games);
 
  return (
    <div className={styles.root}>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default Content;
