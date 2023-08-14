import './App.css';
import Search from "./components/Search";
import ProductsList from './components/ProductsList';
import { useState , useEffect } from 'react'
import CartList from './components/CartList';
import axios from "axios"
import ProductDetails from './components/ProductDetails'

const App = () => {
const [menuView, setMenuView] = useState(false);
const [view,setView] = useState("productList");
const toggleMenu = ()=> {
  setMenuView(!menuView)
}
const switchView = (x) => {
  setView(x)
}
const [whey,setWhey] = useState([])
const [gainer,setGainer] = useState([])
const [preworkout,setPreworkout] = useState([])
const [details,setDetails] = useState({})

const detail = (obj)=> {
setDetails(obj)
setView("ProductDetails")
}
console.log(details);

const search = (input) => {
  if (!input) {
    setTrigger(!trigger)
  }

  setData(
    data.filter((e)=>
    e.name.toLowerCase().includes(input.toLowerCase())
  ))
}

const [cart,setCart] = useState([])
console.log(cart);
const cartFunc = (obj)=>{
setCart([...cart,obj])
}

const emptyCart = () => {
  setCart([])
}
const removeCart =(index)=>{
  var newState = [...cart]
  newState.splice(index,1)
  setCart(newState)
}


const [data,setData] = useState([])
const [trigger,setTrigger] = useState(false)

useEffect (()=>{
axios.get("http://localhost:5000/api/products").then((resp)=>{
setData(resp.data)
setWhey(resp.data.filter((e)=>{return e.categories === "whey"}))
setGainer(resp.data.filter((e)=>{return e.categories === "mass gainer"}))
setPreworkout(resp.data.filter((e)=>{return e.categories === "pre workout"}))
})
  .catch((err)=> console.log(err))
},[trigger])



  return (
    <div className="App">
        <div className="nav">
          <img className="logo" onClick={()=> {setTrigger(!trigger) 
            switchView("productList")}} src="https://govindjee.store/cdn/shop/collections/high-protein-906413.jpg?v=1679136846" />
          <span className="logo" ></span>
          { view ==="productList" &&<Search  search = {search}/>}
        { view ==="productList" && <span className="items" onClick={toggleMenu}>
            Categories 
            &#9660;
          </span>}
          <span className="items" onClick={()=>{switchView("cart")}}>
            Cart
          </span>
        </div>
       {menuView && <div className="menu">
            <span className='menu-item' onClick={()=>{setData(whey)}}>Whey</span>
            <span className='menu-item' onClick={()=>{setData(gainer)}} >Mass gainer</span>
            <span className='menu-item' onClick={()=>{setData(preworkout)}} >Pre-workout</span>
          </div>}
          {view ==="productList" && <ProductsList detail={detail} data={data} cartFunc={cartFunc}/>}
          {view ==="cart"&&<CartList cartData={cart} empty={emptyCart} removeCart={removeCart}/>}
          {view ==="ProductDetails"&&<ProductDetails details={details}/>} 
    </div>
  );
}

export default App;
