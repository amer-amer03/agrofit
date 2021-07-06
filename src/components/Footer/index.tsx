import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.imgBox}>
        <img
          className={styles.img}
          src="/assets/images/agrofitLogo.png"
          alt="agrofit logo"
        />
      </div>
      <p>© Agrofit 2021</p>
    </footer>
  );
};
export default Footer;
