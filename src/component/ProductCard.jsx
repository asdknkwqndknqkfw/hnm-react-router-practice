import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item?.id}`)
  };

  return (
    <div className='product-card' onClick={showDetail}>
      <img src={item?.img}></img>
      <div>{item?.choice ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}원</div>
      <div>{item?.choice ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard