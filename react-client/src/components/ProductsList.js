import React from 'react';
const ProductsList = (props) => {
    return (
        <div className='products-list'>
            {props.data.map((e)=>{
                return (                <div class="card">
                <div class="card-border-top"></div>
                <div >
                  <img class="img" src={e.imageUrl}/> 
                </div>
                <span> {e.name}</span>
                <p class="job"> {e.price}</p>
                <button> Click</button>
              </div>)

            })}
        
        </div>
    )
}
export default ProductsList;