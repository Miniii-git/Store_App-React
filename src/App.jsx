import { Route, Routes, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import Checkout from "./pages/Checkout";
import ProductsDetails from "./pages/ProductsDetails";
import FourHundredFour from "./pages/404";
import Header from "./components/Header";
import FFF from "./context/FFF";
import TedadBuyContext from "./context/TedadBuyContext";

function App() {
  return (
    <>
      <FFF>
        <TedadBuyContext>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductsDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/*" element={<FourHundredFour />} />
          </Routes>
        </TedadBuyContext>
      </FFF>
    </>
  );
}

export default App;
