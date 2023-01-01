import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../../components/products/Product";
import { useProduct } from "../../contexts/product-context";
import styles from "./products.module.css";

const products = () => {
  const { productList, updateProductList } = useProduct();
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      const fetchedProducts = res.data.products;
      const parsedProducts = fetchedProducts.map((product) => {
        return {
          id: product.id,
          imgSrc: product.thumbnail,
          title: product.title,
          actualPrice: product.price,
          discountPercentage: product.discountPercentage,
          rating: product.rating,
          inStock: product.stock > 50 ? true : false,
          inWishlist: false,
          cartCount: 0,
        };
      });
      updateProductList(parsedProducts);
    } catch (error) {
      console.log("failed to fetch products", error);
    }
  };

  useEffect(() => {
    const localProductList = JSON.parse(localStorage?.getItem("products"));
    if (!localProductList) {
      fetchProducts();
    }
  }, []);

  return (
    <div className={styles.products_list}>
      {productList?.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default products;
