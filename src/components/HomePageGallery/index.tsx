import { homeGalleryData } from "../../data/data";
import styles from "./index.module.scss";

const HomePageGallery = () => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
  ];

  return (
    <div className={styles.gallery}>
      {homeGalleryData.map((item, i) => {
        return (
          <div key={i} style={{ gridArea: letters[i] }} className={styles.item}>
            <img
              className={styles.img}
              src={item.imageUrl}
              alt={item.imageUrl}
            />
          </div>
        );
      })}
    </div>
  );
};
export default HomePageGallery;
