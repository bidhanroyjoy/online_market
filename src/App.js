import React, { useState } from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './common/header/Header';
import Pages from './pages/Pages';


function App() {
  const [CartItem, setCartItem] = useState([])
  return (
    <>
      <Router>
        <Header CartItem={CartItem}/>
        <Switch>
          <Route path='/' exact>
            <Pages   />
          </Route>
          {/* <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
