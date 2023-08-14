import './App.css';
import Search from "./components/Search";
import ProductsList from './components/ProductsList';
import { useState , useEffect } from 'react'
import CartList from './components/CartList';
import axios from "axios"

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

console.log(data);


  return (
    <div className="App">
        <div className="nav">
          <img className="logo" onClick={()=>setTrigger(!trigger)} src="https://govindjee.store/cdn/shop/collections/high-protein-906413.jpg?v=1679136846" />
          <span className="logo" ></span>
          { view ==="productList" &&<Search/>}
        { view ==="productList" && <span className="items" onClick={toggleMenu}>
          &#9660;
            Categories 
            &#9660;
          </span>}
          <span className="items" onClick={()=>switchView ("cart")}>
            🛒
            CART
          </span>
        </div>
       {menuView && <div className="menu">
            <span className='menu-item' onClick={()=>{setData(whey)}}>Whey</span>
            <span className='menu-item' onClick={()=>{setData(gainer)}} >Mass gainer</span>
            <span className='menu-item' onClick={()=>{setData(preworkout)}} >Pre-workout</span>
          </div>}
          {view ==="productList" && <ProductsList data={data}/>}
          {view ==="cart"&&<CartList/>}   
    </div>
  );
}

export default App;
