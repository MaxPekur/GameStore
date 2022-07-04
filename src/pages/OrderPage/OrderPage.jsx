import React from "react";
import { useSelector } from "react-redux";
import OrderItem from "../../components/OrderItem/OrderItem";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import styles from "./styles.module.scss";

const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  return (
    <div className={styles.container}>
      <h1>Оформление заказа</h1>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.user}>
            <form className={styles.user_info}>
              <div>
                <Input type={"email"} placeholder={"Email"} />
                <Input placeholder={"+7 (000) 000-00-00"} />
                <Input placeholder={"Фамилия"} />
                <Input placeholder={"Имя"} />
              </div>
              <Input width={"100%"} placeholder={"Адрес"} />
            </form>
          </div>
          <div className={styles.adrres}></div>
        </div>
        <div className={styles.check}>
          <div className={styles.list}>
            {items.map((game) => (
              <OrderItem game={game} />
            ))}
          </div>
          <div className={styles.bottom}>
            <div className={styles.total}>
              <span>Всего: </span>
              <span>
                $ {items.reduce((acc, game) => (acc += game.price), 0)}
              </span>
            </div>
            <Button children={"Оформить"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
