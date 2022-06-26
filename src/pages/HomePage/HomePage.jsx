import React from "react";
import Aside from '../../components/Aside/Aside'
import Content from "../../components/Content/Content";
import styles from "./styles.module.scss";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Aside />
      <Content />
    </div>
  );
};

export default HomePage;
