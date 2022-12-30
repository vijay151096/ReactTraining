import "./styles/App.css";
import React, { useContext } from "react";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./store/UserContext";
import Login from "./components/Login/Login";
import SampleComponent from "./components/SampleComponent";

function App() {
  const { isAuthenticated } = useContext(UserContext);

  const home = (
    <Routes>
      <Route path="/" exact element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );

  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        {!isAuthenticated && <Login />}
        {isAuthenticated && home}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
