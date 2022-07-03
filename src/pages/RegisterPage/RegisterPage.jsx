import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";

import styles from "./styles.module.scss";

const RegisterPage = () => {
  return (
    <div className={styles.register}>
      <Form title={"Регистрация"} />
      <Link className={styles.link} to={"/login"}>Уже есть аккаунт?</Link>
    </div>
  );
};

export default RegisterPage;
