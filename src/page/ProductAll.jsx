import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    // let url = 'http://localhost:5000/products';
    let url = 'https://my-json-server.typicode.com/asdknkwqndknqkfw/hnm-react-router-practice/db';
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
  }, []);
  
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