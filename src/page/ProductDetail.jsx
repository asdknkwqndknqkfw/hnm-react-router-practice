import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/asdknkwqndknqkfw/hnm-react-router-practice/products/${id}`
    try {
      let response = await axios.get(url);
      console.log('response: ', response);
      setProduct(response.data);
    } catch (error) {
      console.log('getProductDetail error', error);
    }
  }

  useEffect(() => {
    getProductDetail()
  }, []);

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} alt={product?.name} />
        </Col>
        <Col className='product-info'>
          <div className='product-title'>{product?.title}</div>
          <div className='product-price'>{product?.price}원</div>
          <div className='product-choice'>{product?.choice ? "Conscious choice" : ""}</div>
          <select value={selectedOption} onChange={handleChange} className='product-select'>
            <option value="">사이즈 선택</option>
            {product?.size?.map((size, index) => (
              <option value={size} key={index}>{size}</option>
            ))}
          </select>
          <button className='product-add-button'>추가</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail