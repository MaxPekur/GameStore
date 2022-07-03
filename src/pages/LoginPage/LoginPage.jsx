import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/user/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../../components/Form/Form";

import styles from "./styles.module.scss";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user)
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        navigate('/')
      })
      .catch(console.error);
  };

  return (
    <div className={styles.login}>
      <Form title={"Авторизация"} handleClick={handleLogin} />
      <Link className={styles.link} to={"/register"}>
        Регистрация
      </Link>
    </div>
  );
};

export default LoginPage;
