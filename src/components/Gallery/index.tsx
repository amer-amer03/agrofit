import classNames from "classnames";
import { homeGalleryData } from "../../data/data";
import styles from "./index.module.scss";

const Gallery = () => {
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
          <div style={{ gridArea: letters[i] }} className={styles.item}>
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
export default Gallery;
