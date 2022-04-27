import React from 'react';
import PropTypes from 'prop-types';

class CartCard extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      mount: true,
    };
    // this.mountCounter = () => this.setState({mount: true});
    // this.unmountCounter = () => this.setState({mount: false});
    this.increment = () => this
      .setState((prevState) => ({ counter: prevState.counter + 1 }));
    this.decrement = () => this
      .setState((prevState) => ({ counter: prevState.counter - 1 }));
  }

  render() {
    const { title, price, thumbnail } = this.props;
    const { mount, counter } = this.state;

    return (
      <div>
        <div>
          <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        </div>
        <div>
          <img src={ thumbnail } alt={ title } />
          <p>{ `R$ ${price * counter}` }</p>
        </div>
        <div>
          {/*
            <h1>Mount and unmount counter,
            if "this.sate.counter" were less than "0"</h1> */}
          {/*
            <button
              onClick={ this.mountCounter }
              disabled={ this.state.mount }
            >
            Mount</button>
          */}
          {/* <button
           onClick={ this.unmountCounter }
           disabled={ !this.state.mount }
           >
           Unmount
           </button> */
          }
          { // conditional rendering;
            ({ mount })
                && (
                  <div>
                    <h3 data-testid="shopping-cart-product-quantity">
                      { counter }
                    </h3>
                    <button
                      data-testid="product-increase-quantity"
                      type="submit"
                      onClick={ this.increment }
                    >
                      +
                    </button>
                    <button
                      data-testid="product-decrease-quantity"
                      type="submit"
                      onClick={ this.decrement }
                    >
                      -
                    </button>
                  </div>
                )
          }
        </div>
      </div>
    );
  }
}

CartCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default CartCard;
