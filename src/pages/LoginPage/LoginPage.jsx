import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";

import styles from "./styles.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <Form title={"Авторизация"} />
      <Link className={styles.link} to={"/register"}>Регистрация</Link>
    </div>
  );
};

export default LoginPage;
