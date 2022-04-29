import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import ShoppingCart from './components/ShopingCart';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    const result = JSON.parse(localStorage.getItem('cart'));
    this.setState({
      cart: result || [],
    });
  }

  addToCart = (title, price, thumbnail, availableQuantity) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, { title, price, thumbnail, availableQuantity }],
    }), () => {
      const { cart } = this.state;
      localStorage.setItem('cart', JSON.stringify(cart));
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={ (props) => (<MainPage
              { ...props }
              addToCart={ this.addToCart }
              cart={ cart }
            />) }
          />
          <Route
            exact
            path="/shoppingcart"
            render={ (props) => (
              <ShoppingCart
                { ...props }
                addToCart={ this.addToCart }
                cart={ cart }
              />
            ) }
          />
          <Route
            exact
            path="/productdetails"
            render={ (props) => (
              <ProductDetails
                { ...props }
                addToCart={ this.addToCart }
                cart={ cart }
              />
            ) }
          />
          <Route
            path="/checkout"
            component={ Checkout }
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
