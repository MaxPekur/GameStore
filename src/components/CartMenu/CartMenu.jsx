import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import Button from "../UI/Button/Button";
import { useAuth } from "../../hook/useAuth";

import styles from "./styles.module.scss";

const CartMenu = ({ items, onClick }) => {
  const { isAuth, email } = useAuth();
  let navigate = useNavigate();

  const total = items.reduce((acc, item) => (acc += item.price), 0);

  const toOrder = useCallback(() => {
    onClick();
    if (isAuth) {
      navigate("/order");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className={styles.cart}>
      <div className={styles.wrapper}>
        {items.length ? (
          <>
            <div className={styles.list}>
              {items.map((game, idx) => (
                <CartItem key={idx} game={game} />
              ))}
            </div>
            <Button children={`Сумма $ ${total}`} onClick={toOrder} />
          </>
        ) : (
          <div className={styles.empty}>
            <img src={"images/empty-cart.png"} alt={"empty"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartMenu;
