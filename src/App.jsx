import { Route, Routes, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import Checkout from "./pages/Checkout";
import ProductsDetails from "./pages/ProductsDetails";
import FourHundredFour from "./pages/404";
import Header from "./components/Header";
import FFF from "./context/FFF";

function App() {
  return (
    <>
      <Header />
      <FFF>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/*" element={<FourHundredFour />} />
        </Routes>
      </FFF>
    </>
  );
}

export default App;
