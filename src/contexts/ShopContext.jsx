import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [allProduct, setAllProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
   const [isAuth, setIsAuth] = useState(
    !!localStorage.getItem("auth-token")
  );

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
  fetch(`${API_URL}/allproducts`)
    .then(resp => resp.json())
    .then(data => setAllProduct(data))
    .catch(err => console.error("Failed to fetch all products:", err));

  const token = localStorage.getItem("auth-token");

  if (!token) return;

  const fetchCart = async () => {
    try {
      const resp = await fetch(`${API_URL}/getcart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ IMPORTANT
        },
      });

      if (resp.status === 401) {
        logout(); // 🔥 auto logout on expiry
        return;
      }

      const data = await resp.json();
      setCartItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch cart:", err);
    }
  };

  fetchCart();
}, [API_URL]);


  
  const addCart = (itemId, size, color) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === itemId && i.size === size && i.color === color);

      if (existing) {
        return prev.map(i =>
          i.id === itemId && i.size === size && i.color === color
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { id: itemId, quantity: 1, size, color }];
    });
  };


  const removeCart = (itemId, size, color) => {
    setCartItems(prev =>
      prev
        .map(i =>
          i.id === itemId && i.size === size && i.color === color
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter(i => i.quantity > 0)
    );
  };


  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => {
      const product = allProduct.find(p => p.id === item.id);
      return product ? total + product.new_price * item.quantity : total;
    }, 0);
  };

const getTotalCart = () => {
  if (!Array.isArray(cartItems)) return 0;
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

const logout = () => {
  localStorage.removeItem("auth-token");
  setIsAuth(false);
  setCartItems([]); // reset cart
};


  const contextValue = {
    allProduct,
    cartItems,
    addCart,
    removeCart,
    getTotalCartAmount,
    getTotalCart,
    isAuth, 
    setIsAuth, 
    logout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;