import React, { FC } from "react";
import Nav from "../Nav";
import ProductDescription from "../ProductDescription";
import styles from "./index.module.scss";

interface Props {
  executeScroll?: (index: number) => void;
}

const ProductPageHeader: FC<Props> = ({ executeScroll }) => {
  return (
    <>
      <header className={styles.home}>
        <div className={styles.header}>
          <Nav executeScroll={executeScroll} />
          <div className={styles.headerTextBox}>
            <h1 className={styles.title}>МЯТА УДАЙЧАНКА</h1>
          </div>
        </div>
      </header>
      <div>
        <ProductDescription />
      </div>
    </>
  );
};

export default ProductPageHeader;
