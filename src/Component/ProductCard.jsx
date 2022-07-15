import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProductCard({id, title, price,description ,images}) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images[0]} />
      <Card.Body>
        <Card.Title> {title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button className='m-3' variant="primary">Price {price}</Button>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default ProductCard