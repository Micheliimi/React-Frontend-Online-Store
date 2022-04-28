import React from 'react';
import PropTypes from 'prop-types';

class FormAvaluation extends React.Component {
  render() {
    const { onInputChange, handleReviewSubmit } = this.props;
    return (
      <form>
        <input
          onChange={ onInputChange }
          name="email"
          type="email"
          data-testid="product-detail-email"
        />
        <select onChange={ onInputChange } name="productRate" id="productRate">
          <option selected value="1" data-testid="1-rating">1</option>
          <option value="2" data-testid="2-rating">2</option>
          <option value="3" data-testid="3-rating">3</option>
          <option value="4" data-testid="4-rating">4</option>
          <option value="5" data-testid="5-rating">5</option>
        </select>
        <textarea
          name="message"
          data-testid="product-detail-evaluation"
          // style={ { resize: none } }
          onChange={ onInputChange }
        />
        <button
          onClick={ handleReviewSubmit }
          type="button"
          data-testid="submit-review-btn"
        >
          Enviar
        </button>
      </form>
    );
  }
}

FormAvaluation.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  handleReviewSubmit: PropTypes.func.isRequired,
};

export default FormAvaluation;
