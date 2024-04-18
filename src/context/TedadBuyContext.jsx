import { useState, createContext } from "react";

export const TedadBuyProvider = createContext();

function TedadBuyContext({ children }) {
  const [checkout, setCheckout] = useState([]);

  return (
    <TedadBuyProvider.Provider value={{ checkout, setCheckout }}>
      {children}
    </TedadBuyProvider.Provider>
  );
}

export default TedadBuyContext;
