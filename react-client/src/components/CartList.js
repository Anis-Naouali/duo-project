import { React, useState, useEffect } from 'react';

const CartList = (props) => {

  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false)
  useEffect(() => {
    setData(props.cartData);
  }, [trigger]);
  var sum = data.reduce((acc, e) => acc + (e.price), 0)

  return (
    <div class="card0" >
      <div class="row">
        <div class="col-md-8 cart99">
          <div class="title0">
            <div class="row99">
              <div class="col99"><h4><b>Shopping Cart</b></h4></div>
              <div class="col99 align-self-center text-right text-muted">{data.length} items</div>
            </div> <br />
          </div>
          <div class="row99 border-top border-bottom">
            {data.map((e, i) => {
              return (
                <div class="row99 main99 align-items-center">
                  <div class="col-2">
                    <img class="img-fluid" src={e.imageUrl}></img>
                  </div>
                  <div class="col99">
                    <div class="row99 text-muted">{e.name}</div>
                    <div class="row99">{e.categories}</div>
                  </div>

                  <div class="col99" onClick={() => {
                    props.removeCart(i)
                    setTrigger(!trigger)
                  }}>{e.price} DT
                    <br /><br /><button class="close">REMOVE</button>
                  </div><hr />
                </div>
              )
            }
            )}
          </div>
          <div class="col-md-4 summary99">
            <div><h5><b>Summary</b></h5></div>
            <hr />

            <form>
              <p>GIVE CODE</p>
              <input id="code" placeholder="Will be available soon" readonly="readonly" />
            </form> <br />
            <div class="row" >
              <div class="col99">TOTAL PRICE</div>
              <div class="col99 text-right"> {sum} DT</div>
            </div>
            <button class="btn99" onClick={() => {
              props.empty()
              setTrigger(!trigger)

            }}>CHECKOUT</button>
          </div>
          <div class="back-to-shop"><button onClick={() => { props.switchView("productList") }}>Back to shop</button><br /><hr />
          </div>
        </div>
      </div >
    </div >
  )
}

export default CartList





