import React from 'react';
import PropTypes from 'prop-types';
import CartButton from './CartButton';

class ProductDetails extends React.Component {
  render() {
    const {
      location:
      {
        state: { title, price, thumbnail },
        data: { addToCart },
      },
    } = this.props;
    return (
      <div>
        <CartButton />
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
    data: PropTypes.number,
  }).isRequired,
};

export default ProductDetails;
