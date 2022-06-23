import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItemInCart, deleteItem } from "../../redux/cart/reducer";
import { setCurrentGame } from "../../redux/games/reducer";
import GameImage from "../GameImage/GameImage";
import Button from "../UI/Button/Button";
import styles from "./styles.module.scss";

const GameCard = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);
  let navigate = useNavigate();

  const handlerClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItem(game.id));
    } else {
      dispatch(addItemInCart(game));
    }
  };

  const currentGame = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`)
  }
  
  return (
    <div className={styles.card} onClick={currentGame}>
      <div>
        <div className={styles.image}>
          <GameImage image={game.image} />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>{game.title}</div>
          <div>
            {game.genres.map((genre, idx) => (
              <span key={idx} className={styles.genre}>
                {genre}
              </span>
            ))}
          </div>
          <div className={styles.description}>{game.description}</div>
        </div>
      </div>
      <Button onClick={handlerClick}>
        {isItemInCart ? "Убрать из корзины" : `$ ${game.price}`}
      </Button>
    </div>
  );
};

export default GameCard;