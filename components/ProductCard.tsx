
import React from 'react'
import { Product } from '@/sanity.types';

const ProductCard = ({ product}: {product: Product}) => {

  return (
    <div>
        <img src={product.image} alt={product.name || 'Product Image'} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>

    </div>
  )
}

export default ProductCard