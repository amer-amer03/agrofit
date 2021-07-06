import React, { useRef } from "react";
import HomePageHeader from "../../src/components/HomePageHeader";
import AboutUs from "../../src/components/AboutUs";
import OurAdvantage from "../../src/components/OurAdvantage";
import styles from "./index.module.scss";
import OurProducts from "../../src/components/OurProducts";
import HomePageGallery from "../../src/components/HomePageGallery";
import ContactInfo from "../../src/components/ContactInfo";
import classNames from "classnames";
import Footer from "../../src/components/Footer";

const Home = () => {
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const ourProductsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const executeScroll = (index: number) => {
    const refs = [aboutUsRef, ourProductsRef, galleryRef, contactRef];

    const elementPosition = refs[index]?.current?.getBoundingClientRect()?.top;
    const headerOffset = index === 2 ? 50 : 100;
    const offsetPosition = elementPosition && elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  return (
    <>
      <HomePageHeader executeScroll={executeScroll} />
      <div>
        <AboutUs aboutUsRef={aboutUsRef} />
      </div>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Наши преймущества</h3>
        <div className={styles.sectionContent}>
          <OurAdvantage />
        </div>
      </section>
      <section ref={ourProductsRef} className={styles.section}>
        <h3 className={styles.sectionTitle}>Наша Продукция</h3>
        <div className={styles.sectionContent}>
          <OurProducts />
        </div>
      </section>
      <section
        ref={galleryRef}
        className={classNames([styles.section, styles.sectionGallery])}
      >
        <h3 className={styles.sectionTitle}>Фотогалерея</h3>
        <div className={styles.sectionContent}>
          <HomePageGallery />
        </div>
      </section>
      <section ref={contactRef} className={styles.section}>
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
