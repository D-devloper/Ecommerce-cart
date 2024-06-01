import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Cart/Home";
import Cart from "./Cart/Cart";
import { useState } from "react";
import Login from "./Cart/Login";
import ProtectedRoute from "./ProtectedRoute";

// import './App.css'
function App() {
  const [cart, setcart] = useState([]);
  const addtoCart = (prd) => {
    let ispresent = false;
    cart.forEach((item, index) => {
      if (item.id === prd.id) {
        ispresent = true;
      }
    });
    if (ispresent) {
      alert("this product is already added");
    } else {
      setcart([...cart, prd]);
      console.log(cart);
    }

    //  setcart([...cart,prd])

    //  console.log(cart)
  };
  const handleqty = (sign, index) => {
    let ind = cart.findIndex((value, pos) => pos == index);
    console.log(ind);
    switch (sign) {
      case "+":
        cart[ind].qty++;
        break;
      case "-":
        if (cart[ind].qty != 1) {
          cart[ind].qty--;
        }
    }
    setcart([...cart]);
  };

  const handleremove = (index) => {
    cart.splice(index, 1);
    setcart([...cart]);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout cartlength={cart.length} />}>
            <Route index element={<Home addtoCart={addtoCart} />}></Route>
            <Route path="/login" element={<Login />}></Route>
            {/* <Route path="/cart" element={  <Protectroute Comp={Cart} cart={cart} handleqty={handleqty}  handleremove={handleremove}  /> } ></Route> */}
            <Route
              path="/cart"
              element={
                <ProtectedRoute
                  Comp={Cart}
                  cart={cart}
                  handleqty={handleqty}
                  handleremove={handleremove}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
