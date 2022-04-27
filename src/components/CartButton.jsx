import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import imagem from '../download.png';

class CartButton extends React.Component {
  render() {
    // const { cart } = this.props;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/shoppingcart',
            // state: { cart },
          } }
        >
          <img src={ imagem } alt="Carrinho de Compras" width="30" />
        </Link>
      </div>
    );
  }
}

// CartButton.propTypes = {
//   cart: PropTypes.arrayOf.isRequired,
// };

export default CartButton;
