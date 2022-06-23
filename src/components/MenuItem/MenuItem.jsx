import React from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

const MenuItem = ({ menuItem }) => {
  return <div className={classnames(styles.root)}>{menuItem.title}</div>;
};

export default MenuItem;
