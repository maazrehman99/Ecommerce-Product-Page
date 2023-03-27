import React from "react";
import "./styles/app.scss";
import Home from "./components/Home";
import Header from "./components/Header";
import {Toaster} from "react-hot-toast"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
  
        </Routes>
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
