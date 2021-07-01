import React from "react";
import Header from "../../src/components/Header";
import AboutUs from "../../src/components/AboutUs";
import OurAdvantage from "../../src/components/OurAdvantage";
import styles from "./index.module.scss";
import OurProducts from "../../src/components/OurProducts";

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
    </>
  );
};
export default Home;
