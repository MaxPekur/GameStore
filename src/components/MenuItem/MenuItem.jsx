import React from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

const MenuItem = ({ menuItem, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classnames(styles.root, className ? styles.active : '')}
    >
      {menuItem.title}
    </div>
  );
};

export default MenuItem;
