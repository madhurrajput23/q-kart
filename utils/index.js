export const toggleWishlist = (products, id) => {
  return products.map((item) => {
    if (item.id === id) {
      return { ...item, inWishlist: !item.inWishlist };
    } else {
      return item;
    }
  });
};

export const updateCartCount = (products, id, count) => {
  return products.map((item) => {
    if (item.id === id) {
      return { ...item, cartCount: count };
    } else {
      return item;
    }
  });
};
