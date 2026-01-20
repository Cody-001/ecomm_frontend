import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import removecart from "../Assets/Frontend_Assets/cart_cross_icon.png"
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const CartItems = () => {
  const {
    getTotalCartAmount,
    allProduct,
    cartItems,
    removeCart
  } = useContext(ShopContext)


  const cartArray = Object.values(cartItems || {})

  return (
    <>
      <Navbar />

      <div className='cartItems'>
        <div className="cartItems-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Variant</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {cartItems.map((item, index) => {
          const product = allProduct.find(p => p.id === item.id);
          if (!product) return null;

          return (
            <div className="cartItems-format-main" key={index}>
              <img
                src={product.image || "/placeholder.png"}
                alt={product.name}
                className="carticon-product-icon"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <p>{product.name}</p>
              <p>${product.new_price}</p>
              <p>Qty: {item.quantity}</p>
              <p><span>Size: {item.size}</span> <br />
               <span>Color: {item.color}</span>
               </p>
              <p>Total: ${product.new_price * item.quantity}</p>
              <button onClick={() => removeCart(item.id, item.size, item.color)}>Remove</button>
            </div>
          );
        })}

        <div className="cartitem-down">
          <div className="cartitrm-total">
            <h1>Cart Total</h1>

            <div className='cartitemdown-container'>
              <div className="cartitem-total-main">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>

              <hr />

              <div className="cartitems-total-items">
                <p>Shipping fee</p>
                <p>Free</p>
              </div>

              <hr />

              <div className="cartitems-total-items">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>

              <Link to="/order">
                <button className='checkout-page'>
                  PROCEED TO CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default CartItems
