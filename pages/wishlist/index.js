import React from "react";
import Product from "../../components/products/Product";
import { useProduct } from "../../contexts/product-context";
import styles from "./Wishlist.module.css";

const Wishlist = () => {
  const { productList } = useProduct();

  return (
    <div className={styles.products_list}>
      {productList?.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Wishlist;
