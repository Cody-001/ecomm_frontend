import React, { useContext, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import dropdown_icon from "../Assets/Frontend_Assets/dropdown_icon.png"
import Items from '../components/Items'
import Navbar from '../components/Navbar'
import Subcategory from './Subcategory'
import Footer from '../components/Footer'


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const filteredProducts = all_product.filter(item => 
    props.category === item.category && 
    (selectedSubcategory ? item.subcategory === selectedSubcategory : true)
  );

  return (
    <div className='shop-category'>
      <Navbar />
      <img className='banner' src={props.banner} alt="" />
      <div className="shop-category-indexsort">
        <p><span>showing 1-{filteredProducts.length}</span> out of {filteredProducts.length} products</p>
      </div>
      <Subcategory onSelectSubcategory={setSelectedSubcategory} selectedSubcategory={selectedSubcategory} />
      <div className="shopcategory-products">
        {filteredProducts.map((items, index) => (
          <Items key={index} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default ShopCategory;