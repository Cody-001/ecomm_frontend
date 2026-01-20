import React from 'react'
import { Link } from 'react-router-dom'

const Items = (props) => {
  
  return (
    <div className='items'> 
    <Link to={`/product/${props.id}`}><img src={props.image} alt="" />
    
    <p>{props.name}</p>
    <div className="item-price">
        <div className="item-price-new">
            ${props.new_price}
        </div>
        <div className="item-price-old">  
            ${props.old_price}
        </div>
    </div>
    </Link>
        
    </div>
  )

}

export default Items