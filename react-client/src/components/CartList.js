import React from 'react';

const CartList = () => {
  return (
    <div className='cart-list'>
  <h1>My cart</h1>
  <div className='cart-item'>
    <span>Product Name: Iphone</span>
    <span>Price: 100$</span>
    <button className='cart-list-button'>Remove</button>
  </div>
  <div className='cart-item'>
    <span>Product Name: pc</span>
    <span>Price: 100$</span>
    <button className='cart-list-button'>Remove</button>
  </div>
  <div className='cart-item'>
    <span>Product Name: machine</span>
    <span>Price: 100$</span>
    <button className='cart-list-button'>Remove</button>
  </div>
  <h3>Total: 300$</h3>
  <button >checkout</button>
</div>
  )
}

export default CartList