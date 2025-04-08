import React from 'react'

const ProductCard = ({item}) => {

  return (
    <div className='product-card'>
      <img src={item?.img}></img>
      <div>{item?.choice ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}원</div>
      <div>{item?.choice ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard