import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import ProductsDetails from "./pages/ProductsDetails";
import Header from "./components/Header";

import { Audio } from "react-loader-spinner";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
