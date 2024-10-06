import React from 'react'
import AddToCard from './AddToCard'
import style from './ProductCard.module.css'


const ProductCard = () => {
  return (
    <div className= {style.card}>
        <AddToCard/>
    </div>
  )
}
 
export default ProductCard