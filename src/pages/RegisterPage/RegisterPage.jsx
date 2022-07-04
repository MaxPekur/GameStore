import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/user/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Form from "../../components/Form/Form";

import styles from "./styles.module.scss";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSingUp = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(err => alert(err.message))
  };
  return (
    <div className={styles.register}>
      <Form title={"Регистрация"} handleClick={handleSingUp} />
      <Link className={styles.link} to={"/login"}>
        Уже есть аккаунт?
      </Link>
    </div>
  );
};

export default RegisterPage;
