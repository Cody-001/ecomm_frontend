
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ShopCategory from './pages/ShopCategory'
import Products from './pages/Products'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import men_banner from "./Assets/Frontend_Assets/banner_mens.png"
import women_banner from "./Assets/Frontend_Assets/banner_women.png"
import kid_banner from "./Assets/Frontend_Assets/banner_kids.png"
import Adminlogin from './pages/AdminLogin'


function App() {

  return (
    <div>
      <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>} />
      <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
      <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
     

      <Route path='product' element={<Products/>}>
        <Route path=':productId' element={<Products />} />
      </Route>

      
      <Route path="/adminlogin" element={<Adminlogin />}/>
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<LoginSignup />} />
      <Route path='/admin-login' element={<AdminLogin />} />

    </Routes>
   
    </BrowserRouter>

    </div>
  )
}

export default App
