import './App.css';
import Search from "./components/Search";
import ProductsList from './components/ProductsList';
import { useState } from 'react'
import CartList from './components/CartList';

const App = () => {
const [menuView, setMenuView] = useState(false);
const [view,setView] = useState("productList");
const toggleMenu = ()=> {
  setMenuView(!menuView)
}
const switchView = (x) => {
  setView(x)
}
  return (
    <div className="App">
        <div className="nav">
          <span className="logo" onClick={()=>switchView ("productList")}>TEK STORE</span>
          { view ==="productList" &&<Search />}
        { view ==="productList" && <span className="items" onClick={toggleMenu}>
          &#9660;
            CATEGORIES
            &#9660;
          </span>}
          <span className="items" onClick={()=>switchView ("cart")}>
            🛒
            CART
          </span>
        </div>
       {menuView && <div className="menu">
            <span className='menu-item'>computers</span>
            <span className='menu-item'>phones</span>
            <span className='menu-item'>electronics</span>
          </div>}
          {view ==="productList" && <ProductsList/>}
          {view ==="cart"&&<CartList/>}   
    </div>
  );
}

export default App;
