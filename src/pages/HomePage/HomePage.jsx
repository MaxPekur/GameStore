import React from "react";
import Aside from '../../components/Aside/Aside'
import Content from "../../components/Content/Content";
import styles from "./styles.module.scss";
import games from "../../assets/db/games";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Aside />
      <Content games={games} />
    </div>
  );
};

export default HomePage;
