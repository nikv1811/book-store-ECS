import React from "react";
import {Card, CardText, CardBody, CardTitle, Button} from "reactstrap";

const CartItem = ({book, addInCart}) => {
    return(
        <Card className="mt-2 mb-1">
            <CardBody className="text-center">
                <CardTitle>{book.title}</CardTitle>
                <CardText className="secondary">{book.authors}</CardText>
                <CardText className="secondary">{book.average_rating}</CardText>
                <CardText className="secondary">{book.price}</CardText>
                <Button color="success" onClick={() => {addInCart(book)}}>Buy Now</Button>
            </CardBody>
        </Card>
    )
}

export default CartItem;