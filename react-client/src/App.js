import "./App.css";
import Search from "./components/Search";
import ProductsList from "./components/ProductsList";
import { useState, useEffect } from "react";
import CartList from "./components/CartList";
import axios from "axios";
import ProductDetails from "./components/ProductDetails";
import ProductsListasadmin from "./components/ProductListAsAdmin.jsx";
import UpdateProduct from "./components/UpdateProduct";
import Login from "./components/Login";
import AddProduct from "./components/Add";

const App = () => {
  const [menuView, setMenuView] = useState(false);
  const [view, setView] = useState("productList");
  const toggleMenu = () => {
    setMenuView(!menuView);
  };
  const switchView = (x) => {
    setView(x);
  };
  const [whey, setWhey] = useState([]);
  const [gainer, setGainer] = useState([]);
  const [preworkout, setPreworkout] = useState([]);
  const [details, setDetails] = useState({});

  const detail = (obj) => {
    setDetails(obj);
    setView("ProductDetails");
  };

  const search = (input) => {
    if (!input) {
      setTrigger(!trigger);
    }

    setData(
      data.filter((e) => e.name.toLowerCase().includes(input.toLowerCase()))
    );
  };

  const [cart, setCart] = useState([]);
  console.log(cart);
  const cartFunc = (obj) => {
    setCart([...cart, obj]);
  };

  const emptyCart = () => {
    if (cart.length !== 0) {
      setCart([]);
      alert("Thank you for buying")
    } else {
      alert("Cart is empty ! Go shop")
      switchView("productList")
    }

  };
  const removeCart = (index) => {
    var newState = [...cart];
    newState.splice(index, 1);
    setCart(newState);
  };

  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((resp) => {
        setData(resp.data);
        setWhey(
          resp.data.filter((e) => {
            return e.categories === "whey";
          })
        );
        setGainer(
          resp.data.filter((e) => {
            return e.categories === "mass gainer";
          })
        );
        setPreworkout(
          resp.data.filter((e) => {
            return e.categories === "pre workout";
          })
        );
      })
      .catch((err) => console.log(err));
  }, [trigger]);

  //addproduct:
  const addProduct = (obj) => {
    console.log(obj);
    axios
      .post(`http://localhost:5000/api/products/add`, obj)
      .then((result) => {
        setTrigger(!trigger);
        switchView("ProductsListasadmin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //updateproduct:
  const [element, setelement] = useState("");
  const setElement = (e) => {
    setelement(e);
  };
  const uppdateproduct = (id, obj) => {
    axios
      .put(`http://localhost:5000/api/products/update/${id}`, obj)
      .then((result) => {
        switchView("ProductsListasadmin");
        setTrigger(!trigger);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //delete product :
  const deleteProduct = (obj) => {
    axios
      .delete(`http://localhost:5000/api/products/delete/${obj._id}`)
      .then((result) => {
        setTrigger(!trigger);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // login
  const verifAdmin = (obj) => {
    console.log(obj, "obj");
    axios
      .get(`http://localhost:5000/api/users`)
      .then((result) => {
        console.log(result);
        result &&
          result.data.map((e) => {
            if (e.email === obj.email && e.password === obj.password) {
              switchView("ProductsListasadmin");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="nav">
        <img
          className="logo"
          onClick={() => {
            setTrigger(!trigger);
            switchView("productList");
          }}
          src="https://govindjee.store/cdn/shop/collections/high-protein-906413.jpg?v=1679136846"
        />
        <span className="logo"></span>
        {view === "productList" && <Search search={search} />}
        {view === "productList" &&
          <div class="radio-input">
            <p className="ppp">Gainer</p>

            <input value="value-1" name="value-radio" id="value-1" type="radio" onClick={() => { setData(gainer) }} />
            <div class="plus1">
              <div class="plus2"></div>
            </div>
            <p className="ppp">Whey</p>
            <input value="value-2" name="value-radio" id="value-2" type="radio" onClick={() => { setData(whey) }} />
            <div class="plus1">
              <div class="plus2"></div>
            </div>
            <p className="ppp">Preworkout</p>
            <input value="value-3" name="value-radio" id="value-3" type="radio" onClick={() => { setData(preworkout) }} />
            <div class="plus1">
              <div class="plus2"></div>
            </div>
          </div>}
        {view !== "login" &&
          view !== "addproduct" &&
          view !== "updateproject" &&
          view !== "ProductsListasadmin" && (
            <span
              className="items"
              onClick={() => {
                switchView("cart");
              }}
            >
              🛒
            </span>
          )}
        {view !== "login" &&
          view !== "addproduct" &&
          view !== "updateproject" &&
          view !== "ProductsListasadmin" && (
            <span
              className="items"
              onClick={() => {
                switchView("login");
              }}
            >
              Admin
            </span>
          )}
      </div>
      <br />
      {view === "productList" && (
        <ProductsList detail={detail} data={data} cartFunc={cartFunc} />
      )}
      {view === "cart" && (
        <CartList cartData={cart} empty={emptyCart} removeCart={removeCart} switchView={switchView} />
      )}
      {view === "ProductDetails" && (
        <ProductDetails cartFunc={cartFunc} details={details} />
      )}
      {view === "addproduct" && (
        <AddProduct addProduct={addProduct} switchView={switchView} />
      )}
      {view === "updateproject" && (
        <UpdateProduct
          element={element}
          uppdateproduct={uppdateproduct}
          switchView={switchView}
        />
      )}
      {view === "login" && (
        <Login verifAdmin={verifAdmin} switchView={switchView} />
      )}
      {view === "ProductsListasadmin" && (
        <ProductsListasadmin
          setElement={setElement}
          data={data}
          switchView={switchView}
          uppdateproduct={uppdateproduct}
          deleteProduct={deleteProduct}
        />
      )}
    </div>
  );
};

export default App;
