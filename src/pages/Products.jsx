import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import { useParams } from 'react-router-dom'
import ProductsDisplay from '../components/ProductsDisplay'

const Products = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <ProductsDisplay product={product}/>
      
    </div>
  )
}

export default Products