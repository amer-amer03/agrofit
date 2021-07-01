import { companyDescriptionData as ourAdvantageData } from "../../data/data";
import styles from "./index.module.scss";

const OurAdvantage = () => {
  return (
    <div className={styles.ourAdvantage}>
      {ourAdvantageData.map((item) => {
        return (
          <div className={styles.item} key={item.title}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.info}>{item.info}</p>
          </div>
        );
      })}
    </div>
  );
};

export default OurAdvantage;
