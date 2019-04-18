import { types } from 'acf/constants';

export const initialState = {
  cartProducts: {},
  count: 0,
  totalPrice: 0
};

export default (state = initialState, { type, payload = {} }) => {
  const products = state.cartProducts;
  const { sku, qty, price } = payload;
  const productsPrice = price * qty;

  switch (type) {
    case types.UPDATE_IN_CART: {
      const totalPrice =
        state.totalPrice - products[sku].qty * price + productsPrice;
      const count = state.count - products[sku].qty + qty;
      return {
        ...state,
        cartProducts: {
          ...products,
          [sku]: {
            ...products[sku],
            qty
          }
        },
        count,
        totalPrice
      };
    }
    case types.ADD_TO_CART: {
      return {
        ...state,
        cartProducts: {
          ...products,
          [sku]: { ...payload }
        },
        count: state.count - (products[sku] ? products[sku].qty : 0) + qty,
        totalPrice: products[sku]
          ? state.totalPrice
          : state.totalPrice + productsPrice
      };
    }
    case types.REMOVE_FROM_CART: {
      delete products[sku];

      return {
        ...state,
        cartProducts: { ...products },
        count: state.count - qty,
        totalPrice: Boolean(state.count - qty)
          ? state.totalPrice - productsPrice
          : 0
      };
    }
    default:
      return state;
  }
};
