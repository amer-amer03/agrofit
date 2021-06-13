import styles from "./index.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>О Нас</li>
        <li className={styles.item}>Продукция</li>
        <li className={styles.item}>Фотогалерея</li>
        <li className={styles.item}>Контакты</li>
        <li className={styles.item}>
          <select className={styles.select} name="language">
            <option className={styles.option} value="ru">
              RU
            </option>
            <option className={styles.option} value="en">
              EN
            </option>
          </select>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
