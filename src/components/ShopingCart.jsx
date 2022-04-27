import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { /* location: { state: { cart } }, */ cart } = this.props;
    // console.log(this.props);
    return (
      <div>
        {cart.length > 0 ? cart.map((element) => {
          const { title, price, thumbnail } = element;
          return (
            <div key={ title }>
              <div>
                <h4 data-testid="shopping-cart-product-name">{ title }</h4>
              </div>
              <div>
                <img src={ thumbnail } alt={ title } />
                <p>{ `R$ ${price}` }</p>
              </div>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
          );
        }) : (
          <p
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </p>
        )}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf.isRequired,
};

export default ShoppingCart;
