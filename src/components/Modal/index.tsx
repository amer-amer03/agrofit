import React from "react";
import ArrowIcon from "../icons/ArrowIcon";
import styles from "./index.module.scss";

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.box}>
        <div className={styles.arrowBox}>
          <div className={styles.arrowBackground}></div>
          <div className={styles.arrowBackgroundRing}></div>
          <div className={styles.arrowLeft}>
            <ArrowIcon />
          </div>
        </div>
        <img className={styles.image} src="assets/images/Small.jpg" alt="" />
        <div className={styles.arrowBox}>
          <div className={styles.arrowBackground}></div>
          <div className={styles.arrowBackgroundRing}></div>
          <div className={styles.arrowRight}>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
