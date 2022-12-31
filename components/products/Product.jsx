import React from "react";
import styles from "./Product.module.css";

const Product = ({imgSrc, title, additionalPrice , actualPrice, rating }) => {
  const discount = ((additionalPrice - actualPrice) / additionalPrice) * 100;
  return (
    <div className={styles.product_container}>
      <div className={styles.product_top}>
        <img src={imgSrc} />
      </div>
      <div className={styles.product_bottom}>
        <div className={styles.product_info}>
          <h3 className={styles.product_title}>{title}</h3>
          <div>
            <div className={styles.productinfo_row}>
              <span>Rs {actualPrice}</span>
              <span className={styles.additional_price}>Rs {additionalPrice}</span>
              <span className={"color_primary"}>{discount.toFixed(0)}% off</span>
            </div>
            <div className={styles.productinfo_row}>
              <span>Rating</span>
              <span className={"color_red"}>{rating}★</span>
            </div>
          </div>
        </div>
        <div className={styles.product_cta}>
          <button className="primary_button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
