import React from "react";
import Button from "../UI/Button/Button";
import Search from "../UI/Search/Search";
import Basket from "../UI/Basket/Basket";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <a className={styles.logo} href="/">
            Game Store
          </a>
        </div>
        <Search />
        <div className={styles.right}>
          <Basket />
          <Button children={"Войти"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
