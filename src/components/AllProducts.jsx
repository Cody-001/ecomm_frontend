import React, { useState, useEffect } from 'react';
import Items from './Items';

const AllProducts = () => {
  const [all_Product, setAllProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/allproducts")
      .then((resp) => resp.json())
      .then((data) => setAllProduct(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className='allProducts'>
      <h1>COLLECTION</h1>
      <hr />
      <div className="all-products">
        {all_Product.map((items, index) => {
          return <Items key={index} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />
        })}
      </div>
    </div>
  )
}

export default AllProducts;

