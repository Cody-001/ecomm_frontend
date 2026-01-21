import React, { useState, useEffect } from 'react';
import Items from './Items';

const AllProducts = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/allproducts`)
      .then(res => res.json())
      .then(data => setAllProduct(data))
      .catch(err => console.error("Error fetching products:", err))
      .finally(() => setLoading(false));
  }, [API_URL]);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading products...</p>;
  }

  return (
    <div className="allProducts">
      <h1>COLLECTION</h1>
      <hr />
      <div className="all-products">
        {allProduct.map(item => (
          <Items
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
