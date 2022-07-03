import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import Button from "../UI/Button/Button";
import Search from "../UI/Search/Search";
import Basket from "../UI/Basket/Basket";

import styles from "./styles.module.scss";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const Header = () => {
  const { isAuth, email, name } = useAuth();
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Link className={styles.logo} to="/">
            Game Store
          </Link>
        </div>
        <Search />
        <div className={styles.right}>
          <Basket />
          {!isAuth ? (
            <Button children={"Войти"} onClick={() => navigate("/login")} />
          ) : (
            <ProfileMenu
              name={name}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
