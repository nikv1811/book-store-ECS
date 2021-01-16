import React from "react";
import {Card, CardText, CardBody, CardTitle, Button} from "reactstrap";

const CartItem = ({book, addInCart}) => {
    return(
        <Card className="mt-2 mb-1">
            <CardBody style={{textAlign: "left"}}>
                <CardTitle>{book.title}</CardTitle>
                <CardText className="secondary">Authors - {book.authors}</CardText>
                <CardText className="secondary">Rating - {book.average_rating}/5</CardText>
                <CardText className="secondary">Price - {book.price}</CardText>
                <Button color="success" onClick={() => {addInCart(book)}}>Buy Now</Button>
            </CardBody>
        </Card>
    )
}

export default CartItem;