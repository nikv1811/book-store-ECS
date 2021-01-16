import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { Col, Container, Row } from 'reactstrap';
import CartItem from './CartItem';

const BuyPage = ({addInCart}) => {

    const [books, setBooks] = useState([]);
    const fetchBooks = async() =>{
        const {data} = await Axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json')
        console.log(data);
        setBooks(data)
    }
  
    useEffect(() => {
        fetchBooks()
    }, [])
 
    return(
        <Container fluid>
            <h1>Buy Books</h1>
            <Row>
                {books.map(book =>(
                    <Col md={4} key={book.bookID}>
                        <CartItem book={book} addInCart={addInCart}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default BuyPage;