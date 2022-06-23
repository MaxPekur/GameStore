import React from "react";
import { useSelector } from "react-redux";
import GameImage from "../../components/GameImage/GameImage";
import styles from "./styles.module.scss";

const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);

  if (!game) return null;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <GameImage image={game.image} />
        <h1>{game.title}</h1>
        <div>{game.description}</div>
        <iframe
          width="30%"
          height="250px"
          src={game.video}
          title="Youtube Video Player"
        />
      </div>
    </div>
  );
};

export default GamePage;
