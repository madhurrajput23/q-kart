import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../../components/products/Product";
import style from "./products.module.css";

const products = () => {
  const [productsList, setProductsList] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProductsList(res.data.products);
    } catch (error) {
      console.log("failed to fetch products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={style.products_list}>
      {productsList?.map((product) => (
        <Product
          key={product.id}
          imgSrc={product.thumbnail}
          title={product.title}
          actualPrice={product.price}
          discountPercentage={product.discountPercentage}
          rating={product.rating}
          inStock={product.stock > 50 ? true : false}
        />
      ))}
    </div>
  );
};

export default products;
