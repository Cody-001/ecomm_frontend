import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ShopContext } from "../contexts/ShopContext";
const API_URL = import.meta.env.VITE_API_URL;

const Order = () => {
  const { getTotalCartAmount } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    companyName: "",
    address: "",
    apartment: "",
    country: "",
    state: "",
    city: "",
    postcode: "",
    email: "",
    phone: "",
    differentAddress: false,
    comments: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    const orderData = {
      ...formData,
      totalAmount: getTotalCartAmount(),
    };

    const token = localStorage.getItem("auth-token");

  if (!token) {
    alert("You must be logged in to place an order.");
    return; 
}


    try {
      const response = await fetch(`${API_URL}/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("auth-token")}`,
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Order failed:", data.message);
        alert("Failed to place order: " + data.message);
      } else {
        console.log("Order successful:", data);
        alert("Order placed successfully!");
        // Optional: reset form or clear cart
        setFormData({
          firstname: "",
          lastname: "",
          companyName: "",
          address: "",
          apartment: "",
          country: "",
          state: "",
          city: "",
          postcode: "",
          email: "",
          phone: "",
          differentAddress: false,
          comments: "",
          paymentMethod: "",
        });
      }
    } catch (err) {
      console.error("Server error:", err);
      alert("Server error, please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div >
        <form className="order" onSubmit={handleCheckout}>
          {/* Billing Area */}
          <div className="billing-area">
            <h2>Billing details</h2>
            <div className="billing-form">
              <ul className="billing-ul input-2">
                <li className="billing-li">
                  <label>First name</label>
                  <input
                    name="firstname"
                    placeholder="First name"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </li>
                <li className="billing-li">
                  <label>Last name</label>
                  <input
                    name="lastname"
                    placeholder="Last name"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </li>
              </ul>

              <ul className="billing-ul">
                <li className="billing-li">
                  <label>Company name (Optional)</label>
                  <input
                    name="companyName"
                    placeholder="Company name"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </li>
              </ul>

              <ul className="billing-ul">
                <li className="billing-li">
                  <label>Street address</label>
                  <input
                    name="address"
                    placeholder="Street address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </li>
              </ul>

              <ul className="billing-ul">
                <li className="billing-li">
                  <label>Apartment, suite, unit etc. (Optional)</label>
                  <input
                    type="text"
                    name="apartment"
                    placeholder="Optional"
                    value={formData.apartment}
                    onChange={handleChange}
                  />
                </li>
              </ul>

              <ul className="billing-ul">
                <li className="billing-li">
                  <label>Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a country</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Russia">Russia</option>
                    <option value="Italy">Italy</option>
                    <option value="France">France</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="Germany">Germany</option>
                    <option value="Australia">Australia</option>
                  </select>
                </li>
              </ul>

              <ul className="billing-ul">
                <li className="billing-li">
                  <label>State</label>
                  <input
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </li>
              </ul>

              <ul className="billing-ul">
                <li className="billing-li">
                  <label>City</label>
                  <input
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </li>
              </ul>

              <ul className="billing-ul">
                <li className="billing-li">
                  <label>Postcode</label>
                  <input
                    name="postcode"
                    placeholder="Postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    required
                  />
                </li>
              </ul>

              <ul className="billing-ul input-2">
                <li className="billing-li">
                  <label>Email address</label>
                  <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </li>
                <li className="billing-li">
                  <label>Phone number</label>
                  <input
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </li>
              </ul>
            </div>
              {/* Shipping Area */}
          <div className="billing-details">
            <h2>Shipping details</h2>
            <label>
              <input
                type="checkbox"
                name="differentAddress"
                checked={formData.differentAddress}
                onChange={handleChange}
              />
              Ship to a different address?
            </label>
            <div className="comment-area">
              <label>Order notes (Optional)</label>
              <textarea
                name="comments"
                placeholder="Order notes"
                value={formData.comments}
                onChange={handleChange}
              />
            </div>
          </div>
          </div>

        

          {/* Order Summary */}
          <div className="order-area">
            <h2>Your order</h2>
            <p>Total: ${getTotalCartAmount()}</p>

            <h2>Payment details</h2>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="bank_transfer"
                checked={formData.paymentMethod === "bank_transfer"}
                onChange={handleChange}
                required
              />
              Direct bank transfer
            </label>

            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cheque"
                checked={formData.paymentMethod === "cheque"}
                onChange={handleChange}
              />
              Cheque payment
            </label>

            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === "paypal"}
                onChange={handleChange}
              />
              Paypal
            </label>

            <button type="submit" className="btn-style1">
              Place order
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Order;
