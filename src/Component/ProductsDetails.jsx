import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useAppContext } from '../Context';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, Link } from "react-router-dom"
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
            {details.map((item) =>

                <Card key={item.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.images[0]} />
                    {/* <Card.Img  variant="top" src={item.images[2]} /> */}

                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button variant="primary"> price : ${item.price}</Button>
                    </Card.Body>
                </Card>
            )}
        </>
    )
}
export default ProductsDetails