import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import ProductForm from "./components/ProductForm/ProductForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
          path="product-form"
          element={
            <ProductForm />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
