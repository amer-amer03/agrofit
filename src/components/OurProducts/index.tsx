import React from "react";
import { productsData } from "../../data/data";
import Button from "../Button";
import styles from "./index.module.scss";

const OurProducts = () => {
  return (
    <div className={styles.ourAdvantage}>
      {productsData.map((item) => {
        return (
          <div className={styles.item} key={item.title}>
            <img src={item.imageUrl} alt={item.title} />
            <div className={styles.info}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.text}>{item.info}</p>
              <div className={styles.button}>
                <Button value="УЗНАТЬ БОЛЬШЕ" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OurProducts;
