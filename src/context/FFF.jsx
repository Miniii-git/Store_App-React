import { createContext, useState, useEffect } from "react";
import api from "../services/config";

export const DataContext = createContext();

function FFF({ children }) {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const res = await api.get("/products");
      setData(res);
      setProducts(res);
      setIsLoading(false);
    }
    getData();
    console.log(data);
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading, products, setProducts }}>
      {children}
    </DataContext.Provider>
  );
}

export default FFF;
