import React from "react";
import Header from "../../src/components/Header";
import AboutUs from "../../src/components/AboutUs";
import OurAdvantage from "../../src/components/OurAdvantage";
import styles from "./index.module.scss";
import OurProducts from "../../src/components/OurProducts";
import Gallery from "../../src/components/Gallery";
import ContactInfo from "../../src/components/ContactInfo";
import classNames from "classnames";
import Footer from "../../src/components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <section></section>
      <AboutUs />
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Наши преймущества</h3>
        <div className={styles.sectionContent}>
          <OurAdvantage />
        </div>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Наша Продукция</h3>
        <div className={styles.sectionContent}>
          <OurProducts />
        </div>
      </section>
      <section className={classNames([styles.section, styles.sectionGallery])}>
        <h3 className={styles.sectionTitle}>Фотогалерея</h3>
        <div className={styles.sectionContent}>
          <Gallery />
        </div>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Контактные данные</h3>
        <div className={styles.sectionContent}>
          <ContactInfo />
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
