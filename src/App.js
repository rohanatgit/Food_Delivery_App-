import React from "react";
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Home from  "./pages/Home/Home";
import Cart from "./pages/Home/Cart";


function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/cart" element={<Cart/>} ></Route>
          </Routes>
    </Router>
  );
}

export default App;
