import React, { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ShopContext } from '../contexts/ShopContext'

const Order = () => {
    const {getTotalCartAmount } = useContext(ShopContext)
    
    const handleCheckout = (e) => {
    e.preventDefault(); // prevent page reload
    const total = getTotalCartAmount();
    alert(`Items sent! Total amount: $${total}`);
  };
    return (
        <>
        <Navbar />
             <div className='order'>
            <div className="billing-area">
                <form>
                    <h2>Billing details</h2>
                    <div className="billing-form">
                        <ul className="billing-ul input-2">
                            <li className="billing-li">
                                <label>First name</label>
                                <input type="text" name="f-name" placeholder="First name" />
                            </li>
                            <li className="billing-li">
                                <label>Last name</label>
                                <input type="text" name="l-name" placeholder="Last name" />
                            </li>
                        </ul>
                        <ul className="billing-ul">
                            <li className="billing-li">
                                <label>Company name (Optional)</label>
                                <input type="text" name="company details" placeholder="Company name" />
                            </li>
                        </ul>
                        <ul className="billing-ul">
                            <li className="billing-li">
                                <label>Street address</label>
                                <input type="text" name="address" placeholder="Street address" />
                            </li>
                        </ul>
                        <ul className="billing-ul">
                            <li className="billing-li">
                                <label>Apartment,suite,unit etc. (Optional)</label>
                                <input type="text" name="--" placeholder="Optional" />
                            </li>
                        </ul>
                        <ul className="billing-ul">
                            <li className="billing-li">
                                <label>Country</label>
                                <select>
                                    <option>Select a country</option>
                                    <option>United country</option>
                                    <option>Russia</option>
                                    <option>italy</option>
                                    <option>France</option>
                                    <option>Ukraine</option>
                                    <option>Germany</option>
                                    <option>Australia</option>
                                </select>
                            </li>
                        </ul>
                        <ul className="billing-ul">
                            <li className="billing-li">
                                <label>State</label>
                                <input type="text" name="city" placeholder="State" />
                            </li>
                        </ul>
                        <ul className="billing-ul">
                            <li className="billing-li">
                                <label>City</label>
                                <input type="text" name="city" placeholder="City" />
                            </li>
                        </ul>
                        <ul className="billing-ul">
                            <li className="billing-li">
                                <label>Postcode</label>
                                <input type="text" name="--" placeholder="Postcode" />
                            </li>
                        </ul>
                        <ul className="billing-ul input-2">
                            <li className="billing-li">
                                <label>Email address</label>
                                <input type="text" name="mail" placeholder="Email address" />
                            </li>
                            <li className="billing-li">
                                <label>Phone number</label>
                                <input type="text" name="phone" placeholder="Phone number" />
                            </li>
                        </ul>
                    </div>
                </form>
                <div className="billing-details">
                    <form>
                        <h2>Shipping details</h2>
                        <ul className="shipping-form">
                            <li className="check-box">
                                <input type="checkbox" name="--" />
                                <label>Ship to a different address?</label>
                            </li>
                            <li className="comment-area">
                                <label>Order notes(Optional)</label>
                                <textarea name="comments" rows="4" cols="80"></textarea>
                            </li>
                        </ul>

                    </form>
                </div>
            </div>

            <div class="order-area">
                <h2>Your order</h2>
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
                <form>
                    <ul class="order-form">
                        <h2>Payment details</h2>
                        <li>
                            <input type="checkbox" name="--" />
                            <label>Direct bank transfer</label>
                        </li>
                        <li>
                            <input type="checkbox" name="--" />
                            <label>Cheque payment</label>
                        </li>
                        <li>
                            <input type="checkbox" name="--" />
                            <label>Paypal</label>
                        </li>
                        <li class="pay-icon">
                            <a href="javascript:void(0)"><i class="fa fa-credit-card"></i></a>
                            <a href="javascript:void(0)"><i class="fa fa-cc-visa"></i></a>
                            <a href="javascript:void(0)"><i class="fa fa-cc-paypal"></i></a>
                            <a href="javascript:void(0)"><i class="fa fa-cc-mastercard"></i></a>
                        </li>
                    </ul>
                </form>
                <div class="checkout-btn">
                    <a href=""  onClick={handleCheckout}  class="btn-style1">Place order</a>
                </div>
            </div>

        </div>
        <Footer />
        </>
       
    )
}

export default Order