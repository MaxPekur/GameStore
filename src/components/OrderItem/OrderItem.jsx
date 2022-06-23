import React from "react";
import styles from './styles.module.scss'

const TableItem = ({ game }) => {
  return (
    <div className={styles.item}>
        <div className={styles.title}>{game.title}</div>
        <div className={styles.count}>1</div>
        <div className={styles.price}>$ {game.price}</div>
    </div>
  );
};

export default TableItem;
