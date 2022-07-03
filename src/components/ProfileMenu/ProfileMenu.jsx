import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../store/user/userSlice";
import noAvatar from './img/noavatar.png'
import classnames from 'classnames'
import Button from "../UI/Button/Button";

import styles from "./styles.module.scss";

const ProfileMenu = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.profileMenu}>
      <span className={styles.userName} onClick={() => setActive(!active)}>
        <img src={noAvatar} alt={'avatar'}/>
      </span>

      <div className={!active ? styles.menu : classnames(styles.menu, styles.active)}>
        <ul className={styles.list}>
          <li>Профиль</li>
          <li>Избранное</li>
        </ul>
        <Button
          children={"Выйти"}
          onClick={() => dispatch(removeUser(), navigate("/"))}
        />
      </div>
    </div>
  );
};

export default ProfileMenu;
