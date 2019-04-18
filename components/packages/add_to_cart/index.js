import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withAcfStore } from '../core';
import { ACF_ID_ADD_TO_CART } from 'acf/constants';
import { addToCart, fetchProduct } from 'acf/actions';

class AddToCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.product,
      qty: 1
    };
  }

  shouldComponentUpdate(nextProps) {
    return !!nextProps.productList[this.state.sku];
  }

  selectVariantHandler = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  addToCartHandler = () => {
    let { sku, qty } = this.state;
    const { product } = this.props;
    this.props.addToCart({ qty: 1, ...product });
  };

  render() {
    return (
      <div className="acf-add-to-cart">
        <div className="acf-add-to-cart__inner">
          <button
            className="acf-add-to-cart__button"
            type="button"
            onClick={this.addToCartHandler}>
            <i className="acf-add-to-cart__icon" />
            <span className="acf-add-to-cart__label">{'Add to cart'}</span>
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

const AddToCartWithStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart);

ReactDOM.render(
  withAcfStore(AddToCartWithStore),
  document.getElementById(ACF_ID_ADD_TO_CART)
);
