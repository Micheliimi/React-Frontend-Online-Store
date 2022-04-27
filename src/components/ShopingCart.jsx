import React from 'react';
import PropTypes from 'prop-types';
import CartCard from './CartCard';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      // counter: 0,
      // mount: true,
      resume: [],
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

  render() {
    const { cart } = this.props;
    const { resume } = this.state;
    return (
      <div>
        {cart.length > 0 ? cart.map((element, index) => {
          const { title, price, thumbnail } = element;
          return (
            <div key={ title }>
              <CartCard
                key={ title }
                title={ title }
                price={ price }
                thumbnail={ thumbnail }
                // mount={ mount }
                resume={ resume }
                id={ index }
              />
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
