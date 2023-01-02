import React from "react";
import Product from "../../components/products/Product";
import WishlistEmpty from "../../components/wishlist/WishlistEmpty";
import { useProduct } from "../../contexts/product-context";
import styles from "./Wishlist.module.css";

const Wishlist = () => {
  const { productList } = useProduct();
  const wishlistProduct = productList.filter(
    (product) => product.inWishlist === true
  );

  return wishlistProduct?.length > 0 ? (
    <div className={styles.products_list}>
      {wishlistProduct?.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  ) : (
    <WishlistEmpty />
  );
};

export default Wishlist;
