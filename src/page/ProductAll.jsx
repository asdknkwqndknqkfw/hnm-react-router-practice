import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    try {
      let response = await axios.get(url);
      setProductList(response.data);
    } catch (error) {
      console.log('getProducts error', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  return (
    <div>
      <ProductCard />
    </div>
  )
}

export default ProductAll