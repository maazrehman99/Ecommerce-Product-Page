import React from "react";
import "./styles/app.scss";
import Home from "./components/Home";
import Header from "./components/Header";
import {Toaster} from "react-hot-toast"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
  
        </Routes>
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
