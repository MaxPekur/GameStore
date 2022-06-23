import React from "react";
import { AiOutlineDelete } from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { deleteItem } from '../../redux/cart/reducer'
import styles from "./styles.module.scss";

const CartItem = ({ game }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItem(game.id))
  }

  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <div>{game.title}</div>
        <div>$ {game.price}</div>
      </div>
      <div className={styles.delete}><AiOutlineDelete size={20} onClick={handleClick}/></div>
    </div>
  );
};

export default CartItem;
