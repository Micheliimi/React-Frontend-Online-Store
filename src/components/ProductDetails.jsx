import React from 'react';
import PropTypes from 'prop-types';
import CartButton from './CartButton';
import FormAvaluation from './FormAvaluation';
import { getCategories } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      productRate: '1',
      avaluations: [],
    };
  }

  componentDidMount() {
    this.fetchReview();
    this.callApiCategories();
  }

  callApiCategories = async () => {
    await getCategories();
  }

  fetchReview = async () => {
    const result = await JSON.parse(localStorage.getItem('userReview'));
    this.setState({
      avaluations: result || [],
    });
  }

  handleReviewSubmit = (event) => {
    event.preventDefault();
    const { email, message, productRate } = this.state;
    this.setState((prevState) => ({
      avaluations: [...prevState.avaluations, {
        email,
        message,
        productRate,
      }],
    }), () => {
      const { avaluations } = this.state;
      localStorage.setItem('userReview', JSON.stringify(avaluations));
    });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      location:
      {
        state: { title, price, thumbnail },
      },
      addToCart,
      cart,
    } = this.props;
    const { avaluations } = this.state;
    // console.log(cart);
    return (
      <div>
        <CartButton
          cart={ cart }
        />
        <div>
          <h4 data-testid="product-detail-name">{ title }</h4>
        </div>
        <div>
          <img src={ thumbnail } alt={ title } />
          <p>{ `R$ ${price}` }</p>
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addToCart(title, price, thumbnail) }
        >
          Adicionar
        </button>
        <FormAvaluation
          handleReviewSubmit={ this.handleReviewSubmit }
          onInputChange={ this.onInputChange }
        />
        {avaluations.length > 0 && avaluations.map((element) => {
          const {
            email,
            message,
            productRate } = element;
          return (
            <div key={ email }>
              <h4>{ email }</h4>
              <p>{ message }</p>
              <h3>{ productRate }</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }),
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf.isRequired,
};

export default ProductDetails;
