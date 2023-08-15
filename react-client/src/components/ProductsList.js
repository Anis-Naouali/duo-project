import React from 'react';
const ProductsList = (props) => {

  return (
    <div className='products-details'>
      {props.data.map((e) => {
        return (<div class="card">
          <div class="card-border-top"></div>
          <div >
            <img class="img" src={e.imageUrl} onClick={() => props.detail(e)} />
          </div>
          <span> {e.name}</span>
          <p class="job"> {e.price}DT</p>
          <button onClick={()=>props.cartFunc(e)}>Add to cart</button>
        </div>)

      })}

    </div>
  )
}
export default ProductsList;