import React from "react";
import { useSelector } from "react-redux";
import GameImage from "../../components/GameImage/GameImage";
import styles from "./styles.module.scss";

const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);

  if (!game) return null;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <GameImage image={game.image}/>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1>{game.title}</h1>
          <div>{game.description}</div>
        </div>
        <div className={styles.right}>
          <iframe
            width="100%"
            height="400px"
            src={game.video}
            title="Youtube Video Player"
          />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
