import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}>
        <img src="" alt="" />
      </div>
      <div className={styles.detailContainer}>
        <h4>Product Name</h4>
        <span>Price - &#8377; {}</span>
        <span>product color | product type</span>
      </div>
    </div>
  );
};

export default ProductCard;
