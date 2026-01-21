import React from 'react'
import { Link } from 'react-router-dom'

const Items = (props) => {
  const { id, name, image, new_price, old_price } = props
  const API_URL = import.meta.env.VITE_API_URL

  const imageSrc = image
    ? image.startsWith("http")
      ? image
      : `${API_URL}/images/${image}`
    : "/placeholder.png"

  return (
    <div className='items'>
      <Link to={`/product/${id}`}>
        <img
          src={imageSrc}
          alt={name}
          loading="lazy"
          decoding="async"
          width="250"
          height="300"
          className="item-image"
        />

        <p>{name}</p>

        <div className="item-price">
          <div className="item-price-new">
            ${new_price}
          </div>
          <div className="item-price-old">
            ${old_price}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default React.memo(Items)
