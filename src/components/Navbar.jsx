import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import { useContext, useState } from 'react'
import {Link} from "react-router-dom"
import { ShopContext } from '../contexts/ShopContext'

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const{getTotalCart} = useContext(ShopContext)
  return (
    <div className='navbar' id='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link to={"/"}>Home</Link></li>
            <li onClick={()=>{setMenu("mens")}}><Link to={"/mens"}>Men</Link></li>
            <li onClick={()=>{setMenu("womens")}}><Link to={"/womens"}>Women</Link></li>
            <li onClick={()=>{setMenu("kids")}}><Link to={"/kids"}>Kids</Link></li>
        </ul>
        <div className='nav-login-cart'>
           <span><Link to={"/adminlogin"}><button>Admin</button></Link></span>
           {localStorage.getItem("auth-token")? <button onClick={()=>{localStorage.removeItem("auth-token"), window.location.replace("/")}}>Logout</button>:
            <span><Link to={"/login"}><button>Login</button></Link></span>
            }
            
            <Link to={"/cart"}><img src={cart_icon} alt="" /></Link>
            <div className='nav-cart-count'>{getTotalCart()}</div>
        </div>
        <hr />
        
    </div>
  )
}

export default Navbar