import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const { isAuth, logout, cartItems, getTotalCart } = useContext(ShopContext);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(getTotalCart());
  }, [cartItems, getTotalCart]);

  const toggleMenu = () => setMobileMenu(prev => !prev);

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setMobileMenu(false);
  };

  return (
    <nav className="navbar">

      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      <ul className={`nav-menu ${mobileMenu ? "active" : ""}`}>
        <li className={activeMenu === "home" ? "active-link" : ""} onClick={() => handleMenuClick("home")}>
          <Link to="/">Home</Link>
        </li>

        <li className={activeMenu === "mens" ? "active-link" : ""} onClick={() => handleMenuClick("mens")}>
          <Link to="/mens">Men</Link>
        </li>

        <li className={activeMenu === "womens" ? "active-link" : ""} onClick={() => handleMenuClick("womens")}>
          <Link to="/womens">Women</Link>
        </li>

        <li className={activeMenu === "kids" ? "active-link" : ""} onClick={() => handleMenuClick("kids")}>
          <Link to="/kids">Kids</Link>
        </li>
      </ul>

      <div className="nav-login-cart">

        <Link to="/adminlogin">
          <button>Admin</button>
        </Link>

        {isAuth ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart" className="nav-cart">
          <img src={cart_icon} alt="cart" />
          <div className="nav-cart-count">{cartCount}</div>
        </Link>

        <div className="min-screen-icon" onClick={toggleMenu}>
          {mobileMenu ? (
            <IoClose className="toggle-icon" />
          ) : (
            <HiOutlineMenuAlt3 className="toggle-icon" />
          )}
        </div>

      </div>

    </nav>
  );
};

export default Navbar;