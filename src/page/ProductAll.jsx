import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') ? `?q=${query.get('q')}` : '';
    console.log('searchQuery: ', searchQuery);
    let url = `https://my-json-server.typicode.com/asdknkwqndknqkfw/hnm-react-router-practice/products${searchQuery}`;
    console.log('url: ', url);
    try {
      let response = await axios.get(url);
      console.log('response data: ', response.data);
      setProductList(response.data);
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