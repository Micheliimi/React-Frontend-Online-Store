import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail, addToCart } = this.props;
    return (
      <div data-testid="product">
        <div>
          <h4>{ title }</h4>
        </div>
        <div>
          <img src={ thumbnail } alt={ title } />
          <p>{ `R$ ${price}` }</p>
          <Link
            data-testid="product-detail-link"
            to={ {
              pathname: '/productdetails',
              state: { title, price, thumbnail },
              data: { addToCart },
            } }
          >
            Mais Detalhes
          </Link>
          <button
            data-testid="product-add-to-cart"
            type="button"
            onClick={ () => addToCart(title, price, thumbnail) }
          >
            Adicionar
          </button>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
