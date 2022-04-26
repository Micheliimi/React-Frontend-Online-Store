import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import ShoppingCart from './components/ShopingCart';
import ProductDetails from './components/ProductDetails';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={ MainPage } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route
            exact
            path="/productdetails"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
