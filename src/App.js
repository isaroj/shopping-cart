import React, {useState} from 'react';
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import  {Container, Row, Col} from 'reactstrap';
import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart';

function App() {

const [cartItems, setCartItems] = useState([]);

 const addToCart = item =>{
    const isAlreadyAdded = cartItems.findIndex(function(eachItem){
        return item.id === eachItem.id;
    });

    if(isAlreadyAdded !== -1){
      toast("Item is already added in the cart",{
        type: "error"
      })
      return;
    }
    setCartItems([...cartItems, item])
 }

 const buyItems = ()=>{
   setCartItems([]);
   toast("Purchase completed successfully",{
     type: "success"
   })
 }

 const removeItems = (item)=>{
   setCartItems(cartItems.filter(eachItem => eachItem.id !== item.id));
 }


  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addToCart={addToCart}/>
        </Col>
        <Col md="4">
          <Cart 
            cartItem={cartItems}
            removeItems= {removeItems}
            buyItems=  {buyItems}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
