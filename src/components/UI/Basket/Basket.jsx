import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RiShoppingBasketLine } from "react-icons/ri";
import CartMenu from "../../CartMenu/CartMenu";

import styles from "./styles.module.scss";

const Basket = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);

  return (
    <div className={styles.basket}>
      <RiShoppingBasketLine
        size={30}
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {items.length > 0 ? <span>{items.length}</span> : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>}
    </div>
  );
};

export default Basket;
