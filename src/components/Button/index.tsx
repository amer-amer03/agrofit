import { FC } from "react";
import styles from "./index.module.scss";

interface Button {
  value: string;
}
const Button: FC<Button> = ({ value }) => {
  return <button className={styles.buttonLight}>{value}</button>;
};
export default Button;
