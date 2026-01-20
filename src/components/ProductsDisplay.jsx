import React, { useContext } from 'react'
import star_icon from "../Assets/Frontend_Assets/star_icon.png"
import star_dull_icon from "../Assets/Frontend_Assets/star_dull_icon.png"
import Navbar from './Navbar';
import Footer from './Footer';
import { ShopContext } from '../contexts/ShopContext';

const ProductsDisplay = (props) => {
    const {product} =props;
    const {addCart} = useContext(ShopContext)
  return (
    <>
    <Navbar/>

        <div className='productDisplay'>
        <div className="productDisplay-left">
        <div className="produtdisplay-img-list">
           <img src={product.image || "/placeholder.png" } />
            <img src={product.image || "/placeholder.png" } />
            <img src={product.image || "/placeholder.png" } />
           <img src={product.image || "/placeholder.png" } />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image || "/placeholder.png" } />
        </div>
        </div>
        <div className="productDisplay-right">
            <h1>{product.name}</h1>
            <div className="productdispaly-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-priceold">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-pricenew">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                A lightweight, usually knitted, pullover, shirt, 
                close-fitting and Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Blanditiis veritatis dignissimos, 
                voluptatibus 
                neque pariatur corporis asperiores nisi atque a magni.
            </div>
            <div className="productdisplay-right-size">
                <h1>slect size</h1>
                <div className="productdisplay-avail-right-size">
                    <div><button>S</button></div>
                    <div><button>L</button></div>
                    <div><button>XL</button></div>
                    <div><button>XXL</button></div>
                </div>
            </div>
            <div className="productdisplay-right-color">
                <h1>available color</h1>
                <div className="productdisplay-right-avail-color">
                    <div className='blueProduct'><button>blue</button></div>
                    <div className='blackProduct'><button>black</button></div>
                    <div className='whiteProduct'><button>white</button></div>
                </div>
            </div>
            <button className='addTo cart' onClick={()=>{addCart(product.id)}}>Add To Cart</button>
            <p className='display-right-category'><span className='cat'>Category:</span> <span>Women, t-shirt, crop Top</span></p>
            <p className='display-right-category'><span className='cat'>Category:</span> <span>Modern, Latest</span></p>
        </div>
    </div>
    <Footer />
    </>
    

  )
}

export default ProductsDisplay