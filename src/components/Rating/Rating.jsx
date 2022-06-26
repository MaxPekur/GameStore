import classNames from "classnames";
import React, { useState } from "react";

import star from "./img/star.svg";
import starFill from "./img/star-fill.svg";

import styles from "./styles.module.scss";

const Rating = ({ value }) => {
  return (
    <div className={styles.rating}>
      {Array(5)
        .fill()
        .map((item, index) => (
          <img
            className={styles.star}
            src={index + 1 <= value ? starFill : star}
            alt="star"
          />
        ))}
    </div>
  );
};

export default Rating;
