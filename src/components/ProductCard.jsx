import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title,
      price,
      thumbnail,
      availableQuantity,
      addToCart,
      freeShipping,
    } = this.props;
    // console.log(availableQuantity);
    return (
      <div data-testid="product">
        <div>
          <h4>{ title }</h4>
        </div>
        <div>
          <img src={ thumbnail } alt={ title } />
          <p>{ `R$ ${price}` }</p>
          {freeShipping && <p data-testid="free-shipping">Frete Grátis</p>}
          <Link
            data-testid="product-detail-link"
            to={ {
              pathname: '/productdetails',
              state: { title, price, thumbnail },
            } }
          >
            Mais Detalhes
          </Link>
          <button
            data-testid="product-add-to-cart"
            type="button"
            onClick={ () => addToCart(title, price, thumbnail, availableQuantity) }
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
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  availableQuantity: PropTypes.number.isRequired,
  freeShipping: PropTypes.bool.isRequired,
};

export default ProductCard;
