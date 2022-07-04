import React from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

const MenuItem = ({ genre, className, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={classnames(styles.root, className ? styles.active : '')}
    >
      {genre}
    </span>
  );
};

export default MenuItem;
