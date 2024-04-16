import { useState, createContext } from "react";

export const TedadBuyProvider = createContext();

function TedadBuyContext({ children }) {
  const [tedadBuy, setTedadBuy] = useState(0);

  function addHandler() {
    setTedadBuy((tedadBuy) => tedadBuy + 1);
  }

  return (
    <TedadBuyProvider.Provider value={{ tedadBuy, setTedadBuy }}>
      {children}
    </TedadBuyProvider.Provider>
  );
}

export default TedadBuyContext;
