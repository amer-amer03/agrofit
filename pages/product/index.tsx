import classNames from "classnames";
import React from "react";
import ContactInfo from "../../src/components/ContactInfo";
import Footer from "../../src/components/Footer";
import Modal from "../../src/components/Modal";
import ProductPageGallery from "../../src/components/ProductPageGallery";
import ProductPageHeader from "../../src/components/ProductPageHeader";
import { ProductGalleryData } from "../../src/data/data";
import styles from "./index.module.scss";

const Product = () => {
  return (
    <div>
      <ProductPageHeader />
      <section className={classNames([styles.section, styles.sectionGallery])}>
        <h3 className={styles.sectionTitle}>Фотогалерея</h3>
        <div className={styles.sectionContent}>
          <ProductPageGallery ProductGalleryData={ProductGalleryData} />
        </div>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Контактные данные</h3>
        <div className={styles.sectionContent}>
          <ContactInfo />
        </div>
      </section>
      <Footer />
      <Modal />
    </div>
  );
};

export default Product;
