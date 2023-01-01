import React from "react";
import CartEmpty from "../../components/cart/CartEmpty";
import CartItem from "../../components/cart/CartItem";
import { useProduct } from "../../contexts/product-context";
import styles from "./cart.module.css";

const Cart = () => {
  const { productList } = useProduct();
  const cartList = productList.filter((product) => product.cartCount > 0);

  const totalQuantity = cartList?.reduce((acc, val) => {
    return val.cartCount + acc;
  }, 0);

  const itemsPrice = cartList?.reduce((acc, val) => {
    return val.actualPrice * val.cartCount + acc;
  }, 0);

  const totalAmount = itemsPrice > 499 ? itemsPrice : itemsPrice + 50;

  return cartList.length ? (
    <div className={styles.cart_page}>
      <div className={styles.cartlist}>
        {cartList?.map((product) => (
          <CartItem key={product.id} {...product} />
        ))}
      </div>
      <div className={styles.cartBillContainer}>
        <div className={styles.cartBill}>
          <h4>PRICE DETAILS</h4>
          <div className={styles.cartBill_info}>
            <div className={styles.cartBill_infoRow}>
              <div>Total Quantity</div>
              <div>{totalQuantity}</div>
            </div>
            <div className={styles.cartBill_infoRow}>
              <div>Price ({cartList.length} items)</div>
              <div>{itemsPrice}</div>
            </div>
            <div className={styles.cartBill_infoRow}>
              <div>Delivery Charge</div>
              <div className={styles.cartBill_free}>
                {itemsPrice > 499 ? (
                  <>
                    <del className="color_red">Rs 50</del>{" "}
                    <ins className="color_green">Free</ins>
                  </>
                ) : (
                  <div>Rs 50</div>
                )}
              </div>
            </div>
            <div className={styles.cartBill_infoRow}>
              <div className={styles.cartBill_total}>Total Amount</div>
              <div>{totalAmount}</div>
            </div>
          </div>
          <div className={styles.placeOrder}>
            <button className="primary_button">Confirm Order</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <CartEmpty />
  );
};

export default Cart;
