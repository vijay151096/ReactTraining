import "./styles/App.css";
import React from "react";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
