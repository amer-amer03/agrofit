import React from "react";
import Button from "../Button";
import CameraIcon from "../icons/CameraIcon";
import Nav from "../Nav";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.imgBox}>
            <img
              className={styles.img}
              src="/assets/images/agrofitLogo.png"
              alt="agrofit logo"
            />
          </div>
          <Nav />
        </div>

        <div className={styles.headerTextBox}>
          <h1 className={styles.title}>ЛЕКАРСТВЕННЫЕ ТРАВЫ</h1>
          <h2 className={styles.subtitle}>ВЫРАЩИВАНИЕ И РЕАЛИЗАЦИЯ</h2>
          <div className={styles.description}>
            <p>
              Основным видом деятельности предприятия является выращивание и
              реализация лекарственных трав.
            </p>
            <p>
              Наше сырьё используется в фармацевтической и пищевой
              промышленности.
            </p>
          </div>
          <div className={styles.buttons}>
            <Button value="СВЯЗАТЬСЯ С НАМИ" />
            <div className={styles.buttonDark}>
              <div className={styles.buttonDarkContent}>
                <CameraIcon />
                <p>ПОСМОТРЕТЬ РОЛИК</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
