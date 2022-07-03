import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import styles from "./styles.module.scss";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className={styles.form}>
      <div className={styles.title}>{title}</div>
      <div className={styles.wrapper}>
        <Input
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"email"}
        />

        <Input
          type={"password"}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder={"password"}
        />
      </div>

      <Button children={title} onClick={() => handleClick(email, pass)} />
    </div>
  );
};

export default Form;
