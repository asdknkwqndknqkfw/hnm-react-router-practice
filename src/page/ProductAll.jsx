import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const location = useLocation();
  const [query, setQuery] = useState('');

  const getProducts = async () => {
    const query = new URLSearchParams(location.search);
    let searchQuery = query.get('q') || '';
    console.log('searchQuery: ', searchQuery);
    let url = 'https://my-json-server.typicode.com/asdknkwqndknqkfw/hnm-react-router-practice/db?q=${searchQuery}';
    try {
      let response = await axios.get(url);
      console.log('response: ', response);
      // setProductList(response.data);
      setProductList(response.data.products);
    } catch (error) {
      console.log('getProducts error', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  
  return (
    <div>
      {/* item을 가운데로 모이게 함 */}
      <Container>
        <Row>
          {productList.map((item, index) => (
            <Col lg={3} key={index}>
              <ProductCard item={item} />
            </Col>
          ))}  
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll