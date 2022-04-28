import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      totalShopping: 0,
      finalCart: [],
      name: '',
      email: '',
      cpf: '',
      cep: '',
      address: '',
      phone: '',
      payForm: '',
      redirect: false,
      buttonDisabled: true,
    };
  }

  componentDidMount() {
    const { location: { state: { finishShopping } } } = this.props;
    console.log(finishShopping);
    this.setState(({
      finalCart: finishShopping || [],
    }), () => {
      const { finalCart } = this.state;
      if (finalCart !== undefined) {
        const result = finalCart.reduce((acc, curr) => acc + curr.total, 0);
        this.setState({
          totalShopping: result || 0,
        });
      }
    });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({
      [name]: value,
    }), () => this.verifyInputs());
  }

  verifyInputs = () => {
    const { name, email, cpf, cep, address, phone, payForm } = this.state;
    if (name.length > 0
      && email.length > 0
      && cpf.length > 0
      && cep.length > 0
      && address.length > 0
      && phone.length > 0
      && payForm.length > 0) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  buttonSendInfos = () => {
    this.setState({
      redirect: true,
      name: '',
      email: '',
      cpf: '',
      cep: '',
      address: '',
      phone: '',
      payForm: '',
    });
  }

  render() {
    const { location: { state: { finishShopping } } } = this.props;
    const { totalShopping, buttonDisabled, redirect } = this.state;
    console.log(finishShopping);
    return (
      <div>
        <section>
          <h1>Revise seus Produtos</h1>
          {finishShopping !== undefined && finishShopping.map((element, index) => {
            const { title,
              total,
              thumbnail } = element;
            return (
              <div key={ index }>
                <img src={ thumbnail } alt={ title } />
                <h2>{ title }</h2>
                <h2>{ total }</h2>
              </div>
            );
          })}
          <h1>{ totalShopping }</h1>
        </section>
        <section>
          <input
            data-testid="checkout-fullname"
            type="text"
            name="name"
            id=""
            onChange={ this.onInputChange }
          />
          <input
            data-testid="checkout-email"
            type="email"
            name="email"
            id=""
            onChange={ this.onInputChange }
          />
          <input
            data-testid="checkout-cpf"
            type="text"
            name="cpf"
            id=""
            onChange={ this.onInputChange }
          />
          <input
            data-testid="checkout-phone"
            type="text"
            name="phone"
            id=""
            onChange={ this.onInputChange }
          />
          <input
            data-testid="checkout-cep"
            type="text"
            name="cep"
            id=""
            onChange={ this.onInputChange }
          />
          <input
            data-testid="checkout-address"
            type="text"
            name="address"
            id=""
            onChange={ this.onInputChange }
          />
        </section>
        <section>
          <input
            type="radio"
            name="payForm"
            value="boleto"
            id=""
            onChange={ this.onInputChange }
          />
          <input
            type="radio"
            name="payForm"
            value="visa"
            id=""
            onChange={ this.onInputChange }
          />
          <input
            type="radio"
            name="payForm"
            value="mastercard"
            id=""
            onChange={ this.onInputChange }
          />
          <input
            type="radio"
            name="payForm"
            value="elo"
            id=""
            onChange={ this.onInputChange }
          />
        </section>
        <button
          type="button"
          disabled={ buttonDisabled }
          onClick={ this.buttonSendInfos }
        >
          Confirmar
        </button>
        {redirect && <Redirect to="/" />}
      </div>
    );
  }
}

Checkout.propTypes = {
  finishShopping: PropTypes.arrayOf.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      finishShopping: PropTypes.arrayOf.isRequired,
    }),
  }).isRequired,
};

export default Checkout;
