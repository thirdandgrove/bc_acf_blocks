import React from 'react';

const ProductInCart = ({ sku, product, removeFromCart }) => {
  const { qty, images, price, title } = product;
  return (
    <div className="acf-mini-cart-product">
      <div className="acf-mini-cart-product__image">
        <img src={images[0]} alt={title} />
      </div>
      <div className="acf-mini-cart-product__price">
        {Number(price).toFixed(2)}
      </div>
      <div className="acf-mini-cart-product__title">{title}</div>
      <div className="acf-mini-cart-product-variant">
        <span className="acf-mini-cart-product-variant__qty">QTY: {qty}</span>
        <span className="acf-mini-cart-product-variant__separator">|</span>
      </div>
      <span
        className="acf-mini-cart-product__remove"
        title={'Remove'}
        onClick={() => removeFromCart(sku, qty, price)}>
        X
      </span>
    </div>
  );
};

export default ProductInCart;
