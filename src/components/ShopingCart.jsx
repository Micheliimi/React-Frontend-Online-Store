import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import CartCard from './CartCard';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      // counter: 0,
      // mount: true,
      resume: [],
      redirect: false, /* >>>>>>> Estado adicionado p/ req 12 <<<<< */
      finishShopping: [],
    };
  }

  componentDidMount() {
    // O objetivo é criar o objeto que vai receber a quantidade.
    const { cart } = this.props;
    if (cart && cart.length > 0) {
      cart.map((element) => {
        const { price } = element;
        return this.setState((prevState) => ({
          resume: [...prevState.resume, { quant: 1, price }],
        }));
      });
    }
  }

  // >>>>>>> Função para req 12 <<<<<<<<
  redirectToCheckout = () => {
    this.setState({
      redirect: true,
    });
  }

  getPrice = (info) => {
    // console.log(info);
    this.setState((prevState) => ({
      finishShopping: [...prevState.finishShopping, info],
    }));
  }

  render() {
    const { cart } = this.props;
    // console.log(cart);
    const { resume, redirect, finishShopping } = this.state;
    return (
      <div>
        {cart.length > 0 ? cart.map((element, index) => {
          const { title, price, thumbnail, availableQuantity } = element;
          // console.log(availableQuantity);
          return (
            <div key={ title }>
              <CartCard
                key={ title }
                title={ title }
                price={ price }
                thumbnail={ thumbnail }
                availableQuantity={ availableQuantity }
                resume={ resume }
                id={ index }
                getPrice={ this.getPrice }
              />
              {/* >>>>>>>> requisito 12 -Botão abaixo adicionado por Michele <<<<<<<<< */}
              <button
                type="button"
                data-testid="checkout-products"
                onClick={ this.redirectToCheckout }
                // >>>>> Evento adiciona para req 12 <<<<<<
              >
                Finalizar Compra
              </button>
            </div>
          );
        }) : (
          <p
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </p>
        )}
        {/* >>>> Redirect abaixo adicionado para requisito 12 <<< */}
        {redirect && (<Redirect
          to={ {
            pathname: '/checkout',
            state: { finishShopping },
          } }
        />
        )}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf.isRequired,
};

export default ShoppingCart;
