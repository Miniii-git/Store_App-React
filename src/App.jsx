import { useState, useEffect, createContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import ProductsDetails from "./pages/ProductsDetails";
import Header from "./components/Header";
import api from "./services/config";

export const dataContext = createContext();

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get("/").then((res) => setData(res));
  }, []);
  console.log(data);

  return (
    <>
      <Header />
      <dataContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </dataContext.Provider>
    </>
  );
}

export default App;
