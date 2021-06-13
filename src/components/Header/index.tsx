import React from "react";
import Nav from "../Nav";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.home}>
      <div className={styles.imgBox}>
        <img
          className={styles.img}
          src="/assets/agrofitLogo.png"
          alt="agrofit logo"
        />
      </div>
      <Nav />
    </div>
  );
};

export default Header;
