import { createContext, useState, useEffect } from "react";
import api from "../services/config";

export const DataContext = createContext();

function FFF({ children }) {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const res = await api.get("/products");
      setData(res);
      setIsLoading(false);
    }
    getData();
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading }}>
      {children}
    </DataContext.Provider>
  );
}

export default FFF;
