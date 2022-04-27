import React from 'react';
import { Link } from 'react-router-dom';
import imagem from '../download.png';

class CartButton extends React.Component {
  render() {
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/shoppingcart',
          } }
        >
          <img src={ imagem } alt="Carrinho de Compras" width="30" />
        </Link>
      </div>
    );
  }
}

export default CartButton;
