import React, { FC } from "react";
import styles from "./index.module.scss";

interface Props {
  ProductGalleryData: {
    original: string;
    thumbnail: string;
  }[];
}

const ProductPageGallery: FC<Props> = ({ ProductGalleryData }) => {
  const letters = ["a", "b", "c", "d", "e"];

  return (
    <>
      <div className={styles.gallery}>
        {ProductGalleryData.map((item: any, i: number) => {
          return (
            <div
              key={i}
              style={{ gridArea: letters[i] }}
              className={styles.item}
            >
              <img
                className={styles.img}
                src={item.original}
                alt={item.original}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProductPageGallery;
