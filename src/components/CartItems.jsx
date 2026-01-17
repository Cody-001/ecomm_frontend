import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import removecart from "../Assets/Frontend_Assets/cart_cross_icon.png"
import Footer from './Footer'
import Navbar from './Navbar'

const CartItems = () => {
    const {getTotalCartAmount, allProduct, cartItems, removeCart } = useContext(ShopContext)
    return (
        <>
        <Navbar />
        <div className='cartItems'>
            <div className="cartItems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Amount</p>
                <p>Qauntity</p>
                <p>Total</p>
                <p>Remove</p>
                

            </div>
            <hr />
            {allProduct.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div key={e.id}>
                        <div className='cartitems-format cartItems-format-main'>
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>{e.new_price*cartItems[e.id]}</p>
                            <img src={removecart} alt='' onClick={() => { removeCart (e.id)}} className='carditemremove' />
                        </div>
                        <hr />
                    </div>
                }
                return null
            })}
            <div className="cartitem-down">
                <div className="cartitrm-total">
                    <h1>Cart Total</h1>
                    <div className='cartitemdown-container'>
                        <div className="cartitem-total-main">
                            <p>subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>shipping fee</p>
                            <p>free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <h3>total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>


        </div>
        <Footer />
        </>
    )
}

export default CartItems