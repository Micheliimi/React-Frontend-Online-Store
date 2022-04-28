import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import imagem from '../download.png';

class CartButton extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/shoppingcart',
          } }
        >
          <img src={ imagem } alt="Carrinho de Compras" width="30" />
          {(cart !== undefined)
            && (
              <p data-testid="shopping-cart-size">
                { cart.length }
              </p>
            )}
        </Link>
      </div>
    );
  }
}

CartButton.propTypes = {
  cart:
  PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CartButton;
