import React from "react";
import CartItem from "../../components/cart/CartItem";
import styles from "./cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cart_page}>
      <div className={styles.cartlist}>
        <CartItem
          key={78687}
          imgSrc={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
          title={"title"}
          description={"this is description"}
          actualPrice={400}
          discountPercentage={20}
          rating={5}
          inStock={true}
        />
        <CartItem
          key={78687}
          imgSrc={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
          title={"title"}
          description={"this is description"}
          actualPrice={400}
          discountPercentage={20}
          rating={5}
          inStock={true}
        />
        <CartItem
          key={78687}
          imgSrc={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
          title={"title"}
          description={"this is description"}
          actualPrice={400}
          discountPercentage={20}
          rating={5}
          inStock={true}
        />
        <CartItem
          key={78687}
          imgSrc={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"}
          title={"title"}
          description={"this is description"}
          actualPrice={400}
          discountPercentage={20}
          rating={5}
          inStock={true}
        />
      </div>
      <div className={styles.cartBillContainer}>
        <div className={styles.cartBill}>
          <h4>PRICE DETAILS</h4>
          <div className={styles.cartBill_info}>
            <div className={styles.cartBill_infoRow}>
              <div>Price{"(3items)"}</div>
              <div>{1000}</div>
            </div>
            <div className={styles.cartBill_infoRow}>
              <div>Total Items</div>
              <div>{3}</div>
            </div>
            <div className={styles.cartBill_infoRow}>
              <div>Delivery Charge</div>
              <div className={styles.cartBill_free}>Free</div>
            </div>
            <div className={styles.cartBill_infoRow}>
              <div className={styles.cartBill_total}>Total Amount</div>
              <div>{4000}</div>
            </div>
          </div>
          <div className={styles.placeOrder}>
          <button className="primary_button">Confirm Order</button>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Cart;
