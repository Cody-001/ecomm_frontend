
import React, { useState, useEffect } from 'react';
import Items from './Items';

const AllProducts = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch(`${API_URL}/allproducts`, {
          signal: controller.signal
        });

        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await res.json();

        setAllProduct(data);

      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Error fetching products:', err);
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => controller.abort();

  }, [API_URL]);

  if (loading) {
    return (
      <p style={{ textAlign: 'center' }}>
        Loading products...
      </p>
    );
  }

  if (error) {
    return (
      <p style={{ textAlign: 'center' }}>
        Unable to load products. Please try again.
      </p>
    );
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
