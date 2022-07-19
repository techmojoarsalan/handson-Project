import React from 'react'
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import {Link} from "react-router-dom";

function ProductCard({ products, title, price, description, images }) {
  // console.log(images[0]);
  return (
    <>
      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={images[0]} />
        <Card.Body>
          <Card.Title> {title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button className='m-3' variant="primary">Price {price}</Button>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card> */}


      <Container>
        <Row xs={1} md={4} >
         
          {products.map((item)=>
           <Link to={`/product/${item.id}`} key={item.id}>
          <Col >
            <Card  className='image'>
              <Card.Img  variant="top" src={item.images[0]} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Card.Text>
                 Rating : {item.rating}
                </Card.Text>
              </Card.Body>
              <Button variant="primary">Price ${item.price}</Button>
            
            </Card>
          </Col>
          </Link>
          )}
         
        </Row>
      </Container>
    </>
  )
}

export default ProductCard