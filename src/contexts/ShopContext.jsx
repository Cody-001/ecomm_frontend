import React, { createContext, useState, useEffect } from 'react';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [allProduct, setAllProduct] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Fetch all products
    fetch(`${API_URL}/allproducts`)
      .then((resp) => resp.json())
      .then((data) => setAllProduct(data))
     
      .catch((err) => console.error("Failed to fetch all products:", err));

    // Fetch cart if user is authenticated
    if (localStorage.getItem("auth-token")) {
      fetch(`${API_URL}/getcart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      })
        .then((resp) => resp.json())
        .then((data) => setCartItems(data))
        .catch((err) => console.error("Failed to fetch cart:", err));
    }
  }, [API_URL]);

  const addCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    if (localStorage.getItem("auth-token")) {
      fetch(`${API_URL}/addtocart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((err) => console.error("Failed to add to cart:", err));
    }
  };

  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if (localStorage.getItem("auth-token")) {
      fetch(`${API_URL}/removefromcart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemid: itemId }),
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((err) => console.error("Failed to remove from cart:", err));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = allProduct.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCart = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCart,
    getTotalCartAmount,
    allProduct,
    cartItems,
    addCart,
    removeCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;