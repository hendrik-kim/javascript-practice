import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };

    fetchProduct();
  }, [match]);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        {/* <Col md={1}>
          <Row className="mb-3">
            <Image src={product.image} alt={product.name} fluid />
          </Row>
          <Row className="mb-3">
            <Image src={product.image} alt={product.name} fluid />
          </Row>
        </Col> */}
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
          <Row className="my-3">
            <Col>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 1 ? (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty:</Col>
                    <Col>{product.countInStock}</Col>
                  </Row>
                </ListGroup.Item>
              ) : (
                ''
              )}

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'Available' : 'No available'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Wish List
                </Button>
                <Button
                  className="btn-block btn-dark"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Bidding
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
