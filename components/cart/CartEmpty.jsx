import { useRouter } from "next/router";
import React from "react";
import styles from "./CartItem.module.css";

const CartEmpty = () => {
  const router = useRouter();
  return (
    <div className={styles.cartEmpty_Box}>
      <h2>Cart is Empty!!</h2>
      <div className={styles.cartEmpty_Button}>
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

export default CartEmpty;
