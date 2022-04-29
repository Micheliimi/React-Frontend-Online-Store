import React from 'react';
import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';
import CartButton from './CartButton';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      inputValue: '',
      products: [],
      category: '',
    };
  }

  componentDidMount() {
    this.callApiCategories();
  }

  callApiCategories = async () => {
    const result = await getCategories();
    this.setState({
      categories: result,
    });
  }

  handleInput = ({ target }) => {
    const { value } = target;
    this.setState({
      inputValue: value,
    });
  }

  searchApi = async () => {
    const { inputValue, category } = this.state;
    const result = await getProductsFromCategoryAndQuery(category, inputValue);
    // console.log(result);
    this.setState({
      products: result.results,
    });
  }

  searchCategory = ({ target }) => {
    const { id } = target;
    this.setState(({
      category: id,
    }), () => this.searchApi());
  }

  render() {
    const { categories, products } = this.state;
    const { addToCart, cart, availableQuantity } = this.props;
    // const quantity = 'available_quantity';

    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          name="inputValue"
          id=""
          onChange={ this.handleInput }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.searchApi }
        >
          Pesquisar
        </button>
        <CartButton cart={ cart } availableQuantity={ availableQuantity } />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {categories.map((element) => {
          const { name, id } = element;
          return (
            <button
              data-testid="category"
              type="button"
              key={ name }
              id={ id }
              onClick={ this.searchCategory }
            >
              { name }
            </button>
          );
        })}
        {products.length > 0 && (
          products.map((element) => {
            const { title,
              price,
              thumbnail,
              available_quantity: quantity,
              shipping,
            } = element;
            const { free_shipping: freeShipping } = shipping;
            // const quantity = element.available_quantity; // Outra solução para renomear chave sem camel case.
            return (
              <ProductCard
                key={ title }
                title={ title }
                price={ price }
                thumbnail={ thumbnail }
                availableQuantity={ quantity }
                addToCart={ addToCart }
                freeShipping={ freeShipping }
              />
            );
          }))}
      </div>
    );
  }
}

MainPage.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf.isRequired,
  availableQuantity: PropTypes.number.isRequired,
};

export default MainPage;
