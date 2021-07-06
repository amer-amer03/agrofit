import { FC } from "react";
import styles from "./index.module.scss";

interface Props {
  executeScroll?: (index: number) => void;
}
const Nav: FC<Props> = ({ executeScroll }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.imgBox}>
        <img
          className={styles.img}
          src="/assets/images/agrofitLogo.png"
          alt="agrofit logo"
        />
      </div>
      <ul className={styles.list}>
        <li
          onClick={() => executeScroll && executeScroll(0)}
          className={styles.item}
        >
          О Нас
        </li>
        <li
          onClick={() => executeScroll && executeScroll(1)}
          className={styles.item}
        >
          Продукция
        </li>
        <li
          onClick={() => executeScroll && executeScroll(2)}
          className={styles.item}
        >
          Фотогалерея
        </li>
        <li
          onClick={() => executeScroll && executeScroll(3)}
          className={styles.item}
        >
          Контакты
        </li>
        <li
          onClick={() => executeScroll && executeScroll(4)}
          className={styles.item}
        >
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
