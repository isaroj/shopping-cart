import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {random, commerce} from 'faker';
import {Container, Row, Col} from 'reactstrap';
import CardItem from './CardItem';

const API_KEY = "563492ad6f917000010000014bb2dbd0fa774076b13e0bd80d1ace1c";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const BuyPage = ({addToCart})=>{
    const [product, setProduct] = useState([]);

    const fetchPhotos = async()=>{
        const {data} = await Axios.get(url, {
            headers: {
                Authorization: API_KEY
            }
        })
        const {photos} = data;
         const allProducts = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName : random.word(),
            productPrice : commerce.price(),
            id : random.uuid()
    }))
    setProduct(allProducts)
    }

   

    useEffect(()=>{
        fetchPhotos();
    },[]);

    return(
        <Container fluid>
           <h1 className="text-center text-success">Buy Page</h1>
            <Row>
                {
                    product.map(prod => (
                        <Col md={4} key={prod.id}>
                            <CardItem product={prod} addToCart={addToCart}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default BuyPage;
