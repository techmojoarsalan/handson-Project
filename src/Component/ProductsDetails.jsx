import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useAppContext } from '../Context';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
// import products from "../products.json"

function ProductsDetails() {
    let navigate = useNavigate();
    function handleClick() {
        navigate("/products")
    }
    const [details, setDetails] = useState([])
    const { products } = useAppContext();
    const { productId } = useParams();
    // console.log("this is ",productId )
    useEffect(() => {
        const data = products.filter((item) => item.id === parseInt(productId));
        setDetails(data)
    }, [productId])

    return (
        <>
            <Button onClick={handleClick}>back</Button>
            <Link to='/products'>Products</Link>
            {details.map((item,idx) =><div key={productId} className='d-flex justify-content-center' >
                    <Card  style={{ width: '18rem' }}>
                        <Carousel>
                        {item.images.map((img)=> <Carousel.Item><Card.Img variant="top" src={img} /> </Carousel.Item>)}
                        {/* <Card.Img variant="top" src={item.images.map((i)=>i)} /> */}
                    
                        </Carousel>
                        {/* <Card.Img  variant="top" src={item.images[2]} /> */}
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Button variant="primary"> price : ${item.price}</Button>
                        </Card.Body>
                    </Card>
                </div>
            )}
        </>
    )
}
export default ProductsDetails