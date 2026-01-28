import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import arrow_icon from "../Assets/Frontend_Assets/arrow.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { isAuth, logout, getTotalCart } = useContext(ShopContext);

  return (
    <div className="navbar" id="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}><Link to="/">Home</Link></li>
        <li onClick={() => setMenu("mens")}><Link to="/mens">Men</Link></li>
        <li onClick={() => setMenu("womens")}><Link to="/womens">Women</Link></li>
        <li onClick={() => setMenu("kids")}><Link to="/kids">Kids</Link></li>
      </ul>

      <div className="min-screen-icon">
        <span><img src={arrow_icon} alt="" /></span>
      </div>

      <div className="nav-login-cart">
        <Link to="/adminlogin"><button>Admin</button></Link>

        {isAuth ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login"><button>Login</button></Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>

        <div className="nav-cart-count">{getTotalCart()}</div>
      </div>

      <hr />
    </div>
  );
};

export default Navbar;
