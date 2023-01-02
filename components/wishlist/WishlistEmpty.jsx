import { useRouter } from "next/router";
import React from "react";
import styles from "./Wishlist.module.css";

const WishlistEmpty = () => {
  const router = useRouter();
  return (
    <div className={styles.wishlistEmpty_Box}>
      <h2>Wishlist is Empty!!</h2>
      <div className={styles.wishlistEmpty_Button}>
        <button
          className="primary_button"
          onClick={() => {
            router.push("/products");
          }}
        >
          Go to Products
        </button>
      </div>
    </div>
  );
};

export default WishlistEmpty;
