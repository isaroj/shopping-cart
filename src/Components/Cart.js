import React from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    ListGroup,
    ListGroupItem,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
} from 'reactstrap';

const Cart = ({cartItem, removeItems, buyItems})=>{
    let amount = 0;
    cartItem.forEach(item =>{
        amount = parseFloat(amount) + parseFloat(item.productPrice);
    });

    return(
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {cartItem.map(item =>(
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img 
                                    height={80}
                                    src = {item.tinyImage}
                                />
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">
                                    {item.productName}
                                </div>
                                <span>price: - {item.productPrice}</span>
                                <Button 
                                color="danger"
                                onClick={()=> removeItems(item)}
                                >Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
            {
                cartItem.length >=1 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>
                            Grand total
                        </CardHeader>
                        <CardBody>
                            Your amount for {cartItem.length} products is  : {amount}
                        </CardBody>
                        <CardFooter>
                            <Button 
                            color="success"
                            onClick={buyItems}>pay here</Button>
                        </CardFooter>
                    </Card>
                ): (
                    <h1 className="text-warning">Cart Is Empty</h1>
                )
            }
        </Container>
    )
}


export default Cart;