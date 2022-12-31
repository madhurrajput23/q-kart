import React from "react";
import styles from "./CartItem.module.css";

const CartItem = ({
  imgSrc,
  title,
  description,
  actualPrice,
  rating,
  discountPercentage,
  inStock,
}) => {
  const additionalPrice = (actualPrice * 100) / (100 - discountPercentage);
  return (
    <div className={styles.cartItem_container}>
      <div className={styles.cartItem_top}>
        <img src={imgSrc} />
      </div>
      {inStock ? (
        <div className={styles.cartItem_bottom}>
          <div className={styles.cartItem_info}>
            <h3 className={styles.cartItem_title}>{title}</h3>
            <p>{description}</p>
            <div>
              <div className={styles.cartIteminfo_row}>
                <span>Rs {actualPrice}</span>
                <span className={styles.additional_price}>
                  {additionalPrice.toFixed(0)}
                </span>
                <span className={"color_green"}>
                  {discountPercentage.toFixed(0)}% off
                </span>
              </div>
              <div className={styles.cartIteminfo_row}>
                <span>Rating</span>
                <span className={rating > 4.2 ? "color_primary" : "color_red"}>
                  {rating}★
                </span>
              </div>
            </div>
          </div>
          <div className={styles.cartItem_cta}>
            <div className={styles.cartItem_ctaCount}>
            <button className="primary_button">-</button>
            <span>0</span>
            <button className="primary_button">+</button>
            </div>
            <button className="primary_button">Remove</button>
          </div>
        </div>
      ) : (
        <>
          <h3 className={styles.cartItem_title}>{title}</h3>
          <div className={styles.cartItem_unavailable}>Out of stock</div>
        </>
      )}
    </div>
  );
};

export default CartItem;
