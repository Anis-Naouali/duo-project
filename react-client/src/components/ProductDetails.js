import React from 'react'

const ProductDetails = (props) => {
 
      return (
        <div className='products-list'>
            <div class="card">
                <div class="card-border-top"></div>
                <div >
                  <img class="img" src={props.details.imageUrl}/> 
                </div>
                <span> {props.details.name}</span>
                <p class="job"> {props.details.description}</p>
                <p class="job"> {props.details.price}</p>
                <p class="job"> {props.details.categories}</p>
                <button>Add to cart</button>
              </div>  
        </div>
      );
}

export default ProductDetails