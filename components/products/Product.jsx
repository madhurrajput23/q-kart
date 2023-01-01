import { useRouter } from "next/router";
import React from "react";
import { useProduct } from "../../contexts/product-context";
import { updateCartCount } from "../../utils";
import styles from "./Product.module.css";

const Product = ({
  id,
  imgSrc,
  title,
  actualPrice,
  rating,
  discountPercentage,
  inStock,
  inWishlist,
  cartCount,
}) => {
  const router = useRouter();
  const additionalPrice = (actualPrice * 100) / (100 - discountPercentage);
  const { productList, updateProductList } = useProduct();

  const addToCartHandler = (id) => {
    const updatedProductList = updateCartCount(productList, id, 1);
    updateProductList(updatedProductList);
  };

  return (
    <div className={styles.product_container}>
      <div className={styles.product_top}>
        <img src={imgSrc} />
      </div>
      {inStock ? (
        <div className={styles.product_bottom}>
          <div className={styles.product_info}>
            <h3 className={styles.product_title}>{title}</h3>
            <div>
              <div className={styles.productinfo_row}>
                <span>Rs {actualPrice}</span>
                <span className={styles.additional_price}>
                  {additionalPrice.toFixed(0)}
                </span>
                <span className={"color_green"}>
                  {discountPercentage.toFixed(0)}% off
                </span>
              </div>
              <div className={styles.productinfo_row}>
                <span>Rating</span>
                <span className={rating > 4.2 ? "color_primary" : "color_red"}>
                  {rating}★
                </span>
              </div>
            </div>
          </div>
          <div className={styles.product_cta}>
            <button
              className={cartCount ? "primaryOutline_button" : "primary_button"}
              onClick={() => {
                if (cartCount) {
                  router.push("/cart");
                } else {
                  addToCartHandler(id);
                }
              }}
            >
              {cartCount ? "Already in Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.product_bottom}>
          <h3 className={styles.product_title}>{title}</h3>
          <div className={styles.product_unavailable}>Out of stock</div>
        </div>
      )}
    </div>
  );
};

export default Product;
