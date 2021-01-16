import React from "react";
import {Container, ListGroup, ListGroupItem, Button, CardHeader, CardBody, Card, CardFooter, Col, Row, CardText} from "reactstrap";

const Cart = ({cartItem, removeBook, buyNow}) => {
    let amount = 0;
    cartItem.forEach(book => {
        amount = parseFloat(amount) + parseFloat(book.price);
    });

    return(
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.bookID}>
                        <Row>
                            <Col>
                            <CardText>{item.title}</CardText>
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">
                                    {item.authors}
                                </div>
                                <span> price :- {item.price}</span>
                                <Button color="warning" onClick={() => removeBook(item)}>Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>


// If everything is empty
                    
                ))}
            </ListGroup>
            {cartItem.length >= 1 ?(
                <Card>
                    <CardHeader>
                        Grand Total
                    </CardHeader>
                    <CardBody>
                        Your amount for {cartItem.length} product is {amount}
                    </CardBody>
                    <CardFooter>
                        <Button onClick={buyNow}> 
                            Pay Here
                        </Button>
                    </CardFooter>
                </Card>
            ) : (
                <h1>Cart is EmptY</h1>
                )}
        </Container>
    )
}

export default Cart;