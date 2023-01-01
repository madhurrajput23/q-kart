import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

function ProductProvider(props) {
  const router = useRouter();
  const [productList, setProductList] = useState([]);

  const updateProductList = (products) => {
    setProductList(products);
    localStorage?.setItem("products", JSON.stringify(products));
  };

  useEffect(() => {
    const localProductList = JSON.parse(localStorage?.getItem("products"));
    localProductList?.length > 0 && setProductList(localProductList);
  }, [router.isReady]);

  const value = {
    productList,
    updateProductList,
  };

  return <ProductContext.Provider value={value} {...props} />;
}

function useProduct() {
  return useContext(ProductContext);
}

export { ProductProvider, useProduct };
