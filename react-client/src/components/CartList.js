import {React, useState, useEffect} from 'react';

const CartList = (props) => {

  const [data, setData] = useState([]);
  const [trigger,setTrigger] = useState(false)
  useEffect(() => {
  setData(props.cartData);
  }, [trigger]);

  var sum = data.reduce((acc,e)=>acc+(e.price),0)


  return (
    <div className='cart-list'>
  <h1>My cart</h1>

  {data.map((e,i)=> {
    return <div className='cart-item'>
    <span>Product Name: {e.name}</span>
    <span>Price: {e.price}</span>
    <button className='cart-list-button' onClick={()=>{props.removeCart(i) 
    setTrigger(!trigger)}
    }>Remove</button>
  </div>
  })}
  
  <h3>Total: {sum}DT </h3>
  <button onClick={()=> {props.empty()
  setTrigger(!trigger)}}>checkout</button>
</div>
  )
}

export default CartList

