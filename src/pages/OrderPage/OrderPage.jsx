import React from "react";
import { useSelector } from "react-redux";
import OrderItem from "../../components/OrderItem/OrderItem";
import Input from "../../components/UI/Input/Input";
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
                <Input type={'email'} placeholder={"Email"} />
                <Input placeholder={"+7 (000) 000-00-00"} />
                <Input placeholder={"Фамилия"} />
                <Input placeholder={"Имя"} />
              </div>
              <Input width={'95%'} placeholder={"Адрес"} />
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
          <div>
            <span>Всего: </span>
            <span>$ {items.reduce((acc, game) => (acc += game.price), 0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
