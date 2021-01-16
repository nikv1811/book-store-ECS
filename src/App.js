import React, {useState} from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify';
import BuyPage from './components/BuyPage';
import { Col, Container, Row } from 'reactstrap';
import Cart from './components/Cart';

const App = () => {

  const [cartItem, setCartItem] = useState([]);

  const addInCart = item =>{

    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.bookID === item.bookID
    })

    if(isAlreadyAdded !== -1){
      toast("Book already added in cart", {type:"warning"});
      return;
    }

    setCartItem([...cartItem, item])

  }

  const removeBook = item => {
    setCartItem(cartItem.filter(eachItem => eachItem.bookID !== item.bookID));
  }

  const buyNow = () => {
    setCartItem([])

    toast("purchase Complete", {type: "success"})
  }
  return(
    <Container fluid className="bg-dark">
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart}/>
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeBook={removeBook} buyNow={buyNow}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App;