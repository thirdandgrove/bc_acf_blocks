import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withAcfStore } from '../core';
import { ACF_ID_BUY_NOW, BC_BASE_URL } from 'acf/constants';
import { addToCart, fetchProduct } from 'acf/actions';

class BuyNow extends Component {
  shouldComponentUpdate(nextProps) {
    return !!nextProps.productList[this.state.sku];
  }

  handleBuyNow = () => {
    // navigate to the checkout with this product in cart
    window.location = `${BC_BASE_URL}/cart.php?action=buy&sku=${
      this.props.product.sku
    }`;
  };
  render() {
    return (
      <div className="acf-add-to-cart">
        <div className="acf-add-to-cart__inner">
          <button
            className="acf-add-to-cart__button"
            type="button"
            onClick={this.handleBuyNow}>
            <i className="acf-add-to-cart__icon" />
            <span className="acf-add-to-cart__label">{'Buy Now!'}</span>
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ productState }) {
  return { ...productState };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart, fetchProduct }, dispatch);
}

const BuyNowWithStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyNow);

ReactDOM.render(
  withAcfStore(BuyNowWithStore),
  document.getElementById(ACF_ID_BUY_NOW)
);
