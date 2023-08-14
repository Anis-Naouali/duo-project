import React from 'react'

const ProductDetails = () => {
 
      return (
        <div className="product-details">
          <div className="product-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVsv9PuVFEe0bhgG4SB6Oi7oqR1pRlUHOoQ&usqp=CAU" alt="MacBook Pro" />
          </div>
          <div className="product-info">
            <h1>MacBook Pro</h1>
            <p>The MacBook Pro is a high-end laptop designed for professionals who need a powerful computer for video editing, graphic design, and other demanding tasks.</p>
            <h2>Price : $1999</h2>
            <button>Add to Cart</button>
          </div>
        </div>
      );
}

export default ProductDetails