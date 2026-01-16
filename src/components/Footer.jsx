import React from 'react'
import footer_logo from "../Assets/Frontend_Assets/logo_big.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
            <li>Products</li>
        </ul>
        
        <div className="copy-right">
            <hr />
            <p>Copyright @ 2026 - All Right Reservedd</p>
        </div>
    </div>
  )
}

export default Footer