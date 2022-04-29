import React from 'react';
import PropTypes from 'prop-types';

class CartCard extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      mount: true,
      total: 0,
      info: {},
    };
  }

  componentDidMount() {
    const { price } = this.props;
    this.setState(({
      total: price,
    }), () => this.sendResume());
  }

  // mountCounter = () => this.setState({mount: true});
  // unmountCounter = () => this.setState({mount: false});

  increment = () => {
    const { availableQuantity } = this.props;
    const { counter } = this.state;
    console.log(availableQuantity);
    console.log('entrou função soma ');
    if (counter < availableQuantity) {
      this
        .setState((prevState) => (
          { counter: prevState.counter + 1 }), () => this.sendResume());
    }
    // this
    //   .setState((prevState) => {
    //     console.log(prevState.counter);
    //     console.log(availableQuantity);
    //     if (prevState.counter < availableQuantity) {
    //       console.log('entrou na primeira parte');
    //       return (({
    //         counter: prevState.counter + 1,
    //       }), () => {
    //         console.log('entrou na segunda parte');
    //         this.sendResume();
    //       }
    //       );
    //     }
    //   });
  }

  decrement = () => {
    this
      .setState((prevState) => ({ counter: prevState.counter - 1 }), () => this
        .sendResume());
  }

  sendResume = () => {
    console.log('hellouu');
    const { title, price, thumbnail, getPrice } = this.props;
    const { counter } = this.state;
    console.log(counter);
    this.setState(({
      total: price * counter,
    }), () => {
      const { total } = this.state;
      this.setState(({
        info: { title,
          total,
          thumbnail },
      }), () => {
        const { info } = this.state;
        console.log('hello');
        getPrice(info);
      });
    });
  }

  render() {
    const { title, price, thumbnail, availableQuantity } = this.props;
    console.log(availableQuantity);
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
        <p>{ availableQuantity }</p>
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
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  getPrice: PropTypes.func.isRequired,
  availableQuantity: PropTypes.number.isRequired,
};

export default CartCard;
